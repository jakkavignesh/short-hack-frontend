import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const userName = sessionStorage.getItem("username");
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    toast.success('Logout successful!', {
      transition: Slide,
      className: 'custom-toast'
    });
    history.push('/login');
    window.location.reload(false);
  };

  return (
    <>
      <ul className="navbar">
        <li className="logo" style={{ display: "flex", alignItems: "center" }}>
          <IoCarSportOutline
            size={50}
            style={{ marginBottom: "5px", marginRight: "5px" }}
          />
          Drive Together
        </li>
        <li>
          <Link to="/home">
            <BiHomeAlt2 />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        {userName ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="dropdown">
              <button
                className="dropbtn"
                style={{ display: "flex", alignItems: "center" }}
              >
                <VscAccount size={25} style={{ marginRight: "5px" }} />
                My Account
              </button>
              <div className="dropdown-content">
                <Link to="/myProfile">My Profile</Link>
                <Link to="/myPostings">My Postings</Link>
                <Link to="/myBookings">My Bookings</Link>
              </div>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <IoLogInOutline />
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
      <ToastContainer />
    </>
  );
};

export default Navbar;