import React from "react";

function DecoratedWord({
  textColor,
  children,
}: {
  textColor: string;
  children: string;
}) {
  return (
    <span className={`text-${textColor} text-decoration-style`}>
      {children}
    </span>
  );
}

export default DecoratedWord;
