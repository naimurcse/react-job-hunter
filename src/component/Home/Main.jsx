import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Main.css";

const Main = () => {
   return (
      <>
         <Header></Header>
         <Outlet></Outlet>
      </>
   );
};

export default Main;
