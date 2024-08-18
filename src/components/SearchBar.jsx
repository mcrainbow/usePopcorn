import React from "react";

function SearchBar({ query, onSearch }) {
  return (
    <input
      className="justify-self-center border-none py-[1.1rem] px-[1.6rem] text-[1.8rem] rounded-[0.7rem] w-[40rem] transition-all duration-300 text-text bg-primary-light outline-none placeholder:text-text-dark focus:shadow-xl focus:translate-y-[-2px]"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
