import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12 bg-pink-100">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
          <div className="flex flex-col items-center justify-center">
            <div>
              <ul className="flex space-x-10">
                <a href="https://github.com/Udaya-Pujari" target="_blank">
                  <li>
                    {" "}
                    <FaGithub size={"30"} />
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  target="_blank"
                >
                  <li>
                    <FaLinkedin size={"30"} />
                  </li>
                </a>
              </ul>

              {/* <FaDiscord size={"30"} /> */}
            </div>
            <span className="mt-2 border-t border-gray-700 pt-2 flex flex-col items-center">
              <p>udaysp194@gmail.com</p>
            </span>
            <div className="mt-2 border-t border-gray-700 pt-2 flex flex-col items-center">
              <p>Copyright ©️ 2024 Udaya Pujari - All Rights reserved. </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
