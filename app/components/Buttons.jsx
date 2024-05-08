import React from "react";

const Buttons = ({ content, type }) => {
  let styling, bgColor, txColor, contentClass;

  if (type == "primary") {
    styling = "px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4";
    bgColor =
      "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200";
    txColor = "text-white";
    contentClass = "";
  } else if (type == "secondary") {
    styling = "px-1 inline-block py-1 w-full sm:w-fit rounded-full mt-3";
    bgColor = "bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-800";
    txColor = "text-white";
    contentClass =
      "block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2";
  }
  return (
    <button className={`${styling} ${bgColor} ${txColor}`}>
      {" "}
      <span className={`${contentClass}`}>{content}</span>{" "}
    </button>
  );
};

export default Buttons;
