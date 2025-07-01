import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#228B22] mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          Join Richmark Foundation in supporting health, education, human rights, and community services. Every action counts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/donate"
            className="bg-[#FFA500] hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300"
          >
            Donate Now
          </Link>
          <Link
            to="/volunteer"
            className="border-2 border-[#228B22] text-[#228B22] hover:bg-[#228B22] hover:text-white px-8 py-3 rounded-md font-semibold transition duration-300"
          >
            Become a Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
