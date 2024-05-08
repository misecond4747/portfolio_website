import React from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className=" container mx-auto px-12 py-4 mt-12">
        <AboutSection />
      </div>
    </main>
  );
};

export default About;
