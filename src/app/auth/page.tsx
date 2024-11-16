"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <div
          className="min-h-screen flex flex-col mx-4 justify-center  items-evenly md:items-center md:justify-evenly bg-cover bg-center md:flex-row"
          //   style={{
          //     backgroundImage: "url('/images/login-bg.jpg')", // Replace with your background image path
          //   }}
        >
          {/* intro */}
          <div className="text-center md:text-start md:w-2/5">
            <span className="flex flex-row md:justify-start justify-center md:text-5xl text-3xl    mb-4 gap-3">
              <h1 className="font-light">We are</h1>
              <h1 className="font-bold text-]-700"> Scriptly!</h1>
            </span>

            <p className="text-gray-600 mb-6 ">
              the ultimate social platform for storytellers and readers. Whether
              you're crafting tales as a writer or exploring worlds as a reader,
              Scriptly empowers you to create, share, and connect through the
              magic of stories."
            </p>

            {/* button */}
            <div className="flex flex-row gap-3 md:justify-start justify-center">
              {/* Writer Button */}
              <Link href="/auth/writer">
                <button className="w-full bg-gray-800 text-white font-semibold px-5 py-3 rounded-full shadow hover:bg-gray-600 transition-all duration-300 mb-4">
                  Let's Write
                </button>
              </Link>
              {/* Reader Button */}
              <Link href="/auth/reader">
                <button className="w-full  bg-cyan-600 text-white font-semibold px-5 py-3 rounded-full shadow hover:bg-cyan-500 transition-all duration-300 mb-4">
                  Let's Read
                </button>
              </Link>
            </div>
          </div>
          <Image
            src="/auth1.svg"
            width={250}
            height={250}
            alt="Picture of the author"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
