import InnerpageHeader from "../InnerpageHeader/InnerpageHeader";
import "./JobDetails.css";

const JobDetails = ({ job }) => {
   return (
      <>
         <InnerpageHeader>Job Details</InnerpageHeader>
         <div className="container">
            <div className="job-details">
               <h1>Job details here</h1>
            </div>
         </div>
      </>
   );
};

export default JobDetails;
