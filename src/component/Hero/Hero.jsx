import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSlack } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
   return (
      <div className="hero">
         <div className="container">
            <div className="hero__container">
               <div>
                  <h1>
                     Discover Your Next Opportunity with{" "}
                     <span className="secondary-heading-color">JobHunter</span>
                  </h1>
                  <p className="hero__details">
                     Explore thousands of job opportunities with all the information you need. Its
                     your future. Come find it. Manage all your job application from start to
                     finish.
                  </p>
                  <button className="btn btn-large btn-primary">Get Started</button>

                  <h3>Trusted by leading brands and startups</h3>
                  <div className="hero__brand">
                     <p>
                        <FontAwesomeIcon icon={faSlack} />
                        <span>Slack</span>
                     </p>
                     <p>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>Github</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
