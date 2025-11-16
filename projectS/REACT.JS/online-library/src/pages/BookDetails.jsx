import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FALLBACK =
  "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.list.find((b) => String(b.id) === String(id))
  );

  if (!book) return <p>Book not found</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <img
        src={book.imageUrl || FALLBACK}
        alt={book.title}
        className="w-full h-56 object-cover rounded-lg mb-4"
        onError={(e) => {
          e.currentTarget.src = FALLBACK;
        }}
      />
      <h1 className="text-2xl font-bold mb-1">{book.title}</h1>
      <p className="text-gray-600 mb-2">by {book.author}</p>
      <p className="inline-block text-xs bg-gray-100 rounded px-2 py-1 mb-4">
        {book.category}
      </p>
      <p className="mt-2 leading-relaxed">{book.description}</p>
      <p className="mt-3">⭐ {book.rating}</p>
      <Link
        to={`/books/${encodeURIComponent(book.category)}`}
        className="mt-5 inline-block text-blue-600 hover:underline"
      >
        ← Back to Browse
      </Link>
    </div>
  );
}
