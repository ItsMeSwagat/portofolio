import React from 'react'

const About = () => {
  return (
    <div id='About' className=' relative w-full h-full mb-20'>
        <div className='flex justify-center pt-16'>   
            <h1 className=' text-center text-4xl sm:text-6xl md:text-7xl  font-bold'>About</h1>
            <h1 className=' text-center text-4xl sm:text-6xl md:text-7xl  font-bold text-yellow-400'>Me</h1>
        </div>
        <span className='flex text-center justify-center font-medium pt-4 text-sm w-auto h-auto sm:text-lg md:text-2xl px-10'>
            Hello there! I'm Swagat Shrestha, a frontend developer passionate about crafting captivating digital experiences.<br /> 
        </span>

        <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 md:gap-4 mt-24 pb-4 gap-4'>
            <div className=' flex flex-col mx-4 p-4 w-80 h-64 border-solid border-4 border-yellow-400 bg-yellow-400 rounded-lg'>
                <h1 className=' text-center text-2xl font-bold pt-2'>My Journey</h1>
                <p className=' text-justify pt-4 font-medium text-sm'>From a fascination with web design in my early years to a deep dive into frontend development, I've come far. The blend of aesthetics and code ignited my passion. Now, I create functional and visually appealing designs that engage users and make an impact.</p>
            </div>
            <div className='mx-4 p-4 w-80 h-64 border-solid border-4 border-yellow-400 bg-yellow-400 rounded-lg'>
                <h1 className=' text-center text-2xl font-bold pt-2'>Skills & Expertise</h1>
                <p className=' text-justify pt-4 font-medium text-sm'>Mastery of HTML, CSS, and JavaScript forms my foundation, while React, Vue.js breathe life into my creations. I prioritize intuitive and accessible user experiences, collaborating seamlessly with designers and backend developers. Continuous learning fuels my drive to innovate.</p>
            </div>
            <div className='mx-4 p-4 w-80 h-64 border-solid border-4 border-yellow-400 bg-yellow-400 rounded-lg'>
                <h1 className=' text-center text-2xl font-bold pt-2'>Approach to Work</h1>
                <p className=' text-justify pt-4 font-medium text-sm'>User-centric development is my mantra. By understanding user needs, I ensure intuitive and enjoyable interfaces. Collaboration is key; I thrive alongside designers and backend developers to deliver cohesive final products. Challenges are opportunities that drive me to push boundaries.</p>
            </div>
            <div className='mx-4 p-4 w-80 h-64  border-solid border-4 border-yellow-400 bg-yellow-400 rounded-lg'>
                <h1 className=' text-center text-2xl font-bold pt-2'>Never-Ending Curiosity</h1>
                <p className=' text-justify pt-4 font-medium text-sm'>In a rapidly evolving tech landscape, my curiosity keeps me ahead. Regular immersion in trends and tools sharpens my skills and fuels creativity. Challenges are chances to learn and grow, and I'm always eager to embrace them for innovative solutions.</p>
            </div>
        </div>
    </div>
  )
}

export default About