import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../data/categories";
import BookCard from "../components/BookCard";

export default function Home() {
  const books = useSelector((s) => s.books.list);
  const popular = [...books].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <div className="p-4 md:p-6">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
          alt="Library shelves"
          className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-xl mb-4"
        />
        <h1 className="text-2xl md:text-3xl font-bold">Welcome to the Online Library</h1>
        <p className="text-gray-600 mt-2">Explore books across multiple genres.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
        {categories.map((c) => (
          <Link key={c} to={`/books/${encodeURIComponent(c)}`}
            className="bg-blue-500 text-white rounded-lg py-3 px-4 text-center hover:bg-blue-600 transition text-sm sm:text-base">
            {c}
          </Link>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Popular Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popular.map((b) => <BookCard key={b.id} book={b} />)}
        </div>
      </div>
    </div>
  );
}
