import React from "react";
import IconBox from "./IconBox";
import cn from "classnames";
import { menuData } from "../../_lib/data";

function MenuItems({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <div className="flex flex-col items-start gap-5">
      {menuData.map((item, index) => (
        <div
          className={cn(
            "flex items-center gap-2 w-full rounded-md",
            item.isActive && "bg-gray-50/10"
          )}
          key={index}
        >
          <IconBox icon={<item.icon color="white" size={22} />} />
          {isCollapsed ? null : (
            <h1 className="text-slate-100">{item.title}</h1>
          )}
        </div>
      ))}
    </div>
  );
}

export default MenuItems;
