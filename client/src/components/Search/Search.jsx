import React from "react";

const Search = (props) => {
  return (
    <>
      <form>
        <input
          className="px-2 py-3 bg-black border border-white text-white font-gt-america"
          typeof="text"
          placeholder="find your jam"
          name="Search"
          value={props.name}
          onChange={(e) => props.handleSearch(e)}
        ></input>
      </form>
    </>
  );
};

export default Search;
