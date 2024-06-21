import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer, Slide } from 'react-toastify';

const Register = () => {
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');

    const history = useHistory();

    const handleInput = (event) => {
        const { name, value } = event.target;
        if (name === 'Name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        } else if (name === 'phone') {
            setPhone(value);
        }
    };

    const pushData = () => {
        if(Name === '' || email === '' || password === '' || confirmPassword === '' || phone === '') {
            toast.error("Please fill in all fields!!", {
                transition: Slide,
                className: "custom-toast",
              });
            return;
        }
        else if(password !== confirmPassword) {
            toast.error("Passwords do not match!!", {
                transition: Slide,
                className: "custom-toast",
            })
            return;
        }
        else if(phone.length !== 10){
            toast.error("Please enter a valid phone number!!", {
                transition: Slide,
                className: "custom-toast",
            })
            return;
        }
        else if(email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            toast.error("Please enter a valid email address!!", {
                transition: Slide,
                className: "custom-toast",
            })
            return;
        }
        else {
            const data = { Name, email, password, confirmPassword, phone };
            axios
                .post('http://localhost:5001/register', data)
                .then((response) => {
                    if (response.data.status === false) {
                        alert('User already exists')
                    } else {
                        toast.success("Registration successful!", {
                            transition: Slide,
                            className: "custom-toast",
                          });
                        history.push('/login');
                    }
                })
                .catch((error) => {
                    console.error(error);
            });
        }
        
    };
    return (
        <>
            <div className="bod">
                <div className="main">
                    <div className="left">
                        <div className="centered">
                        </div>
                    </div>
                </div>
                <div className="split right">
                <center>
                    <div className="login">
                    <img
                        src="https://www.battery.com/wp-content/uploads/2021/03/RealPage_logo_color.png"
                        style={{ width: "80%", height: "30%" }}
                    />
                    <h1>Register</h1>
                    <div className="inputContainer">
                    <svg className='inputIcon' 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#000000" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round">
                            <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/>
                            <circle cx="12" cy="10" r="3"/>
                            <circle cx="12" cy="12" r="10"/>
                    </svg>
                        <input
                        type="text"
                        placeholder="Name"
                        className="inputField"
                        id="form1"
                        name="Name"
                        onChange={handleInput}
                        autoComplete="off"
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
                    <svg 
                        className='inputIcon'
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#000000" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                        <input
                        type="text"
                        placeholder="Phone Number"
                        className="inputField"
                        id="form1"
                        name="phone"
                        onChange={handleInput}
                        autoComplete="off"
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
                        placeholder="Password"
                        id="form2"
                        className="inputField"
                        name="password"
                        onChange={handleInput}
                        autoComplete="off"
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
                        placeholder="Confirm Password"
                        id="form2"
                        className="inputField"
                        name="confirmPassword"
                        onChange={handleInput}
                        autoComplete="off"
                        />
                    </div>
                    <button id="button" onClick={pushData}>
                        Sign Up
                    </button>
                    <div className="signup">
                        <p>Already have an Account 
                        <a href="/login"> Sign in</a>
                        </p>
                    </div>
                    </div>
                </center>
                </div>
            </div>
        </>
    );
};

export default Register;
