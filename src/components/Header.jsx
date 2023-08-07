import React from 'react'
import Bman from '../assets/bman.png'

const Header = () => {
  return (
  
    <div id='home' className=' relative w-full h-screen justify-center items-center bg-black'>
        <div className=' flex-col text-center pt-56'>
          <img className=' w-36 inline-flex justify-center items-center'
            src={Bman}
            alt='bman'
          />
          <span className=' text-white text-4xl sm:text-6xl md:text-7xl font-extrabold'>
            Frontend
          </span>
          <span className='  text-yellow-400 text-4xl sm:text-6xl md:text-7xl font-extrabold'>
            Developer
          </span><br/>

          <h3 className=' text-yellow-400 text-sm w-auto h-auto sm:text-lg md:text-2xl pt-12 px-10'>
            Hello, I'm Swagat Shrestha and thank you for visiting my portfolio!</h3>

          <h3 className=' text-white text-xs sm:text-sm  md:text-lg md:px-32 px-10 pt-4'>Im a passionate and creative frontend developer
            dedicated to crafting engaging <br />  and visually stunning web experiences. With a strong foundation
            in HTML, CSS, and JavaScript, <br />  I specialize in turning ideas into interactive and user-friendly websites. 
          </h3>
        </div>
    </div>

  )
}

export default Header