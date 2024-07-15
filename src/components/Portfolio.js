import React from "react";
import netflix from "../images/netflix.JPG";
import youtube from "../images/youtube.JPG";

const Portfolio = () => {
  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
      >
        <div className="">
          <h1 className="text-2xl font-bold mb-5">
            <span className="text-red-600">P</span>ortfolio
          </h1>
          <span className="underline font-semibold text-[19px]">Featured Projects:</span>
          <div className="flex md:flex-row flex-col md:space-x-96 mt-10 md:ml-32">
            <div className="hover:bg-gradient-to-b from-cyan-100 to-cyan-200 md:w-[390px] md:h-[390px] w-full h-[400px] border-[2px] border-sky-500 rounded-lg shadow-lg p-1   mb-4 md:mb-0 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
              <div className="h-1/2 ">
                <img src={netflix} alt="image" />
              </div>
              <div className="h-1/2 w-full ">
                <h1 className="mt-2 font-bold underline">
                  <span className="text-red-600 ">AI</span>-driven movie
                  recommendation app{" "}
                </h1>
                <p className="text-xs text-justify">
                  This a movie recommendation app based on individual
                  preferences by integrating Gemini-ai API with TMDb data, which
                  consits of custom key features for enhanced capabilities of
                  the Gemini-ai model.
                </p>
                <a
                  href="https://github.com/Udaya-Pujari/NetFlix-GPT"
                  target="_blank"
                >
                  <button className="text-xs hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]    border cursor-pointer  text-black bg-sky-400 p-2 rounded-lg md:mt-4 mt-2 mx-24">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
            <div className="hover:bg-gradient-to-b from-cyan-100 to-cyan-200 md:w-[390px] md:h-[390px] w-full h-[400px] border-[2px]  border-sky-500 rounded-lg  hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] shadow-lg p-1  ">
              <div className="h-1/2">
                <img src={youtube} alt="image" />
              </div>
              <div className="h-1/2 ">
                <h1 className="mt-2 font-bold underline">
                  <span className="text-red-600 ">Y</span>outube{" "}
                  <span className="text-red-600">C</span>lone
                </h1>
                <p className="text-xs text-justify">
                  This is a clone of the popular video-sharing platform YouTube,
                  which has the several features like search suggessions API,
                  video card, Live comments feature etc..
                </p>
                <a
                  href="https://github.com/Udaya-Pujari/Youtube_Clone"
                  target="_blank"
                >
                  <button className="text-xs  hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]    border cursor-pointer  text-black bg-sky-400 p-2 rounded-lg md:mt-4 mt-1 md:ml-36 ml-20">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
