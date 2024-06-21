import React from 'react';
import Typed from 'typed.js';
import './Home.css';
import { useHistory } from 'react-router-dom';
 
const Home = () => {
  const [typed, setTyped] = React.useState(null);
  const history = useHistory();
  const signUp = () => {
    history.push('/register')
  }
  const signIn = () => {
    history.push('/login')
  }
  React.useEffect(() => {
    setTyped(new Typed('.moving', {
      strings: ["Productive Days"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    }));
  }, []);
 
  return (
    <>
    <div className="homecontainer">
        <div className="background-image">
          <img src="https://www.shutterstock.com/image-vector/online-ordering-taxi-car-rent-600nw-1490648672.jpg" alt="" />
          <div className="button-container">
            <button className="sign-in-button" onClick={signUp}>Sign Up</button>
            <button className="log-in-button" onClick={signIn}>Log In</button>
          </div>
        </div>
        <div className="home-container">
            <h1>Lets, <br/> Drive Together</h1>
          <p><span className="fixed">Effortless Rides,</span> <span className='moving'></span></p>
        </div>
      </div>
    </>
  );
}
 
export default Home;
 