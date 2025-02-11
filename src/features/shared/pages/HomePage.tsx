import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { getMoviesCollections } from "@/features/Movies/api/getMoviesCollections";
import { useQuery } from "@tanstack/react-query";
import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FavouriteSection />
      <InfoSection />
      <MoviesCollectionsSection />
      <AccordionSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="w-full h-screen relative">
      <video
        className="w-full h-screen object-cover"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src="/TitanicBg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute top-0 left-0 w-3/5 bg-primary/40 z-5 h-1/3 clip-path-triangle"></div>
      <div className="absolute top-0 left-0 w-3/5 bg-primary/40 z-5 h-2/4 clip-path-triangle"></div>
      <div className="absolute top-0 right-0 w-3/5 bg-primary/80 z-5 h-2/5 clip-path-triangle-reversed"></div>
      {/* Add info about site */}
    </section>
  );
}

function FavouriteSection() {
  return (
    <div className="bg-components-background w-full py-10">
      <div className="container mx-auto flex items-center justify-center">
        <Link to="/favourites">
          <Button variant="link" className="text-white text-xl cursor-pointer">
            <span>
              <Bookmark className="size-5" />
            </span>
            <span>View Favourites</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <div className="w-full py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Карточка 1 - Поиск фильмов */}
        <Card className="relative h-[300px] overflow-hidden group flex flex-col justify-between">
          <div className="absolute inset-0 bg-[url('/images/CardInfoMarvelFilmSearch.jpg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/60" />
          <CardHeader className="relative z-2">
            <CardTitle className="text-white">Поиск фильмов</CardTitle>
          </CardHeader>
          <CardContent className="relative z-2">
            <CardDescription className="text-white">
              Исследуйте обширную базу данных фильмов. Находите подробную
              информацию о любом фильме: рейтинги, отзывы, актерский состав и
              многое другое. Используйте удобные фильтры для точного поиска.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Карточка 2 - Избранное */}
        <Card className="relative h-[300px] overflow-hidden group flex flex-col justify-between">
          <div className="absolute inset-0 bg-[url('/images/CardInfoWatchList.avif')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/60" />
          <CardHeader className="relative z-2">
            <CardTitle className="text-white">Ваша коллекция</CardTitle>
          </CardHeader>
          <CardContent className="relative z-2">
            <CardDescription className="text-white">
              Создавайте персональную коллекцию фильмов. Сохраняйте
              понравившиеся фильмы, отмечайте просмотренные и составляйте список
              желаемого к просмотру. Ваша киноколлекция всегда под рукой.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Карточка 3 - Рекомендации */}
        <Card className="relative h-[300px] overflow-hidden group flex flex-col justify-between">
          <div className="absolute inset-0 bg-[url('/images/InfoSectionREcomendations.webp')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/60" />
          <CardHeader className="relative z-5">
            <CardTitle className="text-white">Умные рекомендации</CardTitle>
          </CardHeader>
          <CardContent className="relative z-5">
            <CardDescription className="text-white">
              Получайте персонализированные рекомендации фильмов на основе ваших
              интересов и предпочтений. Наша система анализирует ваши оценки и
              просмотры, чтобы предложить именно то, что вам понравится.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Карточка 4 - Поиск знаменитостей */}
        <Card className="relative h-[300px] overflow-hidden group flex flex-col justify-between">
          <div className="absolute inset-0 bg-[url('/images/InfoSectionCelebs.webp')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/60" />
          <CardHeader className="relative z-5">
            <CardTitle className="text-white">Мир знаменитостей</CardTitle>
          </CardHeader>
          <CardContent className="relative z-5">
            <CardDescription className="text-white">
              Узнайте больше о звездах киноиндустрии. Исследуйте биографии
              актеров, режиссеров и других деятелей кино. Просматривайте их
              фильмографию и следите за новыми проектами.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

interface Collection {
  slug: string;
  cover: {
    url: string;
    previewUrl: string;
  };
  createdAt: string;
  moviesCount: number;
  name: string;
  updatedAt: string;
  id: string;
}

function MoviesCollectionsSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["homepage-movies-collections"],
    queryFn: getMoviesCollections,
    staleTime: 1000 * 60 * 60 * 24,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError}</div>;

  return (
    <section className="w-full py-10 bg-components-background">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-10">Популярные Колекции Кино</h2>
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-4/5"
        >
          <CarouselContent className="w-full">
            {data.docs.map((colection: Collection, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Link to={`/collections/${colection.id}`}>
                    <Card className="relative h-[300px] overflow-hidden group flex flex-col justify-between">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${colection.cover.url})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-xl font-bold">
                          {colection.name}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function AccordionSection() {
  return (
    <section className="w-full py-10">
      <div className="w-1/2 mx-auto flex flex-col items-center justify-center">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Can I watch movies on this site?
            </AccordionTrigger>
            <AccordionContent>
              No, you can&apos;t watch movies on this site.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it full free?</AccordionTrigger>
            <AccordionContent>Yes, our site is full free.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Will this site help me to find a movie?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we are fully sure that our site will help you to find a movie
              for your mood.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

// top250 | popular-films | 100_greatest_movies_XXI | about_programmers | family_comedies | https://api.kinopoisk.dev/v1.4/list?page=1&limit=250&slug=top250&slug=popular-films&slug=100_greatest_movies_XXI&slug=about_programmers&slug=family_comedies
