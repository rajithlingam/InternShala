
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../redux/cartSlice'

export default function Header() {
  const count = useSelector(selectCartCount)
  return (
    <header className="py-6 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">ShoppyGlobe</Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm">Products</Link>
          <Link to="/cart" className="text-sm">Cart <span className="ml-1 text-sm text-gray-500">({count})</span></Link>
        </nav>
      </div>
    </header>
  )
}
