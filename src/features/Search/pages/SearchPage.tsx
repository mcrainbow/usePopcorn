import { Button } from "@/components/ui/button";
import SearchPageInput from "../components/SearchPageInput";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMoviesByName } from "../api/MoviesByName";
import { StarIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface Genre {
  name: string;
}

interface Movie {
  id: number;
  name: string;
  year: number;
  isSeries: boolean;
  rating: {
    kp: number;
  };
  genres: Genre[];
  poster: {
    url: string;
  };
}

export default function SearchPage() {
  const [search, setSearch] = useState<string | null>(null);
  return (
    <div className="px-4">
      <section className="py-15">
        <div className="container mx-auto">
          <div className="grid gap-x-5 grid-cols-[67%_33%] w-full">
            <div className="w-full">
              <SearchPageInput search={search} setSearch={setSearch} />

              {search && <SearchPageResults search={search} />}
            </div>

            <SearchPageFilter />
          </div>
        </div>
      </section>
    </div>
  );
}

function SearchPageFilter() {
  return (
    <div className="w-full px-4">
      <div className="border-l-4 border-primary pl-4">
        <h3 className="text-xl font-bold ">Filter</h3>
      </div>
      <div className="pl-5 mt-4">
        <ul className="flex flex-wrap gap-2">
          <SearchPageFilterItem>Category</SearchPageFilterItem>
          <SearchPageFilterItem>Year</SearchPageFilterItem>
          <SearchPageFilterItem>Category</SearchPageFilterItem>
          <SearchPageFilterItem>Genre</SearchPageFilterItem>
          <SearchPageFilterItem>Category</SearchPageFilterItem>
          <SearchPageFilterItem>Category</SearchPageFilterItem>
        </ul>
      </div>
    </div>
  );
}

function SearchPageFilterItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Button
        variant="outline"
        className="rounded-full bg-components-background border-primary text-component-foreground px-4 py-2"
      >
        {children}
      </Button>
    </li>
  );
}

function SearchPageResults({ search }: { search: string | null }) {
  const { data, isLoading } = useQuery({
    queryKey: ["movies", search],
    queryFn: () => getMoviesByName(search ?? ""),
    enabled: !!search,
  });

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mt-4">
      <div className="border-l-4 border-primary pl-4">
        <h3 className="text-xl font-bold ">
          Результаты поиска по названию "{search}"
        </h3>
      </div>

      <div className="grid gap-4 border border-white/20 rounded-lg p-4 mt-4">
        <div className="col-span-1">
          {Array.isArray(data) &&
            data?.map(
              (movie: Movie) =>
                movie.poster.url && (
                  <div
                    className="w-full h-40 border-b last:border-b-0 border-border flex items-center gap-2 py-2"
                    key={movie.id}
                  >
                    <img
                      src={movie.poster.url}
                      className="h-full rounded-sm"
                      alt=""
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="text-lg font-bold">{movie.name}</h4>
                      <p>
                        {movie.isSeries ? "Сериал" : "Фильм"} | {movie.year}г.
                      </p>
                      <p className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4" />
                        {movie.rating.kp}
                      </p>
                      <p className="text-sm text-gray-400">
                        {movie.genres
                          .splice(0, 2)
                          .map((genre: Genre) => genre.name)
                          .join(", ")}
                      </p>
                    </div>
                    <Button
                      variant="default"
                      className="rounded-full ml-auto self-end bg-border"
                    >
                      <Link to={`/movie/${movie.id}`}>Узнать больше</Link>
                    </Button>
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
}
