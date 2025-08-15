// This is a Server Component by default
export const metadata = {
  title: "Home | FreshCart - eCommerce Theme",
  keywords: "",
  description: "",};

// Import the client component
import HomeClient from "./HomeClient";

export default function Home() {
  return <HomeClient />;
}
