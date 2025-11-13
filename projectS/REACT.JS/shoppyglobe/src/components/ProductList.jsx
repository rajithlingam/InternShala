
import React, { useMemo, useState } from 'react'
import ProductItem from './ProductItem'
import useFetchProducts from '../hooks/useFetchProducts'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

export default function ProductList() {
  const { data, loading, error, refetch } = useFetchProducts()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const products = data?.products ?? []
  const categories = useMemo(() => {
    const set = new Set(products.map(p => p.category).filter(Boolean))
    return ['All', ...Array.from(set)]
  }, [products])

  const filtered = useMemo(() => {
    let list = products
    if (activeCategory !== 'All') list = list.filter(p => p.category === activeCategory)
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(p =>
        (p.title + ' ' + (p.description || '')).toLowerCase().includes(q)
      )
    }
    return list
  }, [products, activeCategory, query])

  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  if (error) {
    return (
      <div className="mx-auto max-w-4xl p-6 text-center">
        <p className="text-red-600">Failed to load products.</p>
        <button onClick={refetch} className="mt-3 border px-3 py-1 rounded">Retry</button>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-semibold text-center mb-8">Dynamic Product Filter & Cart</h1>

        <div className="flex gap-8">

          <div className="w-full lg:w-3/4 card-bg p-6 rounded-2xl shadow-md">
            <div className="mb-4 flex items-center justify-between gap-4">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full border border-transparent bg-white px-3 py-2 rounded-md shadow-sm focus:outline-none"
              />
            </div>

            <div className="mb-4 flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1 rounded-full text-sm font-medium border ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-48 rounded-2xl bg-white animate-pulse" />
                ))}
              </div>
            ) : (
              <>
                {filtered.length === 0 ? (
                  <div className="text-sm text-gray-600">No products found.</div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map(p => <ProductItem key={p.id} product={p} />)}
                  </div>
                )}
              </>
            )}
          </div>


          <aside className="w-72">
            <div className="bg-white p-5 rounded-2xl shadow-xl">
              <h3 className="font-semibold text-lg mb-3">Shopping Cart</h3>
              <div className="divide-y">
                {cartItems.length === 0 ? (
                  <p className="text-sm text-gray-500">Your cart is empty.</p>
                ) : (
                  cartItems.map(it => (
                    <div key={it.id} className="py-2 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-sm font-medium line-clamp-1">{it.title}</div>
                        <div className="text-xs text-gray-500">Qty: {it.qty}</div>
                      </div>
                      <div className="text-sm font-medium">${(it.price * it.qty).toFixed(2)}</div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-4 border-t pt-3 flex items-center justify-between">
                <div className="text-sm text-gray-600">Total</div>
                <div className="text-lg font-semibold">${cartTotal.toFixed(2)}</div>
              </div>

              <div className="mt-4 flex gap-2">
                <Link to="/cart" className="flex-1 text-center py-2 rounded-md bg-blue-600 text-white">View Cart</Link>
                <Link to="/checkout" className="flex-1 text-center py-2 rounded-md border">Checkout</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
