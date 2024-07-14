import React from "react";
import mypdf from "../pdf/Udaya_Pujari_SDE_ReactJS_2024.pdf";

const Resume = () => {
  return (
    <div>
      <a
        href={mypdf}
        download="Udaya_Pujari_SDE_ReactJS_2024.pdf"
        className="bg-sky-200 text-black py-2 px-4 rounded  hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
      >
        Resume ⬇
      </a>
    </div>
  );
};

export default Resume;
