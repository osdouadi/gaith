import React from "react";
import Button from "./Button";
import { footerList } from "../../_lib/data";

function FooterList() {
  return (
    <div className="flex-1 text-base mb-5 lg:mb-0 xl:mb-0">
      <div className="flex flex-col ">
        <ul>
          {footerList.map((item, index) => (
            <li className="text-white flex items-center gap-2 pb-4" key={index}>
              <item.icon />
              {item.title}
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-3 mt-3">
          <Button type="btn-normal" color="btn-red">
            إنضمام للنادي
          </Button>
          <Button type="btn-normal" color="btn-yellow">
            دخول الأعضاء
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FooterList;
