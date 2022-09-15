import React, { useState } from "react";
import { getResult } from "../actions/result";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";
import Search from "./Search";

const Home = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("albums");

  const searchHandler = (search) => {
    props.dispatch(getResult(search)).then(() => {
      setSelectedCategory("albums");
    });
  };

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const { albums, artists } = props;
  const result = { albums, artists };

  return (
    <>
      <Search searchHandler={searchHandler} />
      <SearchResult
        result={result}
        setCategory={setCategory}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    playlist: state.playlist,
  };
};

export default connect(mapStateToProps)(Home);
