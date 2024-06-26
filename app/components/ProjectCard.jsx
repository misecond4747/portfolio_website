import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, desc, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay absolute top-0 left-0 h-full w-full bg-[#181818] bg-opacity-0 hidden group-hover:flex  items-center justify-center group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 m-2 rounded-full border-2 flex items-center justify-center border-[#ABD7B4] cursor-pointer hover:text-white hover:border-white"
          >
            <CodeBracketIcon
              className="h-10 w-10 text-[#ADB7BE] hover:text-white     
            "
            />
          </Link>

          <Link
            href={previewUrl}
            className="h-14 w-14 m-2 rounded-full border-2 flex items-center justify-center border-[#ABD7B4] cursor-pointer hover:text-white hover:border-white"
          >
            <EyeIcon
              className="h-10 w-10 text-[#ADB7BE] hover:text-white     
            "
            />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl bg-[#181818] py-6 px-4">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-[#ADB7BE]">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
