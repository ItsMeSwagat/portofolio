import React from 'react'

const Contact = () => {
  return (
    <section id='Contact' className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl md:text-7xl tracking-tight font-extrabold text-center">Contact <span className=' text-yellow-400'>Me</span></h2>
          <p className="mb-8 lg:mb-16 text-center text-black font-medium sm:text-xl">Please feel free to Contact me anytime. Thank You</p>
          <form action="#" className="space-y-8">
              <div>
                  <label for="email" className="block mb-2 text-lg font-medium">Your <span className=' text-yellow-400'>Email</span></label>
                  <input type="email" id="email" className=" text-white text-sm rounded-lg block w-full p-2.5 bg-black" placeholder="portofolio@gmail.com" required />
              </div>
              <div>
                  <label for="subject" className="block mb-2 text-lg font-medium">Sub<span className=' text-yellow-400'>ject</span></label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-white rounded-lg shadow-sm bg-black" placeholder="Write you subject here" required />
              </div>
              <div className="sm:col-span-2">
                  <label for="message" className="block mb-2 text-lg font-medium">Your <span className=' text-yellow-400'>Message</span></label>
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-white bg-black rounded-lg shadow-sm border " placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-lg font-medium text-center text-white bg-black rounded-lg bg-primary-700 sm:w-fit hover:bg-yellow-400 hover:text-black">Send message</button>
          </form>
      </div>
</section>
  )
}

export default Contact