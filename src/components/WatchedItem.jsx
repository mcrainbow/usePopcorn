import React from "react";

function WatchedItem({ item }) {
  return (
    <li
      className="grid grid-cols-3 items-center gap-x-10 mt-4 cursor-pointer hover:bg-color-background-100 rounded-xl"
      key={item.imdbID}
    >
      <img
        src={item.Poster}
        alt={`${item.Title} poster`}
        className="w-full row-[1/-1] rounded-bl-xl rounded-tl-xl"
      />
      <h3 className="text-[1.8rem]">{item.Title}</h3>
      <div className="flex flex-col items-center gap-[1rem] text-[1.3rem]">
        <p className="flex items-center gap-[0.4rem]">
          <span>⭐️</span>
          <span>{item.imdbRating}</span>
        </p>
        <p className="flex items-center gap-[0.4rem]">
          <span>🌟</span>
          <span>{item.userRating}</span>
        </p>
        <p className="flex items-center gap-[0.4rem]">
          <span>⏳</span>
          <span>{item.runtime} min</span>
        </p>
      </div>
      <button className="absolute right-[2.4rem] h-[1.8rem] [aspect-ratio:1] rounded-[50%] border-none text-[0.9rem] font-bold cursor-pointer transition-all duration-300 hover:bg-red-dark">
        X
      </button>
    </li>
  );
}

export default WatchedItem;
