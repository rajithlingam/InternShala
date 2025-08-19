import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import ProductDetailSkeleton from '../components/shimmer/ProductDetailSkeleton'

export default function ProductDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        setLoading(true)
        setError('')
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        if (!res.ok) throw new Error('Failed to fetch product')
        const json = await res.json()
        if (active) setProduct(json)
      } catch (e) {
        if (active) setError(e.message || 'Error')
      } finally {
        if (active) setLoading(false)
      }
    })()
    return () => { active = false }
  }, [id])

  if (loading) return <ProductDetailSkeleton />

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 text-center">
        <p className="mb-4 text-red-600">Could not load product.</p>
        <Link
          to="/"
          className="rounded-xl border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50"
        >
          Go back
        </Link>
      </div>
    )
  }

  if (!product) return null

  const { title, images = [], description, brand, price, discountPercentage, rating, category } = product
  const img = images[0]

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-gray-100">
          <img src={img} alt={title} className="h-full w-full object-cover" />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            {brand && <span>Brand: {brand}</span>}
            {category && <span className="rounded-full border px-2 py-0.5">{category}</span>}
            {rating && <span>⭐ {rating}</span>}
          </div>

          <div className="mt-4 text-xl font-bold">
            ${price}
            {discountPercentage ? (
              <span className="ml-2 text-sm font-medium text-green-600">
                ({discountPercentage}% OFF)
              </span>
            ) : null}
          </div>

          <p className="mt-4 text-sm text-gray-700">{description}</p>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="rounded-2xl border border-gray-200 px-5 py-3 text-sm font-medium hover:bg-gray-50"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
