import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__container">
               <div>
                  <h2>
                     Job<span className="secondary-heading-color">Hunter</span>
                  </h2>
                  <p>
                     There are many variations of passages of Lorem Ipsum , but the majority have
                     suffered alteration in some form.
                  </p>
                  <div className="footer__social-icons">
                     <span>
                        <FontAwesomeIcon icon={faFacebookF} />
                     </span>
                     <span>
                        <FontAwesomeIcon icon={faXTwitter} />
                     </span>
                     <span>
                        <FontAwesomeIcon icon={faInstagram} />
                     </span>
                  </div>
               </div>
               <ul>
                  <h4>Company</h4>
                  <li>
                     {" "}
                     <a href="#">About Us</a>{" "}
                  </li>
                  <li>
                     {" "}
                     <a href="#">Work</a>{" "}
                  </li>
                  <li>
                     {" "}
                     <a href="#">Latest News</a>{" "}
                  </li>
                  <li>
                     {" "}
                     <a href="#">Careers</a>{" "}
                  </li>
               </ul>
               <ul>
                  <h4>Product</h4>
                  <li>
                     {" "}
                     <a href="#">Prototype</a>{" "}
                  </li>
                  <li>
                     {" "}
                     <a href="#">Plans & Prices</a>{" "}
                  </li>
                  <li>
                     {" "}
                     <a href="#">Customers</a>{" "}
                  </li>
                  <li>
                     {" "}
                     <a href="#">Integrations</a>{" "}
                  </li>
               </ul>
               <ul>
                  <h4>Support</h4>
                  <li>
                     {" "}
                     <a href="#">Help Desk</a>{" "}
                  </li>
                  <li>
                     {" "}
                     <a href="#">Sales</a>{" "}
                  </li>
                  <li>
                     {" "}
                     <a href="#">Become a Partner</a>{" "}
                  </li>
                  <li>
                     {" "}
                     <a href="#">Developers</a>{" "}
                  </li>
               </ul>
               <ul>
                  <h4>Contact</h4>
                  <li>
                     {" "}
                     <address>524 Mirpur, Dhaka</address>{" "}
                  </li>
                  <li> +088 01760 00 00 00 </li>
               </ul>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
