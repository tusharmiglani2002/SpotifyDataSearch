import React from "react";
import Albums from "./Albums";
import Artists from "./Artists";
import "./SearchResult.css";

const SearchResult = (props) => {
  const { result, setCategory, selectedCategory } = props;
  const { albums, artists } = result;

  return (
    <>
      <div className="searchBtn">
        <button
          className={`${selectedCategory === "albums" ? "btn active" : "btn"}`}
          onClick={() => setCategory("albums")}
        >
          Albums
        </button>
        <button
          className={`${selectedCategory === "artists" ? "btn active" : "btn"}`}
          onClick={() => setCategory("artists")}
        >
          Artists
        </button>
      </div>
      <div className={`${selectedCategory === "albums" ? "" : "hide"}`}>
        {albums && <Albums albums={albums} />}
      </div>
      <div className={`${selectedCategory === "artists" ? "" : "hide"}`}>
        {artists && <Artists artists={artists} />}
      </div>
    </>
  );
};

export default SearchResult;
