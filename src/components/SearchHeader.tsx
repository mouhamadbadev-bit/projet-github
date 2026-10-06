// src/components/SearchHeader.tsx
import { useState,type FormEvent } from 'react';

interface SearchHeaderProps {
  onSearch: (username: string) => void;
}

export default function SearchHeader({ onSearch }: SearchHeaderProps) {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onSearch(inputVal.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 my-6">
      <input
        type="text"
        placeholder="Rechercher un utilisateur GitHub..."
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        className="px-4 py-2 w-80 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Rechercher
      </button>
    </form>
  );
}