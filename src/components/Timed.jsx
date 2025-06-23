import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Timed = () => {
    const navigate = useNavigate();
    const handleStart = () => {
        navigate('/Sec');
    }
  return (
    <div className='timed-container'>
        <h2>Please Choose A Time To Start A Test</h2>
        <div className='button-row'>
            <button className='timed-button' onClick={handleStart}>1 min</button>
        </div>
    </div>

  )
}

export default Timed
