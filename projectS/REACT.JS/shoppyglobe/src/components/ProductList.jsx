import { useMemo, useState } from "react";
import ProductItem from "./ProductItem";
import ProductCardSkeleton from "./shimmer/ProductCardSkeleton";
import useFetchProducts from "../hooks/useFetchProducts";

export default function ProductList() {
  const { data, loading, error, refetch } = useFetchProducts();
  const [query, setQuery] = useState("");

  const products = data?.products ?? [];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) =>
      [p.title, p.description, p.brand, p.category]
        .filter(Boolean)
        .some((v) => v.toLowerCase().includes(q))
    );
  }, [products, query]);

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 text-center">
        <p className="mb-4 text-red-600">Failed to load products.</p>
        <button
          onClick={refetch}
          className="rounded-xl border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-gray-300"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {loading ?
          Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        : filtered.map((p) => <ProductItem key={p.id} product={p} />)}
      </div>

      {!loading && filtered.length === 0 && (
        <div className="py-10 text-center text-sm text-gray-500">
          No products match “{query}”.
        </div>
      )}
    </div>
  );
}
