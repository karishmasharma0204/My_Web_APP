import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-[rgb(14,26,61)] shadow-lg ">
      {/* Gradient Box for Discount Message */}

      <div
        className="p-2 rounded-md ml-28 "
        style={{
          background:
            "linear-gradient(to right, rgba(0, 71, 255, 1), rgba(242, 40, 198, 1))"
        }}
      >
        <span className="text-white font-bold text-sm">
          Hurry! Grab Your Early Bird $3 Instant Discount!
        </span>
      </div>

      {/* Coupon Code */}
      <div className="w-[309px] h-[16px] top-[32px] left-[848.42px] gap-0 mb-5 text-white text-lg font-bold">
        <span>With coupon Code: HOSTM3</span>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mr-28">
        <button className=" text-white px-4 py-2 rounded-md hover:opacity-90 transition duration-300">
          Watch DEMO
        </button>
        <button
          className="text-white px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300"
          style={{
            background:
              "linear-gradient(to right, rgba(156, 156, 156, 1), rgba(86, 86, 86, 1))"
          }}
        >
          BUY NOW
        </button>
      </div>
    </header>
  );
};

export default Header;
