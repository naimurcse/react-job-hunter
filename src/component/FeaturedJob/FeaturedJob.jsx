import "./FeaturedJob.css";
const FeaturedJob = ({ featuredJob }) => {
   const { id, img, designation, companyName, location, salary, icons, isFullTime, isRemote } =
      featuredJob;
   return (
      <div className="featured-job">
         <img src={img} alt="" />
         <h2>{designation}</h2>
         <p>{companyName}</p>
         {isRemote ? "Remote" : "Onsite"}
         {isFullTime ? "Full Time" : "Part Time"}
         <div className="featured-job__info">
            <p>{location}</p>
            <p>Salary: {salary}</p>
         </div>
         <button className="btn btn-small btn-primary">View Details</button>
      </div>
   );
};

export default FeaturedJob;
