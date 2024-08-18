import React from "react";

export default function ToggleButton({ isOpen, onOpen }) {
  return (
    <button
      className="absolute top-[0.8rem] right-[0.8rem] h-[2.4rem] [aspect-ratio:1] rounded-full border-none bg-background-900 text-text text-[1.4rem] text-bold cursor-pointer z-999"
      onClick={() => onOpen((open) => !open)}
    >
      {isOpen ? "–" : "+"}
    </button>
  );
}
