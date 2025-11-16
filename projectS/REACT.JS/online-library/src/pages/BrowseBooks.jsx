import { useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { categories as ALL_CATEGORIES } from "../data/categories";
import BookCard from "../components/BookCard";

export default function BrowseBooks() {
  const { category: routeCategory } = useParams();
  const books = useSelector((state) => state.books.list);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(routeCategory || "All");

  useEffect(() => {
    setCategory(routeCategory || "All");
  }, [routeCategory]);

  const categories = useMemo(() => ["All", ...ALL_CATEGORIES], []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return books.filter((b) => {
      const matchSearch =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q);
      const matchCat =
        category === "All" ||
        (b.category || "").toLowerCase() === category.toLowerCase();
      return matchSearch && matchCat;
    });
  }, [books, search, category]);

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Browse {category === "All" ? "All" : category} Books
      </h2>

      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <input
          type="text"
          placeholder="Search by title or author…"
          className="border rounded px-3 py-2 w-full sm:max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border rounded px-3 py-2 w-full sm:w-56"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {filtered.length ?
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      : <p className="text-gray-600">No books found.</p>}

      <div className="mt-6 sm:hidden">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back Home
        </Link>
      </div>
    </div>
  );
}
