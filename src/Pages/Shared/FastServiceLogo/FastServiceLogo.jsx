import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router";
const FastServiceLogo = () => {
  return (
    <Link>
      <div className="flex justify-center items-end">
        <img className="mb-2" src={logo} alt="fast service logo" srcset="" />
        <p className="text-3xl font-extrabold -ml-4">Fast Service</p>
      </div>
    </Link>
  );
};

export default FastServiceLogo;
