import GenreBookSlider from "components/user-components/GenreBookSlider";
import React from "react";

function BrowseLibrary() {
  const genres = ["FICTION", "NON_FICTION", "MYSTERY", "FANTASY", "BIOGRAPHY"]; // replace with your genres

  return (
    <div className="flex flex-col gap-y-6">
      <div className="text-2xl bg-white font-semibold p-6 rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Browse Library</h1>
      </div>
      {genres.map((genre) => (
        <GenreBookSlider key={genre} genre={genre} excludeBookId={null} />
      ))}
    </div>
  );
}

export default BrowseLibrary;
