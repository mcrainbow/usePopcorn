export const getMoviesByName = async (name: string) => {
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${name}`,
    {
      headers: {
        "X-API-KEY": import.meta.env.VITE_API_KEY,
      },
    }
  );
  const data = await response.json();
  return data.docs;
};
