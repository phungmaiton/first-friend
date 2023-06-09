import React from "react";

function SearchSort({ setSearchTerm, setSort }) {
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSort(e) {
    setSort(e.target.value);
  }

  return (
    <div className="search container m-auto px-2 pt-10 pb-10">
      <input
        onChange={handleChange}
        type="text"
        className="searchTerm"
        placeholder="Search..."
      />

      <select onChange={handleSort} className="dropDown">
        <option value="default" disabled selected>
          Sort By
        </option>
        <option value="name">Name</option>
        <option value="likes">Popularity</option>
        <option value="id">Id</option>
      </select>
    </div>
  );
}

export default SearchSort;
