import React from "react";
import ContentBox from "../../_ui/ContentBox";
import { contentBoxItems } from "../../../_lib/data";

export default function About() {
  return (
    <section>
      <div className="flex items-start w-full p-6 ">
        {contentBoxItems.map((item, index) => (
          <ContentBox
            key={index}
            bgColor={item.bgColor}
            textColor={item.textColor}
            title={item.title}
            content={item.content}
            action={item.action}
          />
        ))}
      </div>
    </section>
  );
}
