import { useEffect } from "react";
import "./FeaturedJobs.css";
import { useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import { Link } from "react-router-dom";
import JobDetails from "../JobDetails/JobDetails";

const FeaturedJobs = () => {
   const [featuredJobs, setFeaturedJobs] = useState([]);
   useEffect(() => {
      fetch("featuredJobs.json")
         .then((res) => res.json())
         .then((data) => setFeaturedJobs(data));
   }, []);

   const viewDetailsHandler = (job) => {
      <Link to={`/job/${job.id}`}></Link>;
      <JobDetails job={job}></JobDetails>;
   };

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
                  <FeaturedJob
                     key={featuredJob.id}
                     featuredJob={featuredJob}
                     viewDetailsHandler={viewDetailsHandler}
                  ></FeaturedJob>
               ))}
            </div>
            <div className="text-center">
               <button className="btn btn-large btn-primary  text-center">See All Jobs</button>
            </div>
         </div>
      </section>
   );
};

export default FeaturedJobs;
