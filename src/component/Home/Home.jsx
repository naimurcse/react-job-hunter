import React from "react";
import Hero from "../Hero/Hero";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Footer from "../Footer/Footer";

const Home = () => {
   return (
      <main>
         <Hero></Hero>
         <JobCategory></JobCategory>
         <FeaturedJobs></FeaturedJobs>
         <Footer></Footer>
      </main>
   );
};

export default Home;
