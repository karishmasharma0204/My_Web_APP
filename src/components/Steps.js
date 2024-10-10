const Steps = () => {
  return (
    <section className="bg-white">
      <img src="/assets/Vector_last.png" alt="bg" />
      <p className="font-montserrat text-[50px] font-bold leading-[60px] text-center mb-4">
        <span
          className="bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 255, 87, 1), rgba(0, 209, 255, 1))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Get Captivate
        </span>
        <br />
        <span className="font-bold font-montserrat text-black text-center">
          For A Low One Time Fee
        </span>
      </p>
      <p className="font-montserrat mb-4 text-[30px] font-bold leading-[60px] text-center text-red-600">
        Just Pay Once Instead Of {""}
        <span className="line-through">Monthly</span>
      </p>
      <div class="flex flex-col items-center justify-center ">
        <button
          className="w-auto items-center mb-4 h-12   gap-0 rounded-full border-[2px]  font-bold text-center pb-14 text-white text-2xl px-4 py-4  "
          style={{
            background:
              "linear-gradient(to right, rgba(0, 255, 87, 1), rgba(0, 71, 255, 1))"
          }}
        >
          Click Here Now To Get Started
        </button>
        <img src="/assets/Group 6033.png" alt="" className="mt-4 ml-24" />
        <div
          className="mb-4 mt-8 w-[527.99px] h-[45px] top-[1890.85px] left-[414.65px] gap-0 font-bold text-center text-white text-3xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #FF1D48 51.5%, rgba(0, 0, 0, 0) 100%)"
          }}
        >
          Hurry! The Prices Rises In...
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className="flex flex-col items-center w-32 h-28 border rounded-lg p-4 bg-black">
          <div className="text-4xl font-bold text-white">00</div>
          <div className="text-lg font-light text-white">DAYS</div>
        </div>
        <div className="flex flex-col items-center w-32 h-28 border rounded-lg p-4 bg-black ">
          <div className="text-4xl font-bold text-white">00</div>
          <div className="text-lg font-light text-white">HOURS</div>
        </div>
        <div className="flex flex-col items-center w-32 h-28 border rounded-lg p-4 bg-black">
          <div className="text-4xl font-bold text-white">00</div>
          <div className="text-lg font-light text-white">MINUTES</div>
        </div>
        <div className="flex flex-col items-center w-32 h-28  border rounded-lg p-4 bg-black">
          <div className="text-4xl font-bold text-white">00</div>
          <div className="text-lg font-light text-white">SECONDS</div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
