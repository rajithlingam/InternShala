import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">
          📚 Online Library
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="hover:text-blue-300"
            >
              Categories ⬇️
            </button>
            {open && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-56 z-20 max-h-80 overflow-auto">
                <Link
                  to="/books"
                  className="block px-4 py-2 hover:bg-gray-100 font-medium"
                  onClick={() => setOpen(false)}
                >
                  Browse All
                </Link>
                <div className="border-t my-1" />
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/books/${encodeURIComponent(category)}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/add" className="hover:text-blue-300">
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
}
