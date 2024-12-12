import React from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-3 shadow-md">
      <div className="flex gap-4 items-center">
        <Image src={"./main_logo.svg"} width={40} height={40} alt="main_logo" />
        <h1 className="text-3xl font-bold">AI FrameShots</h1>
      </div>
      <div className="flex gap-4 items-center">
        <button className="border border-blue-600 text-blue-600 px-3 py-2 hover:bg-blue-500 hover:text-white">
          Dashboard
        </button>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
