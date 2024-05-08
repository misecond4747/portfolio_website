"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Buttons from "./Buttons";
import ProjectTag from "./ProjectTag";

const PROJECT_DATA = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = PROJECT_DATA.filter((project) => {
    return project.tag.includes(tag);
  });

  return (
    <section>
      <h1 className="text-4xl font-semibold text-center mb-4">My Projects</h1>
      <div className="flex items-center justify-center gap-2 py-6">
        <ProjectTag
          isSelected={tag === "All"}
          onClick={handleTagChange}
          name={"All"}
          key={0}
        ></ProjectTag>
        <ProjectTag
          isSelected={tag === "Web"}
          onClick={handleTagChange}
          name={"Web"}
          key={1}
        ></ProjectTag>
        <ProjectTag
          isSelected={tag === "Mobile"}
          onClick={handleTagChange}
          name={"Mobile"}
          key={2}
        ></ProjectTag>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project, index) => (
          <ProjectCard
            imgUrl={project.image}
            desc={project.description}
            title={project.title}
            key={project.id}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
