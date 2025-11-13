import React, { useEffect, useMemo, useState } from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import Shimmer from "./ui/Shimmer";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (active) setProducts(json.products || []);
      } catch (e) {
        if (active) setError(e.message || "Error");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const categories = useMemo(() => {
    const s = new Set(products.map((p) => p.category));
    return ["All", ...Array.from(s)];
  }, [products]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== "All")
      list = list.filter((p) => p.category === activeCategory);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) =>
        (p.title + " " + (p.description || "")).toLowerCase().includes(q)
      );
    }
    return list;
  }, [products, activeCategory, query]);

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  if (error)
    return (
      <div className="max-w-3xl mx-auto p-4 text-center text-red-600">
        {error}
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/4 bg-white/60 p-4 sm:p-6 rounded-xl shadow">
          <div className="flex gap-3 flex-col sm:flex-row items-stretch sm:items-center mb-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 px-3 py-2 rounded-md border"
            />
            <div className="flex gap-2 overflow-auto py-1">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${activeCategory === c ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {loading ?
            <Shimmer gridCount={6} />
          : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((p) => (
                <ProductItem key={p.id} product={p} />
              ))}
            </div>
          }

          {!loading && filtered.length === 0 && (
            <div className="text-gray-500 mt-4">No products found.</div>
          )}
        </div>

        <aside className="w-full lg:w-72">
          <div className="bg-white p-4 rounded-xl shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Shopping Cart</h3>
            </div>

            {cartItems.length === 0 ?
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            : <div className="space-y-2">
                {cartItems.map((it) => (
                  <div
                    key={it.id}
                    className="flex justify-between text-sm items-center"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="truncate font-medium">{it.title}</div>
                      <div className="text-xs text-gray-500">
                        Qty: {it.qty || 1}
                      </div>
                    </div>
                    <div className="pl-3 text-sm font-medium">
                      ${(it.price * (it.qty || 1)).toFixed(2)}
                    </div>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                  Total <span>${cartTotal.toFixed(2)}</span>
                </div>
                <Link
                  to="/cart"
                  className="block mt-3 text-center bg-blue-600 text-white py-2 rounded"
                >
                  View Cart
                </Link>
              </div>
            }
          </div>
        </aside>
      </div>
    </div>
  );
}
