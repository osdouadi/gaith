import React from "react";
import { socialMedia } from "../../_lib/data";

function FooterContact() {
  return (
    <div className="flex-1">
      <div className="flex flex-col items-center">
        <h3 className="text-white text-lg lg:text-xl xl:text-xl pb-3">
          إبقى على تواصل دائم معنا!
        </h3>
        <div className="flex items-center gap-3">
          {socialMedia.map((item, index) => (
            <div className="bg-white rounded-full w-fit p-2" key={index}>
              <item.icon className="text-[1.5rem]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
