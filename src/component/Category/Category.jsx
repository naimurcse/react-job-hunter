import React from "react";

const Category = ({ category }) => {
   console.log(category);
   const { id, categoryName, iconLink, statistics } = category;
   return (
      <div className="category">
         <div className="icon-box">
            <img src={iconLink} alt="" />
         </div>
         <div>
            <h3>{categoryName}</h3>
            <p>{statistics?.jobOpenings} Jobs Available</p>
         </div>
      </div>
   );
};

export default Category;
