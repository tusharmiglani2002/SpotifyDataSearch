import React, { useState } from "react";
import "./Search.css";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      props.searchHandler(search);
    }
  };

  const inputChangeHandler = (e) => {
    const search = e.target.value;
    setSearch(search);
  };

  return (
    <div className="container searchContain">
      <h1 style={{ fontSize: "4rem" }}>Spotify Data Search </h1>
      <p>
        Use Search Bar to get results for your favorite albums and artists from
        Spotify.
        <br />
        Click on the banners to open them in the Spotify Official Web App.
      </p>
      <form onSubmit={searchHandler}>
        <div className="form-group searchBar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input
            type="search"
            className="form-control"
            placeholder="Search for Album or Artist..."
            onChange={inputChangeHandler}
          />
        </div>
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
