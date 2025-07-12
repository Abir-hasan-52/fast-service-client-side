import React from "react";
import AuthImg from "../assets/authImage.png"
import { Outlet } from "react-router";
import FastServiceLogo from "../Pages/Shared/FastServiceLogo/FastServiceLogo";

const AuthLayOut = () => {
  return (
    <div className=" bg-base-200  ">
        <div className="flex justify-star" ><FastServiceLogo></FastServiceLogo></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="flex-1">
            <img
          src={AuthImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
         </div>
        <div className="flex-1">
           <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayOut;
