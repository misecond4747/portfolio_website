import React from "react";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";

const Projects = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className=" container mx-auto px-12 py-4 mt-24">
        <ProjectSection />
      </div>
    </main>
  );
};

export default Projects;
