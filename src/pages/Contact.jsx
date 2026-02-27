import React from "react";

const Contact = () => {
  return (
    <section className="w-[90%] m-auto h-screen flex flex-col items-center justify-center text-white">
      <div>
        <h1 className="text-3xl text-center">Contact Me</h1>
        <p>
          Feel free to reach out to me through any of the following methods:
        </p>
      </div>
      {/*  get in touch*/}
      <div className="w-[500px] h-[500px] flex flex-col  mt-10 bg-gray-900 rounded-lg p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl">Get in touch</h1>
          <p>Have something to discuss?Sand me a messange and let's talk!</p>
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <br />
          <br />
          <textarea
            placeholder="Enter your message"
            className="w-full h-32 p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 resize-none align-top"
          />
          <br />
          <br />
          <button className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>
      {/* Comment  */}
      <div></div>
    </section>
  );
};

export default Contact;
