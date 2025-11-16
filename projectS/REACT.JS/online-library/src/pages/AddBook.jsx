import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories";

export default function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: categories[0],
    description: "",
    rating: "",
    imageUrl: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, category, description, rating } = form;
    if (!title || !author || !category || !description || rating === "") {
      setError("All fields are required.");
      return;
    }
    const r = parseFloat(rating);
    if (isNaN(r) || r < 0 || r > 5) {
      setError("Rating must be a number between 0 and 5.");
      return;
    }
    dispatch(addBook({ ...form, rating: r }));
    navigate(`/books/${encodeURIComponent(category)}`);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      {error && <p className="text-red-600 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full rounded"
          placeholder="Title"
          value={form.title}
          onChange={onChange("title")}
        />
        <input
          className="border p-2 w-full rounded"
          placeholder="Author"
          value={form.author}
          onChange={onChange("author")}
        />
        <select
          className="border p-2 w-full rounded"
          value={form.category}
          onChange={onChange("category")}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <textarea
          className="border p-2 w-full rounded min-h-28"
          placeholder="Description"
          value={form.description}
          onChange={onChange("description")}
        />
        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          className="border p-2 w-full rounded"
          placeholder="Rating (0–5)"
          value={form.rating}
          onChange={onChange("rating")}
        />
        <input
          type="url"
          className="border p-2 w-full rounded"
          placeholder="Image URL (optional)"
          value={form.imageUrl}
          onChange={onChange("imageUrl")}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
