import React, { useState } from "react";

const genres = [
  "Horror",
  "Fantasy",
  "Sci-Fi",
  "Mystery",
  "Romance",
  "Drama",
  "Adventure",
  "Historical",
  "Comedy",
];

export default function GenreSelection() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const isSelected = (genre: string) => selectedGenres.includes(genre);
  return (
    <div className="bg-white shadow-lg rounded-lg p-7 mx-3 max-w-2xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Let's find your favourite Genres
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Choose the genres you love to read This helps us customize your
        experience.
      </p>

      {/* Genre Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => toggleGenre(genre)}
            className={`p-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              isSelected(genre)
                ? "bg-cyan-700 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          className="py-2 px-6 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-1000  transition-all duration-300"
          onClick={() => console.log("Selected Genres:", selectedGenres)}
        >
          Continue
        </button>
        <button
          className="py-2 px-6 outline outline-1 font-semibold rounded-full shadow hover:bg-gray-800 hover:text-white transition-all duration-300"
          onClick={() => setSelectedGenres([])}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
