import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Search from "@/components/layout/Search";
import { useState } from "react";

type SearchPageInputProps = {
  search: string | null;
  setSearch: (search: string | null) => void;
};

export default function SearchPageInput({
  search,
  setSearch,
}: SearchPageInputProps) {
  const [searchTerm, setSearchTerm] = useState(search ?? "");

  const handleSearch = () => {
    setSearch(searchTerm);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2 w-full border border-border rounded-full px-4 divide-x">
      <Search
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full"
      />

      <Button
        variant="outline"
        className="cursor-pointer"
        onClick={handleSearch}
      >
        <SearchIcon className="w-4 h-4" />
      </Button>
    </div>
  );
}
