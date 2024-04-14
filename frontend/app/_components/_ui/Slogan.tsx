import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

interface SolganProps {
  fontSize: string;
}

function Slogan({ fontSize }: SolganProps) {
  return (
    <span
      className={`slogan flex gap-2 ${fontSize} text-yellow-300 font-semibold`}
    >
      <RiDoubleQuotesR className="self-start" />
      الطالب كالغيث اينما حل نفع
      <RiDoubleQuotesL className="self-end" />
    </span>
  );
}

export default Slogan;
