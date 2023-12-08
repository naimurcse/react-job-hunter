import { useEffect } from "react";
import "./JobCategory.css";
import { useState } from "react";

const JobCategory = () => {
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch("categories.json")
         .then((res) => res.json())
         .then((data) => setCategories(data));
   }, []);

   console.log(categories);

   return (
      <section className="job-category">
         <div className="container">
            <div className="secondary-heading">
               <h2>Job Category List</h2>
               <p>
                  Explore thousands of job opportunities with all the information you need. Its your
                  future
               </p>
            </div>

            <div className="job-category-content">
               <div className="category">
                  <div className="icon-box">
                     <img src="" alt="" />
                  </div>
                  <div>
                     <h3>Account & Finance</h3>
                     <p>300 Jobs Available</p>
                  </div>
               </div>
               <div className="category">
                  <div className="icon-box">
                     <img src="" alt="" />
                  </div>
                  <div>
                     <h3>Account & Finance</h3>
                     <p>300 Jobs Available</p>
                  </div>
               </div>
               <div className="category">
                  <div className="icon-box">
                     <img src="" alt="" />
                  </div>
                  <div>
                     <h3>Account & Finance</h3>
                     <p>300 Jobs Available</p>
                  </div>
               </div>
               <div className="category">
                  <div className="icon-box">
                     <img src="" alt="" />
                  </div>
                  <div>
                     <h3>Account & Finance</h3>
                     <p>300 Jobs Available</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default JobCategory;
