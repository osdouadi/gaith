import React from "react";
import ReactHtmlParser from "react-html-parser";
import Button from "./Button";

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
      className={`w-full md:w-1/2 lg:w-1/2 ${bgColor} p-6 rounded-md flex flex-col items-center text-center md:items-start md:text-start`}
    >
      <h3 className={`${textColor} pb-4 text-xl sm:text-2xl lg:text-3xl font-semibold`}>{title}</h3>
      <div className={`${textColor} text-lg sm:text-xl leading-10 pb-4`}>
        {ReactHtmlParser(content)}
      </div>
      {action && (
        <Button color="text-white" bgColor="bg-primary">
 إنضمام للنادي
        </Button>
      )}
    </div>
  );
}

export default ContentBox;
