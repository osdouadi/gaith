import React from "react";
import { developmentTools } from "../../../_lib/data";
import ItemsCard from "../../_ui/ItemsCard";
import DeveloperInfo from "../../_ui/DeveloperInfo";

function Developer() {
  return (
    <div className="bg-gradient-to-l from-[#c63434]/95 via-[#bb3737] to-[#a72b2b] shadow-md w-1/2 mx-auto rounded-t-xl py-6 px-4 flex items-start ">
      <div className="w-1/2">
     <DeveloperInfo />
      </div>
      <div className="w-1/2 text-white">
        <div>
          <h3 className="leading-relaxed text-md">
            التكنولوجيا و لغات البرمجة المستعملة لبرمجة منصة غيث
          </h3>
        </div>
        <div dir="ltr">
          {developmentTools.map((item, index) => (
            <ItemsCard
              cardTitle={item.title}
              cardItems={item.tools}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Developer;
