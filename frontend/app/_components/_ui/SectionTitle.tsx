import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h3 className="text-center text-primary text-4xl font-bold my-10">{title}</h3>;
};

export default SectionTitle;
