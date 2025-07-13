  import React from "react";
import { FaChartPie } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FiLogIn, FiSettings } from "react-icons/fi";
import TEKPART from "../../assets/photos/Logo.png";
import { Link, NavLink } from "react-router-dom";




const SideBar = () => {

  
  return (
    <div className="SideBar">

      <div className="logo w-full">
      <Link to={'/'}   title="Home">
        <img  src={TEKPART} className="w-full" alt="TEKPART logo"  />
      </Link >
      </div>
      <div className="flex flex-col items-center gap-5 mt-10">

        <NavLink title="Project" to={'/Project'} className="w-[45px] h-[45px] flex justify-center items-center bg-blue-100 rounded-full mb-3 transition-transform duration-200 hover:scale-110">
        <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
          <FaChartPie className="text-white w-5 h-5" />
        </div>
        </NavLink>
        

          {/* Check List  */}
          <NavLink title="Tasks" to="/DailyTasks" className="w-[45px] h-[45px] flex justify-center items-center bg-blue-100 rounded-full transition-transform duration-200 hover:scale-110">
            <MdChecklist className="text-blue-600 w-5 h-5" />
          </NavLink>

          {/*User  */}
          <NavLink title="Profile" to={'/Profile'} className="w-[45px] h-[45px] flex justify-center items-center bg-blue-100 rounded-full my-3 transition-transform duration-200 hover:scale-110">
            <FaUser className="text-blue-600 w-5 h-5" />
          </NavLink>

          {/*Settings Icon*/}
          <NavLink title="Settings" to="/Settings" className="w-[45px] h-[45px] flex justify-center items-center bg-blue-100 rounded-full transition-transform duration-200 hover:scale-110">
            <FiSettings className="text-blue-600 w-5 h-5" />
          </NavLink>

          {/* Login & register */}
          <NavLink title="Login" to="/Login" className="w-[45px] h-[45px] flex justify-center items-center bg-blue-100 rounded-full transition-transform duration-200 hover:scale-110">
            <FiLogIn className="text-blue-600 w-5 h-5" />
          </NavLink>
      </div>
    </div>
  );
};

export default SideBar;