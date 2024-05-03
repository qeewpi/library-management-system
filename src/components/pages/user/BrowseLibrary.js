import GenreBookSlider from "components/user-components/GenreBookSlider";
import React from "react";

function BrowseLibrary() {
  const genres = ["FICTION", "NON_FICTION", "MYSTERY", "FANTASY", "BIOGRAPHY"]; // replace with your genres

  return (
    <div className="flex flex-col gap-y-6">
      {genres.map((genre) => (
        <GenreBookSlider key={genre} genre={genre} excludeBookId={null} />
      ))}
    </div>
  );
}

export default BrowseLibrary;
