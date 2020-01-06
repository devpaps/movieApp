import React from "react";

const Search = ({ handleInput, handleEnter }) => {
  return (
    <div className="searchbox-wrap">
      <form onSubmit={handleEnter}>
        <input
          type="text"
          placeholder="Search for a movie"
          className="searchbox"
          onChange={handleInput}
        />
      </form>
    </div>
  );
};

export default Search;
