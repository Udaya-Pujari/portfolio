import React from "react";
import work from "../images/work.png";
import exp from "../images/exp.png";

const Experince = [
  {
    id: 1,
    text: "Worked on a Techno Touch Business Solutions service based project(web app) contributing as a core member of Frontend Engineering Team.",
  },
  {
    id: 2,
    text: "Tech Stack: HTML5, CSS3, JavaScript, Bootstrap, React, Redux Toolkit, GIT, PostgreSQL, Postman",
  },
  {
    id: 3,
    text: "Designed and Created the frontend of the tax forms evaluations from the scratch using ReactJS, it is data extraction software that automatically converts business taxforms into Excel.",
  },
  {
    id: 4,
    text: "Created custom components, forms and interfaces for user interactions in React, delivered the code to meet the functional or the technical specifications.",
  },
  {
    id: 5,
    text: "Worked on react-spreadsheet library and added the features like adding and removing the columns, rows based on user action. Also added the automatic calculations of the formulas into a perticular cells.",
  },
  {
    id: 6,
    text: "Actively contributed ideas and feedback  during the sprint planning meetings to help prioritize tasks related to developing a react applications.",
  },
  {
    id: 7,
    text: "Intigrated third-party libraries into existing react applications such as React Bootstrap, Crypto-js for encription, React Routers, Ant Designs UI library etc...",
  },
];

const Experience = () => {
  return (
    <>
      <div
        name="Experince"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
      >
        <div>
          <h1 className="text-2xl font-bold mb-5">
            <span className="text-red-600">E</span>xperience
          </h1>
        </div>
        <div className="flex">
          <img
            src={work}
            className=" hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] w-[50px] h-[50px] border-[2px] border-white rounded-full"
            alt="work"
          />
          <p className="mt-1">
            <span className="font-bold cursor-pointer ">
              Software Developer
            </span>{" "}
            <br />
            <span className="text-black-500">
              Techno Touch Business Solutions
            </span>
            <span className="text-black-500 ml-15 ml-20">
              Aug 2022 - Present
            </span>
          </p>
        </div>
        <div className="flex mt-12  border-none text-[19px] ">
          <div className="w-3/4 ml-5">
            {Experince.map(({ id, text }) => {
              return (
                <>
                  <ul key={id}>
                    <li className="list-disc text-justify space-y-6">{text}</li>
                  </ul>
                </>
              );
            })}
          </div>
          <div className="hidden md:block w-1/4 ">
            <img className="md:h-full rounded-full md:opacity-60" src={exp} alt="exp" />
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
};

export default Experience;
