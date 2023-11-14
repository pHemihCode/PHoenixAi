import React, {useState} from 'react'
import logo from '../assets/white.png'
import { Typewriter } from 'react-simple-typewriter'
import {Link, useNavigate} from "react-router-dom"
import video from '../assets/video.mp4'
function Home() {
    // const [show, setShow] = useState(true)
    const navigate = useNavigate()
    const handleLogin = (): void =>{
         navigate("/login")
    }
    const handleSignUp = (): void => {
        navigate("/register")
   }
  return (
    <div className='px-5 flex gap-20 flex-col items-center relative w-full'>
        <div className='text-white text-xl text-center absolute top-32 px-1'>
        <Typewriter
            words={[
                'Welcome to phoenixAi', 
                'Get an accurate email for your job application', 
                'Get a job winning CV and resume', 
                'Make a prompt and get the best answer!']}
            loop={true}
            cursor
            cursorStyle='|'
            cursorColor='blue'
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </div>
        <div className='flex flex-col gap-5 absolute top-52 w-80'>
            <button className="bg-blue-700 text-white font-normal text-base w-full px-10 py-2 rounded-sm" onClick={handleLogin}>Log In</button>
            <button className="bg-blue-700 text-white font-normal text-base w-full px-10 py-2 rounded-sm" onClick={handleSignUp}>Sign Up</button>
        </div>
        <div className='text-white flex flex-col items-center absolute top-96'>
            <img src={logo} alt="phoenix" className='w-10 h-10'/>
            <h1 className='text-base'>OpenAI</h1>
        </div>
    </div>
  )
}

export default Home