import React from "react";
import Link from "next/link";

const UnSignedInNavbarMenu: React.FC = () => {
  return (
    <div>
      <div className="hidden md:flex space-x-4">
        <button className="py-1 px-6 outline outline-1 text-sm rounded-full shadow hover:bg-gray-800 hover:text-white transition-all duration-300">
          Login
        </button>
        <button className="py-2 px-6 bg-gray-800 text-white text-sm rounded-full hover:bg-gray-1000  transition-all duration-300">
          Sign up
        </button>
      </div>
    </div>
  );
};
export default UnSignedInNavbarMenu;
