import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'


const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='home-div' >
        <button className='home-button' onClick={() => navigate('/login')} >
            Login
        </button>
        <button onClick={() => navigate('/signup')} >
            signUp
        </button>
    </div>
  )
}

export default Home