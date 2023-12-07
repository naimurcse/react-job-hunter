import "./Hero.css";

const Hero = () => {
   return (
      <div className="hero">
         <div className="container">
            <div className="hero__container">
               <div>
                  <h1>
                     Discover Your Next Opportunity with{" "}
                     <span className="secondary-heading">JobHunter</span>
                  </h1>
                  <p>
                     Explore thousands of job opportunities with all the information you need. Its
                     your future. Come find it. Manage all your job application from start to
                     finish.
                  </p>
                  <button className="btn btn-large btn-primary">Get Started</button>
                  <div>
                     <h3>Trusted by leading brands and startups</h3>
                     <div>
                        <img src="../../assets/react.svg" alt="" />
                        <img src="/assets/react.svg" alt="React Icon" />

                        <span>Notion</span>
                     </div>
                     <div>
                        <img src="../../assets/react.svg" alt="SVG Icon" className="svg-icon" />
                        <span>Github</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
