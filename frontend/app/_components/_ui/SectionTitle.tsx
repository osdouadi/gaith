import React from "react";

interface SectionTitleProps {
  title: string;
  textColor: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, textColor }) => {
  return (
    <h3 className={`text-center ${textColor} text-xl sm:text-2xl lg:text-3xl font-bold my-10`}>
      {title}
    </h3>
  );
};

export default SectionTitle;
