import Header from "../Header/Header";
import "./Main.css";
import { Outlet } from "react-router-dom";

const Main = () => {
   return (
      <>
         <Header></Header>
         <Outlet></Outlet>
      </>
   );
};

export default Main;
