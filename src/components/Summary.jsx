import { calcAvarage } from "../utils/calculateAvarage";

function Summary({ watched }) {
  const avgImdbRating = calcAvarage(watched.map((movie) => movie.imdbRating));
  const avgUserRating = calcAvarage(watched.map((movie) => movie.userRating));
  const avgRuntime = calcAvarage(watched.map((movie) => movie.runtime));

  return (
    <div className="pl-[3.2rem] pr-[3.2rem] py-[2.2rem] rounded-[0.9rem] [box-shadow:0_1.2rem_2.4rem_rgba(0,_0,_0,_0.2)]">
      <h2 className="uppercase text-[1.6rem] mb-[0.6rem]">
        Movies you watched
      </h2>
      <div className="flex items-center gap-[2.4rem] text-[1.6rem] font-semibold">
        <p className="flex items-center gap-[0.8rem]">
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p className="flex items-center gap-[0.8rem]">
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p className="flex items-center gap-[0.8rem]">
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p className="flex items-center gap-[0.8rem]">
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
