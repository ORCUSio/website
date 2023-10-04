import React from "react";

const ApiFeatureSubCard = ({ heading, para }) => {
  return (
    <div className="w-[30ch] mt-10">
      <h1 className="font-bold mb-4">{heading}</h1>
      <p className="text-sm">{para}</p>
    </div>
  );
};

export default ApiFeatureSubCard;
