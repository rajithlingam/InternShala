// src/components/Header.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../redux/cartSlice'

export default function Header() {
  const count = useSelector(selectCartCount)

  return (
    <header className="bg-white/85 backdrop-blur sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">ShoppyGlobe</Link>

        <nav className="flex items-center gap-3 text-sm">
          <Link to="/" className="px-3 py-2 rounded hover:bg-gray-100">Products</Link>
          <Link to="/cart" className="px-3 py-2 rounded hover:bg-gray-100">
            Cart <span className="ml-1 text-gray-500">({count})</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
