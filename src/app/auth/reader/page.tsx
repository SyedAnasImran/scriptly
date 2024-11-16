"use client";
import GenreSelection from "@/components/GenreSelection";
import React, { useState } from "react";

const SelectGenres: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <GenreSelection />
    </div>
  );
};

export default SelectGenres;
