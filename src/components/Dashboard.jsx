import React from 'react';
import { useHistory } from 'react-router-dom';
import './Dashboard.css';
 
const Dashboard = () => {
  const username = sessionStorage.getItem('username');
  const history = useHistory();
 
  const bookCar = () => {
    history.push("/bookcar");
  }
 
  const postCar = () => {
    history.push("/postride");
  }
 
  return (
    <div className='body'>
    <div className="container">
  <div className="section">
    <h2>For <span className='span-post'>Posting</span></h2>
    <p>
      Join our network to offer rides and share your journey with others. Save
      on fuel costs and meet new people.
    </p>
    <button className="post-button" onClick={postCar}>Post a Ride</button>
  </div>
  <div className="divider" />
  <div className="section">
    <h2>For <span className='span-book'>Booking</span></h2>
    <p>
      Find a carpool, share the ride, reduce your carbon footprint, and save
      money on daily commutes.
    </p>
    <button className="book-button" onClick={bookCar}>Book a Car</button>
  </div>
</div>
</div>
  );
}
 
export default Dashboard;