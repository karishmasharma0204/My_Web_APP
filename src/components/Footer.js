const Footer = () => {
  return (
    <>
      <section
        className="mt-4 text-center flex flex-col items-center justify-center min-h-screen min-w-screen "
        style={{
          backgroundImage: 'url("/assets/Group 6083.png")',
          backgroundSize: "cover"
        }}
      >
        <div className="relative z-10">
          <h1 className="text-white text-center text-5xl font-light relative z-10 mt-24">
            You’re Just{" "}
            <span
              className="bg-clip-text text-transparent font-bold text-7xl"
              style={{
                background:
                  "linear-gradient(to right, rgba(0, 255, 87, 1), rgba(0, 209, 255, 1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              4-Steps{" "}
            </span>{" "}
            Away From
          </h1>
          <img
            src="/assets/Group.png"
            alt="group"
            className="w-auto h-12 relative -mt-6 z-0"
          />
          <p className="text-white text-center text-5xl font-light">
            Replicating Our Success
          </p>
        </div>
        <div className="flex flex-row items-center space-x-12">
          <img
            src="/assets/Group 5860.png"
            alt="img1"
            className="w-80 h-auto"
          />
          {/* First Section*/}
          <div className="w-auto h-auto bg-gradient-to-r from-[rgba(0,255,87,0.5)] to-[rgba(1,28,44,0.5)] p-6 rounded-lg">
            <div className="bg-white p-2 rounded-full shadow-md w-28 bg-gradient-to-r from-[rgba(0,255,87,1)] to-[rgba(0,209,255,1)]">
              <p className="text-lg font-semibold ">Step 1</p>
            </div>

            <p className="mt-4 text-white text-lg w-auto font-Montserrat">
              Click Of Any Of The Button On This Page <br></br>To get Instant
              Access To Captivate AI...
            </p>
          </div>
        </div>
        {/* Second section*/}
        <div className="flex flex-row-reverse items-center space-x-4 space-x-reverse mt-8">
          <img
            src="/assets/Group 5860.png"
            alt="img2"
            className="w-80 h-auto"
          />
          <div className="w-auto h-auto bg-gradient-to-r from-[rgba(0,255,87,0.5)] to-[rgba(1,28,44,0.5)] p-6 rounded-lg">
            <div className="bg-white p-2 rounded-full shadow-md w-28 bg-gradient-to-r from-[rgba(0,255,87,1)] to-[rgba(0,209,255,1)]">
              <p className="text-lg font-semibold ">Step 2</p>
            </div>

            <p className="mt-4 text-white text-lg w-auto font-Montserrat">
              Click On Any Of The Buttons On This Page <br></br>To get Instant
              Access To Captivate AI...
            </p>
          </div>
        </div>
        {/* Third section*/}
        <div className="flex flex-row items-center space-x-4 space-x-reverse mt-8">
          <img
            src="/assets/Group 5860.png"
            alt="img2"
            className="w-80 h-auto"
          />
          <div className="w-auto h-auto bg-gradient-to-r from-[rgba(0,255,87,0.5)] to-[rgba(1,28,44,0.5)] p-6 rounded-lg">
            <div className="bg-white p-2 rounded-full shadow-md w-28 bg-gradient-to-r from-[rgba(0,255,87,1)] to-[rgba(0,209,255,1)]">
              <p className="text-lg font-semibold ">Step 3</p>
            </div>

            <p className="mt-4 text-white text-lg w-auto font-Montserrat">
              Click On Any Of The Buttons On This Page <br></br>To get Instant
              Access To Captivate AI...
            </p>
          </div>
        </div>
        {/* Fourth section*/}
        <div className="flex flex-row-reverse  items-center space-x-4 space-x-reverse mt-8">
          <img
            src="/assets/Group 5860.png"
            alt="img2"
            className="w-80 h-auto"
          />
          <div className="w-96 h-40 bg-gradient-to-r from-[rgba(0,255,87,0.5)] to-[rgba(1,28,44,0.5)] p-6 rounded-lg">
            <div className="bg-white p-2 rounded-full shadow-md w-28 bg-gradient-to-r from-[rgba(0,255,87,1)] to-[rgba(0,209,255,1)]">
              <p className="text-lg font-semibold ">Step 4</p>
            </div>

            <p className="mt-4 mr-32 text-white text-lg  font-Montserrat">
              Profit (Yup… That's it)
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
