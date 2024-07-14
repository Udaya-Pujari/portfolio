import React from "react";
import Resume from "./Resume";

const Contact = () => {
  return (
    <>
      <hr />
      <div
        name="Contacts"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
      >
        <h1 className="text-2xl font-bold mb-5">
          <span className="text-sky-500">C</span>ontact{" "}
          <span className="text-sky-500">M</span>e
        </h1>
        <span>Please fill out the below form to contact me </span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form action="" className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
            <h1 className="text-lg font-semibold mb-4">
              Send your message here
            </h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-sm"
                id="name"
                type="text"
                placeholder="Please enter your full name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-sm"
                id="email"
                type="text"
                placeholder="Please enter your E-mail address"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="shadow rounded-lg appearance-none border py-2 px-3 text-sm"
                id="message"
                type="text"
                placeholder="Please enter your message"
              />
            </div>
            <button className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-500">
              Send
            </button>
            <Resume />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
