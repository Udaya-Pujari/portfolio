import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import pics from "../images/pic.jpg";
import { Link } from "react-scroll";
import Resume from "./Resume";


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItem = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Experince",
    },
    {
      id: 4,
      text: "Skills",
    },
    {
      id: 5,
      text: "Portfolio",
    },
    // {
    //   id: 6,
    //   text: "Resume",
    // },
  ];
  return (
    <>
      <div className="  mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-gradient-to-r from-cyan-100 to-violet-50">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img
              className="h-12 w-14 border rounded-full "
              // src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlMjFfYV9waG90b19vZl9hX2hhY2tlcl9oYWNraW5nX29uX2FfY29tcHV0ZXJfaXNvbF9lYmU0Zjk5My1jNmM2LTRhZWEtOWE5ZC1hNmE2NGRlNDg2ZDMucG5n.png"
              src={pics}
              alt="img"
            />
            <h1 className="font-semibold text-xl cursor-pointer  hover:scale-x-110 duration-200">
              <span className="text-sky-500 text-2xl">U</span>daya{" "}
              <span className="text-sky-500 text-2xl">P</span>ujari
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/*  */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItem.map(({ id, text }) => {
                return (
                  <li
                    className="hover:scale-110 duration-200 cursor-pointer"
                    key={id}
                  >
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
              <button>
                <Resume />
              </button>
            </ul>
            <div
              className="md:hidden"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/*  */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-4 text-xl">
              {navItem.map(({ id, text }) => {
                return (
                  <li
                    className="hover:scale-x-110 duration-200 cursor-pointer font-semibold"
                    key={id}
                  >
                    {/* {text} */}
                    <Link
                      onClick={() => {
                        setMenu(!menu);
                      }}
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}

              <button>
                <Resume />
              </button>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
