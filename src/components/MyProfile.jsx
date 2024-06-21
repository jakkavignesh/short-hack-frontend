import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bookings.css';
const MyProfile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userEmail = sessionStorage.getItem('email');
    const fetchUserData = async () => {
      try {
        const response = await axios.post('http://localhost:5001/userProfile', { userEmail }, {
          headers: {
            'auth-token': localStorage.getItem('token')
          }
        });
        setUserData(response.data.data);
      } catch (error) {
        alert('Error fetching user data. Unauthorised access.');
      }
    };

    fetchUserData();
  }, []);

  return (
    <center>
    <div className="my-profile">
      <h1>My Profile</h1>
      <table className='bookings-table'>
        <tbody>
          <tr>
            <td><b>Name:</b></td>
            <td>{userData.userDetails && userData.userDetails.Name}</td>
          </tr>
          <tr>
            <td><b>Email:</b></td>
            <td>{userData.userDetails && userData.userDetails.email}</td>
          </tr>
          <tr>
            <td><b>Phone:</b></td>
            <td>{userData.userDetails && userData.userDetails.phone}</td>
          </tr>
          <tr>
            <td><b>Total Bookings:</b></td>
            <td>{userData.totalBookings}</td>
          </tr>
          <tr>
            <td><b>Total Postings:</b></td>
            <td>{userData.totalPostings}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </center>
  );
};

export default MyProfile;
