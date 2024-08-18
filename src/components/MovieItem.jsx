import React from "react";

function MovieItem({ item }) {
  return (
    <li
      className="grid grid-cols-3 items-center gap-x-12 mt-4 first:mt-0 cursor-pointer hover:bg-color-background-100 rounded-xl"
      key={item.imdbID}
    >
      <img
        className="w-full row-[1/-1] rounded-bl-xl rounded-tl-xl"
        src={item.Poster}
        alt={item.Title}
      />
      <h2 className="text-[1.6rem]">{item.Title}</h2>
      <span className="text-[1.6rem]">{item.Year}</span>
    </li>
  );
}

export default MovieItem;
