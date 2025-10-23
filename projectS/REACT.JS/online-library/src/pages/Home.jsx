import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../data/categories";
import BookCard from "../components/BookCard";
import { useMemo, useRef, useEffect } from "react";

/**
 * Home.jsx — Category buttons as a horizontal carousel + Popular hero carousel
 * - Category buttons are a carousel with prev/next arrows and smooth scrolling
 * - Removed the lower "By Category" section
 */

export default function Home() {
  const books = useSelector((s) => s.books.list || []);
  const popular = useMemo(
    () => [...books].sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, 8),
    [books]
  );

  // refs
  const heroRef = useRef(null);
  const catRef = useRef(null);

  // helper that scrolls by a number of cards (uses first card width)
  const scrollByCards = (el, multiplier = 2) => {
    if (!el) return;
    const card = el.querySelector(".carousel-card") || el.querySelector(".category-pill");
    const cardWidth = card ? card.offsetWidth : 280;
    const gap = 16;
    const amount = (cardWidth + gap) * multiplier;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  // hero controls + autoplay
  const scrollHero = (dir = "next") => {
    const el = heroRef.current;
    if (!el) return;
    scrollByCards(el, dir === "next" ? 2 : -2);
  };
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const id = setInterval(() => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCards(el, 1);
      }
    }, 3500);
    return () => clearInterval(id);
  }, [popular]);

  // category carousel controls (scroll by viewport width)
  const scrollCategories = (dir = "next") => {
    const el = catRef.current;
    if (!el) return;
    const page = el.clientWidth;
    el.scrollBy({ left: dir === "next" ? page : -page, behavior: "smooth" });
  };

  // jump to categories (scroll into view)
  const scrollToCategories = () => {
    document.getElementById("categories-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-4 md:p-6">
      {/* Hero / Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
            alt="Library shelves"
            className="w-full h-40 sm:h-56 md:h-64 object-cover"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Welcome to the Online Library</h1>
            <p className="text-gray-600 mt-1">Explore books across multiple genres.</p>
          </div>

          
        </div>
      </div>

      {/* ===== Category buttons as a horizontal carousel ===== */}
      <div className="max-w-6xl mx-auto mb-8 relative">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Categories</h2>
          <div className="flex gap-2">
            <button
              aria-label="Prev categories"
              onClick={() => scrollCategories("prev")}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
            >
              ‹
            </button>
            <button
              aria-label="Next categories"
              onClick={() => scrollCategories("next")}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={catRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar py-2 px-1"
          style={{ scrollSnapType: "x mandatory" }}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") scrollCategories("next");
            if (e.key === "ArrowLeft") scrollCategories("prev");
          }}
        >
          {categories.map((c) => (
            <Link
              key={c}
              to={`/books/${encodeURIComponent(c)}`}
              className="category-pill snap-center flex-shrink-0 py-3 px-6 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition text-center whitespace-nowrap"
            >
              {c}
            </Link>
          ))}
        </div>
      </div>

      {/* Popular hero carousel with overlay nav */}
      <div className="max-w-6xl mx-auto mb-10 relative" id="categories-section">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Popular Books</h2>

        <div className="relative">
          <button
            onClick={() => scrollHero("prev")}
            aria-label="Previous popular"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            ‹
          </button>

          <div
            ref={heroRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar py-2 px-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {popular.length ? (
              popular.map((b) => (
                <div key={b.id} className="carousel-card snap-center flex-shrink-0 w-64 md:w-72 lg:w-80">
                  <BookCard book={b} />
                </div>
              ))
            ) : (
              <div className="text-gray-500 px-4">No popular books yet.</div>
            )}
          </div>

          <button
            onClick={() => scrollHero("next")}
            aria-label="Next popular"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
