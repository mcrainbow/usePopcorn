import { useState } from "react";
import { calcAvarage } from "./utils/calculateAvarage";
import { tempMovieData } from "./data/movieData";
import { tempWatchedData } from "./data/watchedData";
import Header from "./components/Header";
import Box from "./components/Box";
import Summary from "./components/Summary";
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <>
      <Header query={query} setQuery={setQuery} movies={movies} />
      <main className="mt-[2.4rem] h-[calc(100vh - 7.2rem - 3 * 2.4rem)] flex gap-[2.4rem] justify-center">
        <Box>
          <button
            className="absolute top-[0.8rem] right-[0.8rem] h-[2.4rem] [aspect-ratio:1] rounded-full border-none bg-background-900 text-text text-[1.4rem] text-bold cursor-pointer z-999"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "–" : "+"}
          </button>
          {isOpen1 && <MovieList movieList={movies} />}
        </Box>

        <Box>
          <button
            className="absolute top-[0.8rem] right-[0.8rem] h-[2.4rem] [aspect-ratio:1] rounded-full border-none bg-background-900 text-text text-[1.4rem] text-bold cursor-pointer z-999"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
          <Summary watched={watched} />
          {isOpen2 && <WatchedList watchedList={watched} />}
        </Box>
      </main>
    </>
  );
}
