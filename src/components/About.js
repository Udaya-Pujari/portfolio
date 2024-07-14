import React from "react";
import { LiaUniversitySolid } from "react-icons/lia";
import { PiStudentFill } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <div>
          <h1 className="text-2xl font-bold mb-5">
            <span className="text-red-600">A</span>bout
          </h1>
          <p>
            Hello, I am Udaya Pujari a passionate front-end developer with good
            hands on experince in developing the web applications using
            JavaScript, ReactJS, HTML, CSS, Tailwind CSS,Bootstrap,Redux Toolkit
            etc...
          </p>
          <br></br>
          <h1 className=" font-semibold text-xl">
            <span className="text-red-600">E</span>ducation
          </h1>
          <br />
          <span className="">
            <span className="flex ">
              <PiStudentFill size={25} /> Bachelor of Engineering in Computer
              Science and Engineering.
            </span>
            <br />
            <span className="flex">
              <LiaUniversitySolid size={25} />
              Basaveshwar Engineering College Bagalkot, Karnataka.
            </span>
            <br />
            <span className="flex">
              <FaCalendarAlt size={25} />
              from 2016 - to 2020
            </span>
          </span>
          <br></br>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
