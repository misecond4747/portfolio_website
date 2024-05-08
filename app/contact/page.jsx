import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className=" container mx-auto px-12 py-4 mt-24">
        <h1 className="text-5xl text-white">Contact page</h1>
      </div>
    </main>
  );
};

export default Contact;
