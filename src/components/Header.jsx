import React from "react";

function Header({ query, setQuery, movies }) {
  return (
    <header>
      <nav className="grid grid-cols-3 items-center h-[7.2rem] py-0 px-[3.2rem] bg-[#6741d9] rounded-[0.9rem]">
        <div className="flex items-center gap-[0.8rem]">
          <span className="text-[3.2rem]" role="img">
            🍿
          </span>
          <h1 className="text-[2.4rem] font-bold text-white">usePopcorn</h1>
        </div>
        <input
          className="justify-self-center border-none py-[1.1rem] px-[1.6rem] text-[1.8rem] rounded-[0.7rem] w-[40rem] transition-all duration-300 text-text bg-primary-light outline-none placeholder:text-text-dark focus:shadow-xl focus:translate-y-[-2px]"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="justify-self-end text-[1.8rem]">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>
    </header>
  );
}

export default Header;
