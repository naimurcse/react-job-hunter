import Header from "../Header/Header";
import "./Main.css";
import Hero from "./../Hero/Hero";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Footer from "../Footer/Footer";

const Main = () => {
   return (
      <>
         <Header></Header>
         <Hero></Hero>
         <JobCategory></JobCategory>
         <FeaturedJobs></FeaturedJobs>
         <Footer></Footer>
      </>
   );
};

export default Main;
