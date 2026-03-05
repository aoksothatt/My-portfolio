import React from "react";
import { RiMessage3Fill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl ">Contact Me</h1>
        <br />

        <p>
          Feel free to reach out to me through any of the following methods:
        </p>
      </div>
      <section className="w-[90%] m-auto gap-8 flex  items-center justify-center text-white ">
        {/*  get in touch*/}
        <div className="w-[500px] h-[500px] flex flex-col  mt-10 bg-gray-900 rounded-lg p-6">
          <div className="mb-6 text-center">
            <h1 className="text-2xl">Get in touch</h1>
            <br />
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
              <RiMessage3Fill className="inline mr-2 w-[20px] h-[20px] items-center" />
              Send Messag
            </button>
          </form>
        </div>
        {/* Cotact me  */}
        <div className="bg-gray-900 rounded-lg p-6 w-[500px] ">
          <h1 className="text-2xl mt-10 text-center">Contact Information</h1>
          <br />
          <div>
            <a href="https://t.me/That_620" target="_blank">
              <div className="flex items-center gap-4 mt-4 border border-gray-700 rounded-md p-4 hover:bg-gray-800 transition-colors cursor-pointer">
                <img
                  width={30}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/500px-Telegram_logo.svg.png"
                  alt="Telegram"
                />
                <p>Telegram</p>
              </div>
            </a>

            <div className="flex w-[100%] gap-2 flex-wrap">
              <a
                href="https://www.instagram.com/aoksothatt?igsh=MWpwYzI1Y20yc3BwcQ%3D%3D&utm_source=qr"
                target="_blank"
              >
                <div
                  className=" flex item-center gap-4 mt-4 border border-gray-700 rounded-md p-4 hover:bg-gray-800
                transition-colors-pointer w-[220px]  "
                >
                  <img
                    width={30}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/960px-Instagram_logo_2022.svg.png"
                    alt=""
                  />
                  <p>Instagram</p>
                </div>
              </a>
              <a href="https://web.facebook.com/thattCo2/" target="_blank">
                <div className="flex items-center gap-4 mt-4 border border-gray-700 rounded-md p-4 hover:bg-gray-800 transition-colors cursor-pointer w-[220px] ">
                  <img
                    width={30}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/960px-2023_Facebook_icon.svg.png"
                    alt=""
                  />
                  <p>Facebook</p>
                </div>
              </a>

              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=aoksothatt@gmail.com&su=Hello&body=Hi+there&tf=cm"
                target="_blank"
                className=" w-full flex items-center gap-4 mt-4 border border-gray-700 rounded-md p-4 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <img
                  width={30}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"
                  alt="Gmail"
                />
                <p>Gmail</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
