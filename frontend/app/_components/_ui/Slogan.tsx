import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

interface SolganProps {
  fontSize: string;
}

function Slogan({ fontSize }: SolganProps) {
  return (
    <span
      className={`slogan ${fontSize} text-yellow-300 font-semibold flex gap-2`}
    >
      <RiDoubleQuotesR className="self-start" />
      الطالب كالغيث اينما حل نفع
      <RiDoubleQuotesL className="self-end" />
    </span>
  );
}

export default Slogan;
