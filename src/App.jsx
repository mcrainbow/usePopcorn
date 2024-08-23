import { useState } from "react";
import { calcAvarage } from "./utils/calculateAvarage";
import { tempMovieData } from "./data/movieData";
import { tempWatchedData } from "./data/watchedData";
import Header from "./components/Header";
import Box from "./components/Box";
import Summary from "./components/Summary";
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import NumResults from "./components/NumResults";
import SearchBar from "./components/SearchBar";
import Logo from "./components/Logo";
import ToggleButton from "./components/ToggleButton";
import StarRating from "./components/StarRating";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <>
      <StarRating maxRaiting={10} />
      <Header>
        <nav className="grid grid-cols-3 items-center h-[7.2rem] py-0 px-[3.2rem] bg-[#6741d9] rounded-[0.9rem]">
          <Logo />
          <SearchBar query={query} onSearch={setQuery} />
          <NumResults movies={movies} />
        </nav>
      </Header>
      <main className="mt-[2.4rem] h-[calc(100vh - 7.2rem - 3 * 2.4rem)] flex gap-[2.4rem] justify-center">
        <Box>
          <ToggleButton isOpen={isOpen1} onOpen={setIsOpen1} />
          {isOpen1 && <MovieList movieList={movies} />}
        </Box>

        <Box>
          <ToggleButton isOpen={isOpen2} onOpen={setIsOpen2} />
          <Summary watched={watched} />
          {isOpen2 && <WatchedList watchedList={watched} />}
        </Box>
      </main>
    </>
  );
}
