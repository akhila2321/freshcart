export const TestimonialExampleCode = `
"use client";
// import custom component
import TestimonialsCard from "components/cards/TestimonialsCard";

const Page = () => {

 const testimonialsData = {
   title: "The Best Grocery Store Design",
   desc: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Curabitur iaculis maximus purus, a gravida dui tempor eget.",
   image: "/images/avatar/avatar-1.jpg",
   name: "Alishia Jones",
   position: "Sales Manager",
 };

  return <TestimonialsCard data={testimonialsData} />;
};

export default Page;

`.trim();
