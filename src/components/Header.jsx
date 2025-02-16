import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
    <div className="bg-blue-50 flex p-4 text-sm justify-center gap-4">
      <div className="">
        Navigate your ideal career path with tailored expert advice 
      </div>
      <div className="text-blue-500">Contact Expert</div>
    </div>

    <Navbar/>
    </>
  );
}
