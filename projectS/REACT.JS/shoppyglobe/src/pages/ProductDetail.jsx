import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Shimmer from "../components/ui/Shimmer";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const json = await res.json();
        if (active) setProduct(json);
      } catch (e) {
        if (active) setError(e.message || "Error fetching product");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  if (loading) return <Shimmer gridCount={1} />;

  if (error)
    return (
      <div className="max-w-3xl mx-auto p-6 text-center text-red-600">
        {error}
      </div>
    );

  if (!product)
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        Product not found.
      </div>
    );

  const { title, description, price, category, brand, images, rating, stock } =
    product;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-lg shadow">
        <div className="sm:w-1/2">
          {images && images.length > 0 ?
            <img
              src={images[0]}
              alt={title}
              className="w-full h-80 object-cover rounded"
              loading="lazy"
            />
          : <div className="w-full h-80 bg-gray-100 flex items-center justify-center">
              No image
            </div>
          }
        </div>

        <div className="flex-1 sm:w-1/2 flex flex-col">
          <h1 className="text-2xl font-semibold mb-2">{title}</h1>
          <div className="text-sm text-gray-500 mb-3">
            {category} • {brand}
          </div>
          <div className="text-lg font-bold mb-3">${price}</div>
          <div className="text-sm text-yellow-600 mb-3">
            Rating: {rating || "—"}
          </div>
          <p className="text-gray-700 mb-4">{description}</p>

          <div className="mt-auto flex gap-2">
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail,
                  })
                )
              }
              className="px-4 py-2 bg-green-500 text-white hover:bg-blue-500 rounded"
            >
              Add to cart
            </button>

            <Link to="/cart" className="px-4 py-2 border hover:bg-blue-500 hover:text-white rounded text-center">
              Go to cart
                      </Link>
                       <Link to="/" className="px-4 py-2 bg-yellow-400 text-white border rounded text-center">
              Go to Home
            </Link>
          </div>

          <div className="mt-3 text-xs text-gray-500">
            Stock: {stock ?? "—"}
          </div>
        </div>
      </div>
    </div>
  );
}
