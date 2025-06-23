import React from 'react'
import './Home.css'
import logo from '../assets/keyboard-type.gif'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/timed');
  }
  return (
    <div className='home-container'>
      <img src={logo} alt="Typing Animation" className='home-logo' />
      <button className='home-button' onClick={handleStart}>Get Started</button>
    </div>
  )
}

export default Home
