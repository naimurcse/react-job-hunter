import "./InnerpageHeader.css";

const InnerpageHeader = ({ children }) => {
   return (
      <div className="inner-header">
         <div className="container">
            <h2>{children}</h2>
         </div>
      </div>
   );
};

export default InnerpageHeader;
