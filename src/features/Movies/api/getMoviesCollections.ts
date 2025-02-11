export async function getMoviesCollections() {
  const response = await fetch(
    "https://api.kinopoisk.dev/v1.4/list?page=1&limit=250&slug=top250&slug=popular-films&slug=100_greatest_movies_XXI&slug=about_programmers&slug=family_comedies",
    {
      headers: {
        "X-API-KEY": import.meta.env.VITE_API_KEY,
      },
    }
  );

  return response.json();
}
