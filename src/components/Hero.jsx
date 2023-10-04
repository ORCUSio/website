import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold">
          Modern <br /> Business Banking
        </h1>
        <p className="w-[55ch] tracking-wider leading-7">
          Millions of businesses of all sizes trust Instantpay's full-featured
          current account & debit card that combines payments, collections,
          expense management, and banking APIs to manage their businesses
          efficiently.
        </p>

        <button className="text-white bg-blue-900 px-10 py-2 w-max rounded-xl  ">
          Get Started
        </button>

        <div className="flex items-center justify-between w-1/2 mt-4">
          <div>
            <h4 className="text-gray-500">1 Million+</h4>
            <p className="text-gray-400 text-sm">Registered Businesses</p>
          </div>
          <div className="border-2 bg-gray-500 h-10 w-max"></div>
          <div>
            <h4 className="text-gray-500">1 Million+</h4>
            <p className="text-gray-400 text-sm">Registered Businesses</p>
          </div>
          <div className="border-2 bg-gray-500 h-10 w-max"></div>
          <div>
            <h4 className="text-gray-500">1 Million+</h4>
            <p className="text-gray-400 text-sm">Registered Businesses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
