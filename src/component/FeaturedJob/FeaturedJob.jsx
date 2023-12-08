import "./FeaturedJob.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSackDollar } from "@fortawesome/free-solid-svg-icons";

const FeaturedJob = ({ featuredJob }) => {
   const { id, img, designation, companyName, location, salary, icons, isFullTime, isRemote } =
      featuredJob;
   return (
      <div className="featured-job">
         <img src={img} alt="" />
         <h2>{designation}</h2>
         <p>{companyName}</p>
         {isRemote ? (
            <button className="btn btn-outline btn-primary-outline">Remote</button>
         ) : (
            <button className="btn btn-outline btn-primary-outline">Onsite</button>
         )}
         {isFullTime ? (
            <button className="btn btn-outline btn-primary-outline">Full Time</button>
         ) : (
            <button className="btn btn-outline btn-primary-outline">Part Time</button>
         )}
         <div className="featured-job__info">
            <p>
               <FontAwesomeIcon icon={faLocationDot} />
               <span>{location}</span>
            </p>
            <p>
               <FontAwesomeIcon icon={faSackDollar} />
               <span>Salary: {salary}</span>
            </p>
         </div>

         <button className="btn btn-medium btn-primary">View Details</button>
      </div>
   );
};

export default FeaturedJob;
