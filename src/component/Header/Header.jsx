import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
   return (
      <>
         <header className="header">
            <div className="container">
               <h2 className="header__logo">
                  Job<span>Header</span>
               </h2>

               <nav>
                  <Link to="/statistics">Statistics</Link>
                  <Link to="/applied-jobs">Applied Jobs</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/faq">FAQ</Link>
               </nav>

               <button className="btn btn-primary">Star Applying</button>
            </div>
         </header>
      </>
   );
};

export default Header;
