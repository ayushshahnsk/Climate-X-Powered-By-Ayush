"use client";
import { useState } from "react";

interface Props {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState("");

  return (
    <div>
      <input
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(city)}
      />
      <button onClick={() => onSearch(city)}>Search</button>
    </div>
  );
}