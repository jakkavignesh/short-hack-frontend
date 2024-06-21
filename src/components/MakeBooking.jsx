import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './MakeBooking.css'
import { useHistory } from 'react-router-dom';

const MakeBooking = () => {
    const location = useLocation();
    const { bookedCar } = location.state;
    const userEmail = sessionStorage.getItem('email');
    const userPhone = sessionStorage.getItem('phone');
    const { leavingFrom, goingTo, date, carName, numberOfSeats, price, postingId, remainingSeats } = bookedCar;

    const [selectedSeats, setSelectedSeats] = useState(0);

    const history = useHistory();

    const handleInput = (event) => {
        const { name, value } = event.target;
        if (name === 'selectedSeats') {
            setSelectedSeats(value);
        }
    }

    const returnHandle = () => {
        history.push('/bookcar')
    }

    const makeBooking = () => {
        const data = { leavingFrom, goingTo, date, carName, numberOfSeats, price, selectedSeats, postingId, userEmail, userPhone };
        axios.post('http://localhost:5001/makeBooking', data, {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        })
            .then((response) => {
                if (response.data.status === false) {
                    alert(response.data.message);
                } else {
                    alert(response.data.message);
                    history.push('/dashboard');
                }
            })
            .catch((error) => {
                alert('Error booking ride. Unauthorised access.');
            })
    }

    return (<center>
        <div className="booking-container">
            <h1>Make Booking</h1>
            <table>
                <tbody>
                    <tr>
                        <td><b>Leaving from:</b></td>
                        <td>{leavingFrom}</td>
                    </tr>
                    <tr>
                        <td><b>Going to:</b></td>
                        <td>{goingTo}</td>
                    </tr>
                    <tr>
                        <td><b>Date:</b></td>
                        <td>{date}</td>
                    </tr>
                    <tr>
                        <td><b>Car Name:</b></td>
                        <td>{carName}</td>
                    </tr>
                    <tr>
                        <td><b>Number of Seats:</b></td>
                        <td>{remainingSeats}</td>
                    </tr>
                    <tr>
                        <td><b>Price:</b></td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </table>
            <input type="number" onChange={handleInput} name="selectedSeats" placeholder='Select no.of seats' min = "0" />
            <button onClick={makeBooking}>Confirm booking</button>
            <button onClick={returnHandle} className='returnButton'>Return to search</button>
        </div>
        </center>
    )
}

export default MakeBooking;
