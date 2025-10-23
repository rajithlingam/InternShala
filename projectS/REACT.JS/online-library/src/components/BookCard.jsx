import { Link } from "react-router-dom";

const FALLBACK =
  "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib"; // fallback book icon

export default function BookCard({ book }) {
  const cover = book?.imageUrl || FALLBACK;

  const handleImgError = (e) => {
    if (!e?.currentTarget) return;
    const cur = e.currentTarget;
    // prevent infinite error loop
    if (cur.src !== FALLBACK) cur.src = FALLBACK;
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <img
        src={cover}
        alt={book?.title || "Book cover"}
        className="w-full h-40 object-cover rounded-md mb-3"
        onError={handleImgError}
        loading="lazy"
      />
      <h2 className="font-bold text-lg">{book?.title}</h2>
      <p className="text-sm text-gray-600">by {book?.author}</p>
      <p className="text-xs text-gray-500 mt-1">{book?.category}</p>
      <p className="mt-2 text-gray-700">⭐ {book?.rating}</p>
      <Link
        to={`/book/${book?.id}`}
        className="mt-3 inline-block text-blue-600 hover:underline bg-yellow-400 p-1 rounded-r-xl"
      >
        View Details
      </Link>
    </div>
  );
}
