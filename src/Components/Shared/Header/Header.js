import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Authprovider/Authprovider";

const Header = () => {
  const {user, logOut}=useContext(AuthContext)
  const handleLogOut=()=>{
    logOut()
    .then(() => {})
    .catch((error) => console.error(error));
    alert('Logout') 
  } 
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/service"> Service</Link>
            </li>

           
            <li>
              <Link to="/register"> Register</Link>
            </li>
           {
           user?.email?
           <>
           <li>
            <Link  onClick={handleLogOut}> Logout</Link>
            </li>

            <li>
              <Link to="/orders"> My reviews</Link>
            </li>
           
           </>
           
           
           :
           
           
           
           <li>
              <Link to="/login"> Login</Link>
            </li>
            }
            
            
            <li>
            <Link  to="/blog"> Blogs</Link>
            </li>
            <li>
            <Link  to="/add-service"> add-service</Link>
            </li>
          </ul>
        </div>
        <Link  className="btn btn-ghost normal-case text-3xl"> <h1>Cretive <span className="text-4xl italic text-orange-700" >photographey</span></h1> </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
              <Link to="/service"> Service</Link>
            </li>

            <li>
            <Link  to="/blog"> Blogs</Link>
            </li>

            <li>
            <Link  to="/add-service"> add-service</Link>
            </li>

            {
           user?.email?
           <>
           
            <li>
              <Link to="/orders"> My reviews</Link>
            </li>
            <li>
            <Link  onClick={handleLogOut}> Logout</Link>
            </li>

           
           </>
           
           
           :
           
           
           
           <li>
              <Link to="/login"> Login</Link>
            </li>
            }

            
            
          
          <li>
            <Link to="/register"> Register</Link>
          </li>
          
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
