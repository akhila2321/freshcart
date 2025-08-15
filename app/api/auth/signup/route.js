import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/db';
import User from '@/models/User';

export async function POST(request) {
  console.log('Signup request received');
  try {
    // Connect to the database
    console.log('Connecting to database...');
    await connectDB();
    console.log('Successfully connected to database');

    // Parse the request body
    const body = await request.json();
    console.log('Request body:', JSON.stringify(body, null, 2));
    
    const { name, email, password } = body;

    // Validate input
    if (!name || !email || !password) {
      const errorMessage = 'Missing required fields: ' + 
        (!name ? 'name ' : '') + 
        (!email ? 'email ' : '') + 
        (!password ? 'password' : '');
      
      console.error('Validation error:', errorMessage);
      return NextResponse.json(
        { message: errorMessage },
        { status: 400 }
      );
    }

    // Check if user already exists
    console.log('Checking for existing user with email:', email);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists with email:', email);
      return NextResponse.json(
        { message: 'User already exists with this email' },
        { status: 400 }
      );
    }

    // Hash the password
    console.log('Hashing password...');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    console.log('Creating new user...');
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save user to database
    console.log('Saving user to database...');
    const savedUser = await user.save();
    console.log('User saved successfully:', { id: savedUser._id, email: savedUser.email });

    // Return user data (without password)
    console.log('Preparing response...');
    const userData = {
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      createdAt: savedUser.createdAt,
    };

    return NextResponse.json(
      { 
        message: 'User registered successfully',
        user: userData 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup error:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      code: error.code,
      keyPattern: error.keyPattern,
      keyValue: error.keyValue
    });
    
    // Provide more specific error messages based on error type
    let errorMessage = 'Server error during signup';
    let statusCode = 500;
    
    if (error.name === 'ValidationError') {
      errorMessage = 'Validation error: ' + Object.values(error.errors).map(e => e.message).join(', ');
      statusCode = 400;
    } else if (error.name === 'MongoServerError' && error.code === 11000) {
      errorMessage = 'Email already exists';
      statusCode = 400;
    }
    
    return NextResponse.json(
      { 
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: statusCode }
    );
  }
}
