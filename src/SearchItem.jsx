import React, { Component } from "react";

const SearchItme = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search">
      <input
        type="text"
        role="searchbox"
        placeholder="Search Item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItme;
