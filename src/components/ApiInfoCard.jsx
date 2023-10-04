import React from "react";
import ApiFeatureSubCard from "./ApiFeatureSubCard";
const ApiInfoCard = () => {
  return (
    <div className="px-32 my-16">
      <section>
        <div className="border-[1px] px-10 py-16 flex flex-col gap-10 rounded-2xl">
          <div className=" flex gap-7 ">
            <div className="flex flex-col gap-6 w-[50ch]">
              <h1 className="text-4xl font-bold leading-normal ">
                API banking platform that developers love
              </h1>
              <p className="tracking-wider">
                Modern API banking stack that is easy to understand, implement,
                and iterate. Designed with reliability and scalability in mind.
              </p>
              <div className="flex gap-4">
                <button className="w-max text-white bg-black rounded-md px-4 py-1 ">
                  Developer Toolkit
                </button>

                <button className="text-white w-max bg-black rounded-md px-4 py-1">
                  Developer Toolkit
                </button>
              </div>
            </div>
            <img
              src="https://static.instantpay.in/assets/web/api_section/api_frame_color.svg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Features</h1>
            <div className="grid grid-cols-2">
              <ApiFeatureSubCard
                heading={"Powerful APIs"}
                para={
                  "Integrate banking into your application with our bundle of flexible APIs used by thousands of large businesses."
                }
              />
              <ApiFeatureSubCard
                heading={"Clear Documentation"}
                para={
                  "Get started quickly with clear docs, code samples and SDKs to guide you throughout the implementation."
                }
              />
              <ApiFeatureSubCard
                heading={"Elastic Platform"}
                para={
                  "Super scalable cloud platform that auto-scales from zero to a million transactions, all in a single day."
                }
              />
              <ApiFeatureSubCard
                heading={"Elastic Platform"}
                para={
                  "Super scalable cloud platform that auto-scales from zero to a million transactions, all in a single day."
                }
              />
              <ApiFeatureSubCard
                heading={"Elastic Platform"}
                para={
                  "Super scalable cloud platform that auto-scales from zero to a million transactions, all in a single day."
                }
              />
              <ApiFeatureSubCard
                heading={"Elastic Platform"}
                para={
                  "Super scalable cloud platform that auto-scales from zero to a million transactions, all in a single day."
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiInfoCard;
