import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownVisible(true);
  };
  return (
    <section className="flex justify-between py-4 items-baseline border-b-2">
      <h1 className="font-extrabold text-2xl">Magepunk</h1>
      <div className="flex gap-16">
        <div>
          <p href="" onClick={handleMouseEnter}>
            Products
          </p>
          {isDropdownVisible && (
            <div className="absolute transform group-hover:block">
              <ul className="space-y-2 bg-slate-300 top-10">
                <li>Accounts</li>
                <li>Payouts</li>
                <li>Collections</li>
                <li>Cards</li>
                <li>Loans</li>
                <li>Marketplace</li>
              </ul>
            </div>
          )}
        </div>
        <a href="">Develop API</a>
        <a href="">Pricing</a>
        <a href="">Company</a>
      </div>
      <div className="flex gap-2">
        <button className="border-2 px-4 py-2 rounded-md">Login</button>
        <button className=" px-4 py-2 rounded-md text-white bg-black">
          Open an Account
        </button>
      </div>
    </section>
  );
};

export default Navbar;
