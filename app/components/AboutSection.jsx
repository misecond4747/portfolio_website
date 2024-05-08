"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-3">
        <li>React</li>
        <li>Javascript</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>PostgresSQL</li>
        <li>Sequelize</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-3">
        <li>Fullstack Academy of Code.</li>
        <li>University of Chakwal</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-3">
        <li>AWS Cloud Practitioner </li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabClick = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/about-image.png"}
          height={400}
          width={400}
          alt="About Image"
        />

        <div className="h-full md:mt-0 mt-4 flex flex-col">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            odit maiores saepe voluptatibus ab magnam accusantium non nisi optio
            tempore praesentium consequuntur doloribus a, perspiciatis
            reprehenderit facilis doloremque alias rerum.
          </p>
          <div
            className="flex mt-8 flex-row justify-start
          "
          >
            <TabButton
              active={tab === "skills"}
              selectTab={() => {
                handleTabClick("skills");
              }}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => {
                handleTabClick("education");
              }}
            >
              Education
            </TabButton>
            <TabButton
              active={tab === "certification"}
              selectTab={() => {
                handleTabClick("certification");
              }}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((x) => x.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
