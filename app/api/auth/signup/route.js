import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/db';
import User from '@/models/User';

export async function POST(request) {
  try {
    // Connect to the database
    await connectDB();

    // Parse the request body
    const { name, email, password } = await request.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists with this email' },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save user to database
    const savedUser = await user.save();

    // Return user data (without password)
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
    return NextResponse.json(
      { message: 'Server error during signup' },
      { status: 500 }
    );
  }
}
