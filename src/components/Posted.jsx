import React from 'react';
import { useLocation } from 'react-router-dom';
import './Posted.css'; 
import { useHistory } from 'react-router-dom';

const Posted = () => {
  const location = useLocation();
  const history = useHistory();

  const { postedRide } = location.state || {};
  const { leavingFrom, goingTo, date, carName, numberOfSeats, price } = postedRide || {};

  const returnHandle = () => {
    history.push('/dashboard');
  }

  return (
    <center>
    <div className="posted-container">
      <h1 className="posted-title">Posted Ride Details</h1>
      {postedRide ? (
        <table className="posted-table">
          <tbody>
            <tr>
              <td className="posted-label">Leaving from:</td>
              <td className="posted-value">{leavingFrom}</td>
            </tr>
            <tr>
              <td className="posted-label">Going to:</td>
              <td className="posted-value">{goingTo}</td>
            </tr>
            <tr>
              <td className="posted-label">Date:</td>
              <td className="posted-value">{date}</td>
            </tr>
            <tr>
              <td className="posted-label">Car Name:</td>
              <td className="posted-value">{carName}</td>
            </tr>
            <tr>
              <td className="posted-label">Number of Seats:</td>
              <td className="posted-value">{numberOfSeats}</td>
            </tr>
            <tr>
              <td className="posted-label">Price:</td>
              <td className="posted-value">{price}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="posted-not-found">No ride details found.</p>
      )}
      <button className='button' onClick={returnHandle}>Return to dashboard</button>
    </div>
    </center>
  );
};

export default Posted;
