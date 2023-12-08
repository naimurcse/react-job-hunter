import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
   return (
      <>
         <header className="header">
            <div className="container">
               <div className="header__content">
                  <h2 className="header__logo">
                     Job<span className="secondary-heading-color">Hunter</span>
                  </h2>

                  <nav className="header__nav">
                     <Link to="/statistics">Statistics</Link>
                     <Link to="/applied-jobs">Applied Jobs</Link>
                     <Link to="/blog">Blog</Link>
                     <Link to="/faq">FAQ</Link>
                  </nav>

                  <button className="btn btn-medium btn-primary">Star Applying</button>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;
