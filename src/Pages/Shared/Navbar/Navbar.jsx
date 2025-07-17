import React from "react";
import { Link, NavLink } from "react-router";
import FastServiceLogo from "../FastServiceLogo/FastServiceLogo";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user,logOutUser } = useAuth();
  const handleLogOut=()=>{
    logOutUser()
    .than(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
  const navItems = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
       
      {user && (
        <>
          <li>
            <NavLink to="/dashboard">DashBoard</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/SendParcel">SendParcel</NavLink>
      </li>
            <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>

      <li>
        <NavLink to="/beARider"> Be A Rider</NavLink>
      </li>
      <li>
        <NavLink to="/about"> About Us</NavLink>
      </li>
        
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <div>
          <FastServiceLogo></FastServiceLogo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>
          <Link to="/login">
          <button onClick={handleLogOut} className="btn bg-[#CAEB66]">Logout</button>
        </Link>
          </>:
          <>
          <Link to="/register">
          <button className="btn bg-[#CAEB66]">register</button>
        </Link>
          <Link to="/login">
          <button className="btn bg-[#CAEB66]">Login</button>
        </Link>
          </>
        }
         
      </div>
    </div>
  );
};

export default Navbar;
