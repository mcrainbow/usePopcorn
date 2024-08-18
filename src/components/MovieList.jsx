import MovieItem from "./MovieItem";

function MovieList({ movieList }) {
  return (
    <ul className="list-none py-[0.8rem] px-3 overflow-hidden">
      {movieList.map((item) => (
        <MovieItem item={item} key={item.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList;
