import React from "react";
import Link from "next/link";

const SignedInNavbarMenu: React.FC = () => {
  return (
    <div>
      <div className="hidden md:flex space-x-4">
        <Link
          href="#Home"
          className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </Link>
        <Link
          href="#Explore"
          className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
        >
          Explore
        </Link>

        <Link
          href="#contact"
          className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
export default SignedInNavbarMenu;
