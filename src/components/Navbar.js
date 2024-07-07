import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

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
      text: "Skills",
    },
    {
      id: 4,
      text: "portfolio",
    },
    {
      id: 5,
      text: "Experince",
    },
    {
      id: 6,
      text: "contacts",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-gradient-to-r from-cyan-100 to-violet-50">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img
              className="h-12 w-14 border rounded-full "
              src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlMjFfYV9waG90b19vZl9hX2hhY2tlcl9oYWNraW5nX29uX2FfY29tcHV0ZXJfaXNvbF9lYmU0Zjk5My1jNmM2LTRhZWEtOWE5ZC1hNmE2NGRlNDg2ZDMucG5n.png"
              // src="https://lh3.googleusercontent.com/pw/AP1GczOKJOfWzBBxdJwY_MTWzoUcQyL36P_pZtR3zn4MHl3-t4qHrdkd0assdfBnzalJDk0jsc4rtAAFfp1HaASk1rzbDUTeq9f_lpijwo7s4OvShMKN57AYePRViycsU1f_b5YsubffuWW1hqnBFt30aJ7ugUwRcDkUdXeXRoIZyBUaQ0TR52iUDUhIxNkRB4-l8f0tZ8nMoODPZEAn0x5H-l6i8Q_JIiMsoNVHCli6kOiGw3nqq99UaGUA-Y7jfSBOdoCvcHV5fQKq9sbWSOoNuG4eGKhazPzaQ_B-h2Ivjjy6MxhKuB4Np5v5vS0eW_IvdrQlQGtpNR7A29amrDD5kaHl4GdXXTFhpGFkU86EXLLmnOuDjNl073EJoGqBcR-Zqs6CSM616JYNDw2cUmbVid8XdU9ZCjEUyFQK0de_Z3Hp_qGkAnR1jajFlEWJbZ3rtudILC5mv8CzDOboqsHQlXTYW2LGOU4uSYfx9ocT8Ag73zBUV5v8K0IXSZGu2e3B4XSyWnjHRQ0OtpH3AJxDVFgBRqboZ80AAnuDgC_W_Dw7ARU6VKqYHDqWk1uvTa0cdfWP8NXfHUlnAXT4lHz_7O5BRsLopfSeVHoCFRv_t_DX4bEFW9nSPyaa1S6C2Qk6WmiL2FbRelnTZf6EEamH2dlcZS10qWdPw0u29ZcHy3sixDtXHn6mh5I771CnnO9_yELXlJn30B2wK_M2NIkQHV3drZ2AD8aAPmZlDLaa0c-U5uHevS_GS1NKiHLlcbJXuEa1FRsbaCD1OtPmvfzfZzqZH2GAD-ieIz5blrcuWMHSGTQ1b4wei5aqZz8D-8J54zLvNtKh9SFeW3PaCsoRfu0gQnLwHmX1t11Wm6OFH0_PaYZw1-M7T6b_dELwj-hvZNMMhrzjqK8-2xnucyA1vuop=w690-h923-s-no-gm?authuser=0"
              alt=""
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
                    {text}
                  </li>
                );
              })}
            </ul>
            <div
              className="md:hidden"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              {menu ? <AiOutlineMenu size={24} /> : <IoCloseSharp size={24} />}
            </div>
          </div>
        </div>
        {/*  */}
        {menu && (
          <div>
            <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-4 text-xl">
              {navItem.map(({ id, text }) => {
                return (
                  <li
                    className="hover:scale-x-110 duration-200 cursor-pointer font-semibold"
                    key={id}
                  >
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
