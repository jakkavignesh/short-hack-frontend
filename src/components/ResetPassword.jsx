import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import './ResetPassword.css'

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const history = useHistory();

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "otp") setOtp(value);
    if (name === "newPassword") setNewPassword(value);
  };

  const resetPassword = () => {
    axios
      .post("http://localhost:5001/resetpassword", { email, otp, newPassword })
      .then((response) => {
        if (response.data.status === false) {
          alert("Invalid OTP")
        } else {
          toast.success("Password reset successful!", {
            transition: Slide,
            className: "custom-toast",
          });
          history.push('/login');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <center>
        <div className="resetpass">
            <img
              src="https://www.battery.com/wp-content/uploads/2021/03/RealPage_logo_color.png"
              style={{ width: "80%", height: "30%" }}
            />
            <h1>Reset Password</h1>
            <div className="inputContainer">
              <svg
                className="inputIcon"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="#2e2e2e"
                viewBox="0 0 16 16"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
              </svg>
              <input
                type="text"
                placeholder="Email address"
                className="inputField"
                id="form1"
                name="email"
                onChange={handleInput}
                autoComplete="off"
              />
            </div>
            <div className="inputContainer">
              <svg xmlns="http://www.w3.org/2000/svg" className="inputIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
                <input
                    type="text"
                    name="otp"
                    className="inputField"
                    value={otp}
                    onChange={handleInput}
                    placeholder="Enter OTP"
                />
            </div>
            <div className="inputContainer">
            <svg
              className="inputIcon"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="#2e2e2e"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            <input
              type="password"
              placeholder="Enter new Password"
              id="form2"
              className="inputField"
              name="newPassword"
              onChange={handleInput}
              autoComplete="off"
            />
          </div>
            <button id="button" onClick={resetPassword}>
              Reset Password
            </button>
          </div>
        </center>
      <ToastContainer />
    </>
  );
};

export default ResetPassword;