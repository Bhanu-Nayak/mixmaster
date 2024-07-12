import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Homelayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Homelayout;
