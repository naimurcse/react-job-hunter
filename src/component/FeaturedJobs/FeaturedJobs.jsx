import { useEffect } from "react";
import "./FeaturedJobs.css";
import { useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
   const [featuredJobs, setFeaturedJobs] = useState([]);
   useEffect(() => {
      fetch("featuredJobs.json")
         .then((res) => res.json())
         .then((data) => setFeaturedJobs(data));
   }, []);

   //    console.log(featuredJobs);

   return (
      <section className="featured-jobs">
         <div className="container">
            <div className="secondary-heading">
               <h2>Featured Jobs</h2>
               <p>
                  Explore thousands of job opportunities with all the information you need. Its your
                  future
               </p>
            </div>
            <div className="featured-jobs-content">
               {featuredJobs.map((featuredJob) => (
                  <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>
               ))}
            </div>
         </div>
      </section>
   );
};

export default FeaturedJobs;