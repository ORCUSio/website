import React from "react";

const PlanDetails = () => {
  return (
    <div className="bg-gray-800 flex flex-col gap-16   items-center h-[60vh]">
      <h1 className="font-semibold text-white text-4xl mt-16">
        Plan That Suits You
      </h1>
      <div className="flex gap-6 ">
        <div className="px-10 py-10 w-[60ch] rounded-3xl bg-green-600 flex flex-col gap-4">
          <h1 className="font-bold text-3xl text-white ">
            Small & Medium Business
          </h1>
          <p className="text-white">
            Unified dashboard to manage all your business banking needs. Access
            multiple bank accounts, check balances, make transfers, accept
            online payments, and more.
          </p>
          <button className="text-white font-semibold">
            Get Started for Free
          </button>
        </div>
        <div className="px-10 py-10 w-[60ch] rounded-3xl bg-blue-700 flex flex-col gap-4">
          <h1 className="font-bold text-3xl text-white ">
            Small & Medium Business
          </h1>
          <p className="text-white">
            Unified dashboard to manage all your business banking needs. Access
            multiple bank accounts, check balances, make transfers, accept
            online payments, and more.
          </p>
          <button className="text-white font-semibold">
            Get Started for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
