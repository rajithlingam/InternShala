import { Link } from "react-router-dom";
const FALLBACK = "/images/default-book.jpg";

export default function BookCard({ book }) {
  const cover = book.imageUrl || FALLBACK;

  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <img
        src={cover}
        alt={book.title}
        className="w-full h-40 object-cover rounded-md mb-3"
        onError={(e) => {
          e.currentTarget.src = FALLBACK;
        }}
        loading="lazy"
      />
      <h2 className="font-bold text-lg">{book.title}</h2>
      <p className="text-sm text-gray-600">by {book.author}</p>
      <p className="text-xs text-gray-500 mt-1">{book.category}</p>
      <p className="mt-2 text-gray-700">⭐ {book.rating}</p>
      <Link
        to={`/book/${book.id}`}
        className="mt-3 inline-block text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
