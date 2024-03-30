import React from "react";
import ReactHtmlParser from "react-html-parser";

interface ContentBoxProps {
  bgColor: string;
  textColor: string;
  title: string;
  content: string;
  action?: boolean;
}

function ContentBox({
  bgColor,
  textColor,
  title,
  content,
  action = false,
}: ContentBoxProps) {
  return (
    <div
      className={`w-1/2 ${bgColor} p-6 rounded-md flex flex-col items-start`}
    >
      <h3 className={`${textColor} pb-4 text-2xl font-semibold`}>{title}</h3>
      <div className={`${textColor} text-xl leading-relaxed pb-4`}>
        {ReactHtmlParser(content)}
      </div>
      {action && (
        <button className="text-white bg-red-300 px-8 py-3 text-xl rounded-md">
          إنضمام للنادي
        </button>
      )}
    </div>
  );
}

export default ContentBox;
