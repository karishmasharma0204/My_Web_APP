const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[rgba(1,14,51,1)] text-center flex flex-col items-center justify-center "
        style={{
          backgroundImage: 'url("/assets/Group 5802.png")',
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <img
          src="/assets/logo.png"
          alt="logo"
          className="w-[330.41px] h-[50px] left-[841.01px] gap-0 mb-4"
        />
        <div
          className="p-2 rounded-full mb-4 "
          style={{
            background: "rgb(27,39,72)"
          }}
        >
          <span className="text-white font-bold text-sm mb-4">
            Do Yourself A Favor… And STOP Using Boring Videos…
          </span>
        </div>
        <h1
          className="text-2xl font-bold  font-Montserrat mb-4"
          style={{ color: "rgba(0, 255, 87, 1)" }}
        >
          One-Of-A-Kind Ai App Creates Ultra-Engaging Reels With A
        </h1>

        <button
          className="px-8 py-4 font-Montserrat font-bold w-auto text-3xl mb-4"
          style={{ background: "rgba(255, 245, 0, 1)" }}
        >
          Click Of A Button
        </button>
        <p className="text-2xl text-white mb-4 font-bold ">
          That Hypnotize The Viewers Into
          <span className="px-2" style={{ color: "rgb(242,40,198)" }}>
            High-Paying<br></br> Clients In Seconds…
          </span>
        </p>
        <p className="text-2xl text-white mb-4 font-bold">
          Making Us
          <span
            className="inline-flex items-center justify-center w-36 h-12 px-8"
            style={{
              backgroundImage: 'url("/assets/vector.png")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              color: "rgba(0, 255, 87, 1)"
            }}
          >
            $593.46
          </span>
          Daily On Complete Autopilot
        </p>
        <p
          className="text-2xl text-white font-bold mb-4"
          style={{
            background:
              "linear-gradient(to right, rgba(5, 11, 48, 0), rgba(0, 255, 87, 0.5), rgba(0, 0, 0, 0))"
          }}
        >
          Without Creating A Single Video…Without Writing Any<br></br>
          Scripts…Without Recording Your Voice…
        </p>
      </section>

      {/* Centered Containers Section */}
      <section
        className="flex justify-center items-center py-16 space-x-8 "
        style={{
          background: "rgba(1, 14, 51, 1)"
        }}
      >
        {/* Left Container */}
        <div className="flex flex-col mb-36">
          <div
            className="w-auto  text-white p-8 rounded-lg shadow-lg"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 71, 255, 0.5) ,rgba(0, 255, 87, 0.5))"
            }}
          >
            <p className="font-Montserrat align-center mb-2">
              Without Creating A Single Video…Without Writing Any Scripts
              <br></br> Without Recording Your Voice…
            </p>
            <div className="w-auto bg-white text-white p-8 rounded-lg shadow-lg ">
              <img
                src="/assets/3 1.png"
                alt="left"
                className="h-44 w-auto ml-12"
              />

              {/* Pause/Play Button */}
              <div className="flex flex-row items-center justify-center mt-4">
                <button className="bg-black text-white font-bold  py-2 px-4 rounded mb-4 focus:outline-none">
                  <img
                    src="/assets/Polygon 1.png"
                    alt="Pause"
                    className="w-4 h-4"
                  />
                </button>

                <div className="w-auto flex ml-4 mb-4 justify-left items-center">
                  <input
                    type="range"
                    className="slider w-64 h-2 appearance-none "
                    min="0"
                    max="100"
                    style={{
                      background:
                        "linear-gradient(to right, gray 100%, white 50%)"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Red Rectangle */}
          <div className="w-52 mt-4  h-[44.31px] top-[1381.66px] left-[300.48px] gap-0 rounded-[38px_38px_38px_0px] bg-[rgba(255,29,72,1)]">
            <p className="mt-3 font-bold text-center text-white">
              First 99 Fast Action-
            </p>
          </div>

          {/* Yellow Rectangle */}
          <div className="w-auto h-[89.63px] top-[1420.22px] left-[300.48px] gap-0 rounded-[0px_38px_38px_38px] bg-[rgba(253,200,3,1)]">
            <p className="mt-3 font-bold text-center text-black">
              Takers Will Get Instant Access To Captivate{" "}
              <span
                className="mt-3 font-extrabold text-center"
                style={{ color: "rgba(0, 71, 255, 1)" }}
              >
                AI DFY For 100%
                <br></br> Free
              </span>
              (Average User Saw 356% Increase In Profit (worth $397)
            </p>
          </div>

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
            <span className="font-bold font-montserrat text-white">
              For A Low One Time Fee
            </span>
          </p>
          <p className="font-montserrat mb-4 text-[30px] font-bold leading-[60px] text-center text-white">
            Just Pay Once Instead Of {""}
            <span className="line-through">Monthly</span>
          </p>
          <button
            className="w-auto mb-4 h-12 top-[1730.94px] left-[299.74px] gap-0 rounded-full border-[2px] border-l-0 border-t-0 border-r-0 border-b-0 font-bold text-white text-3xl"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 255, 87, 1), rgba(0, 71, 255, 1))"
            }}
          >
            Click Here Now To Get Started
          </button>
          <img src="/assets/Group 6033.png" alt="" className="mt-8" />
          <div
            className="mb-4 mt-8 w-[527.99px] h-[45px] top-[1890.85px] left-[414.65px] gap-0 font-bold text-center text-white text-3xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #FF1D48 51.5%, rgba(0, 0, 0, 0) 100%)"
            }}
          >
            Hurry! The Prices Rises In...
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div
              className="flex flex-col items-center w-32 h-28 border rounded-lg p-4"
              style={{
                background:
                  "linear-gradient(to right,rgba(0, 255, 87, 0.2), rgba(0, 0, 0, 0))"
              }}
            >
              <div className="text-4xl font-bold text-white">00</div>
              <div className="text-lg font-light text-white">DAYS</div>
            </div>
            <div
              className="flex flex-col items-center w-32 h-28 border rounded-lg p-4 "
              style={{
                background:
                  "linear-gradient(to right,rgba(0, 255, 87, 0.2), rgba(0, 0, 0, 0))"
              }}
            >
              <div className="text-4xl font-bold text-white">00</div>
              <div className="text-lg font-light text-white">HOURS</div>
            </div>
            <div
              className="flex flex-col items-center w-32 h-28 border rounded-lg p-4"
              style={{
                background:
                  "linear-gradient(to right,rgba(0, 255, 87, 0.2), rgba(0, 0, 0, 0))"
              }}
            >
              <div className="text-4xl font-bold text-white">00</div>
              <div className="text-lg font-light text-white">MINUTES</div>
            </div>
            <div
              className="flex flex-col items-center w-32 h-28  border rounded-lg p-4"
              style={{
                background:
                  "linear-gradient(to right,rgba(0, 255, 87, 0.2), rgba(0, 0, 0, 0))"
              }}
            >
              <div className="text-4xl font-bold text-white">00</div>
              <div className="text-lg font-light text-white">SECONDS</div>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div
          className="w-auto text-white p-8 rounded-lg shadow-lg mb-24"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 71, 255, 0.5), rgba(0, 255, 87, 0.5))"
          }}
        >
          <ul className="space-y-6">
            {/* Item 1 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />

                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-semibold">
                Create Hundreds Of Captivating<br></br> Reels With Just A One
                Click
              </p>
            </li>

            {/* Item 2 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-light">
                Unleash Thousands Of Targeted <br></br>Clicks To Any Link
                Instantly…
              </p>
            </li>

            {/* Item 3 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-semibold">
                Works In Any Language So You Can<br></br> Dominate Any Market
                You Want
              </p>
            </li>
            {/* Item 4 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-light">
                Capitalize On Any Trend With<br></br> Captivate AI, No Need To
                Do Any <br></br>Research Yourself
              </p>
            </li>
            {/* Item 5 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-bold">
                Get 23x More Organic Traffic And <br></br>Sales With Our
                Hyper-Engaging<br></br> Reels
              </p>
            </li>

            {/* Item 6 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-light">
                ZERO Experience Needed To<br></br> Operate Captivate AI 
              </p>
            </li>

            {/* Item 7 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-bold">365 Days Money-Back Guarantee</p>
            </li>

            {/* Item 8 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-light">
                Fully Powered By The Most <br></br>Advanced AI Model That Exists
              </p>
            </li>

            {/* Item 9 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-bold">
                No Need To Record, Write, Promote<br></br> Anything. Captivate
                AI Do All Of<br></br> That…
              </p>
            </li>

            {/* Item 10 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-light">
                Create Reels From Scratch Or<br></br> Upload Yours And Edit Them
                With AI
              </p>
            </li>

            {/* Item 11 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-bold">
                Generate Auto-Broll And Auto<br></br>-Transcripts To Any Video
                You Want
              </p>
            </li>

            {/* Item 11 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-bold">
                Get 13x ROAS On Your Ads Using <br></br>Captivate AI For Ads
              </p>
            </li>

            {/* Item 12 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-bold">
                Sell The Reels As A Service For An<br></br> Additional Income
                Stream.
              </p>
            </li>

            {/* Item 13 */}
            <li className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/assets/Vector2.png"
                  alt="Item 1"
                  className="w-auto h-12 object-cover rounded-full"
                />
                <img
                  src="/assets/Vector3.png"
                  alt="Triangle"
                  className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <p className="text-lg font-bold">
                ZERO Upfront Cost And ZERO<br></br> Monthly Fees
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
