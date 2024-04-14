import React from "react";

function Description({
  textColor,
  textSize,
}: {
  textColor: string;
  textSize: string;
}) {
  return (
    <p className={`justify-center ${textColor} ${textSize} leading-relaxed`}>
      نادي علمي و ثقافي مقره جامعة زيان عاشور - ولاية الجلفة
    </p>
  );
}

export default Description;
