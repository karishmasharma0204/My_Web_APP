const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Repeat this for each feature */}
        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold">
            You Don't Need To Record Anything
          </h3>
          <p className="text-gray-700">It allows you to generate reels...</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
