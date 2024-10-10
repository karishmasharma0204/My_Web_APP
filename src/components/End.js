const End = () => {
  return (
    <>
      <section
        className="text-center flex flex-col  items-center justify-center h-48 relative"
        style={{
          backgroundImage: 'url("/assets/Group 5865.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Left corner image */}
        <img
          src="/assets/Untitled-7 1.png"
          alt="left"
          className="absolute top-50 left-20 w-32 h-32 mt-14"
        />
        {/* Right corner image */}
        <img
          src="/assets/Untitled-8 1.png"
          alt="right"
          className="absolute top-0 right-20 w-32 h-32 mt-14"
        />
        <p className="mt-36 font-light text-3xl font-Montserrat text-black">
          {" "}
          Every Video <br></br>{" "}
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            We Generate Makes Us Money
          </span>{" "}
          <br></br>
          <span> Like This…</span>
        </p>
        <br></br> <br></br>
        <span> {""}</span>
        <span>{""}</span>
        <span> ...... </span>
      </section>
    </>
  );
};

export default End;
