/* 

***** How to setup your default home page ****

To setup or change your default home page you just need to change the path of Index component.
For example if you want to setup home2 layout as a default home page,
Import the Index file for home2 as shown below.

import Index from './(front-end)/(home)/homepage-2/Index'

*/

import Index from "./(home)/homepage-1/Index";

export const metadata = {
  title: "Home | FreshCart - eCommerce Theme",
  keywords: "",
  description: "",
};

const Home = () => {
  return <Index />;
};

export default Home;
