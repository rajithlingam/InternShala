import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Shimmer from "./components/ui/Shimmer";

const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Suspense fallback={<Shimmer gridCount={6} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
