import { useEffect } from "react";
import "./JobCategory.css";
import { useState } from "react";
import Category from "../Category/Category";

const JobCategory = () => {
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch("categories.json")
         .then((res) => res.json())
         .then((data) => setCategories(data));
   }, []);

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
               {categories.map((element) => (
                  <Category key={element.id} category={element}></Category>
               ))}
            </div>
         </div>
      </section>
   );
};

export default JobCategory;
