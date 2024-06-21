import React, { useState } from 'react';
import './Post.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Post = () => {
  const history = useHistory();

  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [date, setDate] = useState('');
  const [carName, setCarName] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState('');
  const [price, setPrice] = useState('');
  const [postedRide, setPostedRide] = useState(null);
  const email = sessionStorage.getItem('email');
  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === 'leavingFrom') {
      setLeavingFrom(value);
    } else if (name === 'goingTo') {
      setGoingTo(value);
    } else if (name === 'date') {
      setDate(value);
    } else if (name === 'carName') {
      setCarName(value);
    } else if (name === 'numberOfSeats') {
      setNumberOfSeats(value);
    } else if (name === 'price') {
      setPrice(value);
    }
  };

  const postride = () => {
    const postingId = Math.floor(100000 + Math.random() * 900000);
    const data = { leavingFrom, goingTo, date, carName, numberOfSeats, price, postingId, email };
    axios.post('http://localhost:5001/postride', data, {
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    })
      .then((response) => {
        if (response.data.status === false) {
          alert(response.data.message);
        } else {
          alert(response.data.message);
          setPostedRide(response.data); 
          history.push({
            pathname: '/postedride',
            state: { postedRide: response.data.data } 
          });
        }
      })
      .catch((error) => {
        alert('Error posting ride. Unauthorised access.');
      });
  };
  

  return (
    <center>
    <div className="post">
      <h1>Post a ride</h1>
      <div className='inputContainer'>
      <svg className='inputIcon' xmlns="
http://www.w3.org/2000/svg"
width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
      <input type="text" name="leavingFrom" className='inputField' placeholder="Leaving from" onChange={handleInput} />
      </div>
      <div className='inputContainer'>
      <svg className='inputIcon' xmlns="
http://www.w3.org/2000/svg"
width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
      <input type="text" name="goingTo" className='inputField' placeholder="Going to" onChange={handleInput} />
      </div>
      <div className='inputContainer'>
      <svg xmlns="
http://www.w3.org/2000/svg"
width="16" height="16" className='inputIcon' viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
      <input type="date" name="date" className='inputField' placeholder="Date and Time" onChange={handleInput} />
      </div>
      <div className='inputContainer'>
      
      <input type="text" name="carName" className='inputField' placeholder="Car name" onChange={handleInput} />
      </div>
      <div className='inputContainer'>
      <input type="number" name="numberOfSeats" className='inputField' placeholder="Number of seats" min="0" onChange={handleInput} />
      </div>
      <div className='inputContainer'>
      <svg xmlns="
http://www.w3.org/2000/svg" className='inputIcon'
width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
      <input type="text" name="price" className='inputField' placeholder="Price" onChange={handleInput} />
      </div>
      <button className='button' onClick={postride}>Post</button>
    </div>
    </center>
  );
};

export default Post;
