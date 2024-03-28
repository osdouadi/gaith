import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h3 className="text-center text-white text-2xl">{title}</h3>;
};

export default SectionTitle;
