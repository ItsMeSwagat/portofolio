import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          className="mb-4 text-4xl md:text-7xl tracking-tight font-extrabold text-center"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          Contact <span className=" text-yellow-400">Me</span>
        </h2>
        <p
          className="mb-8 lg:mb-16 text-center text-black font-medium sm:text-xl"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          Please feel free to Contact me anytime. Thank You
        </p>

        <form
          action="https://formspree.io/f/mgejavkd"
          method="POST"
          className="space-y-8"
        >
          <div data-aos="fade-up" data-aos-duration="500">
            <label for="email" className="block mb-2 text-lg font-semibold">
              Your <span className=" text-yellow-400">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className=" text-white text-sm rounded-lg block w-full p-2.5 bg-black"
              placeholder="portofolio@gmail.com"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <label for="subject" className="block mb-2 text-lg font-semibold">
              Sub<span className=" text-yellow-400">ject</span>
            </label>
            <input
              type="text"
              name="subject"
              className="block p-3 w-full text-sm text-white rounded-lg shadow-sm bg-black"
              placeholder="Write you subject here"
              required
            />
          </div>
          <div
            className="sm:col-span-2"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <label for="message" className="block mb-2 text-lg font-semibold">
              Your <span className=" text-yellow-400">Message</span>
            </label>
            <textarea
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-white bg-black rounded-lg shadow-sm border "
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-lg font-medium text-center text-white bg-black rounded-lg bg-primary-700 sm:w-fit hover:bg-yellow-400 hover:text-black"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
