import React from "react";
import react from "../images/react.png";
import javascript from "../images/javascript.png";
import redux from "../images/redux.png";
import node from "../images/node.png";
import nodejs from "../images/nodejs.png";
import html from "../images/html.png";
import css from "../images/css.png";
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.png";
import git from "../images/git.png";

const Skills = () => {
  const cardItems = [
    {
      id: 1,
      logo: react,
      name: "React",
    },
    {
      id: 2,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: redux,
      name: "Redux",
    },
    {
      id: 4,
      logo: nodejs,
      name: "Node JS",
    },
    {
      id: 5,
      logo: html,
      name: "HTML 5",
    },
    {
      id: 6,
      logo: css,
      name: "CSS",
    },
    {
      id: 7,
      logo: tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 8,
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 9,
      logo: git,
      name: "Git",
    },
  ];
  // https://www.carmenhchung.com/images/blog/newsletter.png
  //   https://miro.medium.com/v2/resize:fit:875/0*73CfVjHmBn8ZtafV.jpeg
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <div>
          <h1 className="text-2xl font-bold mb-5">
            <span className="text-sky-500">S</span>killset
          </h1>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <img
              className="w-full h-full"
              src="https://cdn-assets.theforage.com/icons/hiring-paths/software-engineering-career-ed.svg"
              alt="img"
            />
          </div>
          <div className="w-1/2 grid grid-cols-1  md:grid-cols-3 space-y-2">
            {cardItems.map(({ id, logo, name }) => (
              <div key={id}>
                <div className="hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]             border-[1px] md:h-[90px] md:w-[100px]  rounded-2xl shadow-2xl p-1 cursor-pointer hover:bg-gradient-to-t from-cyan-300 to-rose-100 hover:scale-110 duration-200 md:border-[2px] md:border-sky-500">
                  <h1 className="text-sm mx-2">{name}</h1>
                  <img
                    src={logo}
                    className="w-[50px] h-[50px] p-1 rounded-lg mx-3"
                    alt="skills"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Skills;
