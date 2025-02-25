import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />

      <div className="flex-1 flex justify-center  py-4">
        <div className="w-full max-w-6xl px-4  shadow-md ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
