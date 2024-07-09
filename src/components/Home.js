import React from "react";
import pics from "../images/pic.jpg";
import intro from "../images/introbord.png";
import { FaGithub } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { FaDiscord } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { ReactTyped } from "react-typed";
import { SiRedux } from "react-icons/si";

const Home = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome, pioneers of technology!</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="">Hello, I'm a </h1>
              {/* <span className="text-red-700 font-bold"> Web Developer</span> */}
              <ReactTyped
                // typedRef={setTyped}
                className="text-red-700 font-bold"
                strings={["Web Developer", " "]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify ">
              My name is <span className="text-sky-500">U</span>daya{" "}
              <span className="text-sky-500">P</span>
              ujari, a dedicated Front-End Developer with extensive experience
              in building and optimizing user-centric web applications. I am
              passionate about utilizing modern web technologies and best
              practices to solve complex problems and create seamless,
              user-friendly applications. With a keen eye for detail and a
              commitment to delivering high-quality code, I am always eager to
              take on new challenges and contribute to the success of innovative
              projects.
            </p>
            <br />
            {/* Scocial Media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/Udaya-Pujari" target="_blank">
                      <FaGithub
                        className="text-2xl cursor-pointer"
                        size={"30"}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                      target="_blank"
                    >
                      <FaLinkedin
                        className="text-2xl cursor-pointer"
                        size={"30"}
                      />
                    </a>
                  </li>
                  <li>
                    {""}
                    <FaDiscord
                      className="text-2xl cursor-pointer"
                      size={"30"}
                    />
                  </li>
                  <li>
                    {""}
                    <BiLogoGmail
                      className="text-2xl cursor-pointer"
                      size={"30"}
                    />
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiReact
                    className="text-xl md:text-2xl hover:scale-150 duration-200 rounded-full border-[2px]"
                    size={"30"}
                  />
                  <SiJavascript
                    className="text-xl md:text-2xl hover:scale-150 duration-200 rounded-full border-[2px]"
                    size={"30"}
                  />
                  <FaHtml5
                    className="text-xl md:text-2xl hover:scale-150 duration-200 rounded-full border-[2px]"
                    size={"30"}
                  />
                  <SiTailwindcss
                    className="text-xl md:text-2xl hover:scale-150 duration-200 rounded-full border-[2px]"
                    size={"30"}
                  />
                  <FaNodeJs
                    className="text-xl md:text-2xl hover:scale-150 duration-200 rounded-full border-[2px]"
                    size={"30"}
                  />
                  <BiLogoPostgresql
                    className="text-xl md:text-2xl hover:scale-150 duration-200 rounded-full border-[2px]"
                    size={"30"}
                  />
                  <SiRedux
                    className="text-xl md:text-2xl hover:scale-150 duration-200 rounded-full border-[2px]"
                    size={"30"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-60 md:mt-6 order-1 ml-20 mt-5  ">
            <img
              // src={pics}
              src={intro}
              className="rounded-full border border-gray-300 md:w-[410px] md:h-[400px]  w-[250px] h-[250px]  hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
              alt="profile pic"
            />
          </div>
        </div>
      </div>
      {/* <br></br> */}
      <hr></hr>
    </>
  );
};

export default Home;
