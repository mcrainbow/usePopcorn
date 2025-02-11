import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HeaderNav from "./HeaderNav";
import { Heart } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isHomePageAndScrolled = isHomePage && isScrolled;
  const homePageClasses = `fixed w-full top-0 z-10 col-span-full px-4 py-2 transition-all duration-300 ${
    isScrolled ? "bg-components-background" : "bg-transparent"
  }`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        isHomePage
          ? homePageClasses
          : `sticky w-full top-0 z-10 col-span-full px-4 py-2 transition-all duration-300 bg-components-background`
      }
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`text-2xl font-bold transition-all duration-300 ${
              isHomePageAndScrolled ? "text-primary" : ""
            }`}
          >
            usePopcorn
          </Link>

          {isScrolled && isHomePage && <HeaderNav />}
          {!isHomePage && <HeaderNav />}

          <div className="flex items-center gap-4">
            <button>
              <Link to="/favourites">
                <Heart className="size-6 hover:text-primary transition-all duration-300" />
              </Link>
            </button>
            <Avatar className="size-10 bg-primary border border-primary">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
