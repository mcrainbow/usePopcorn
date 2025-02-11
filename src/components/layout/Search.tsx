import { cn } from "@/lib/utils";

interface SearchProps {
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Search({
  className,
  value,
  onChange,
  ...props
}: SearchProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search"
        className="w-full outline-none text-white placeholder:text-gray-300"
        {...props}
      />
    </div>
  );
}
