import React from "react";

const SiteMap = () => {
  return (
    <div className="bg-gray-800 px-16">
      <section className="flex h-[45vh]">
        <div className="flex flex-col gap-8 w-[60ch] self-center">
          <img
            src="https://static.instantpay.in/assets/web/footer/footer_icon.svg"
            alt=""
            className="w-10 mb-6"
          />
          <h1 className="text-white font-bold text-3xl">Magepunk</h1>
          <p className="text-white text-xs w-[60ch] leading-4">
            Millions of businesses of all sizes trust Instantpay's full-featured
            current account & debit card that combines payments, collections,
            expense management, and banking APIs to manage their businesses
            efficiently.
          </p>
        </div>

        <div className="flex mt">
          <div>
            <h1 className="font-semibold text-white ">Products</h1>
            <p className="text-xs"></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteMap;
