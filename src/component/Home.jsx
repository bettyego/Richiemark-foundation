import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FocusAreas from "./FocusAreas";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import SEO from "./SEO";
import BackToTop from "./BackToTop";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <SEO
        title="Home - Richmark Foundation"
        description="Richmark Foundation empowers Nigerian communities through health, education, human rights, and sustainable development initiatives. Join us in making a difference."
      />
      <Navbar />
      <Hero />
      <FocusAreas />
      <CallToAction />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
