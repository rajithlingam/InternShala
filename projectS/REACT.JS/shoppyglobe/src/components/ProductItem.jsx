import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export default function ProductItem({ product }) {
  const dispatch = useDispatch()
  const { id, title, thumbnail, price } = product

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
      <Link to={`/product/${id}`} className="block h-40 overflow-hidden">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No Image</div>
        )}
      </Link>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-sm font-medium mb-1 line-clamp-2">{title}</div>
          <div className="text-xs text-gray-500">${price}</div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="px-3 py-1 rounded-full text-sm bg-green-500 text-white shadow-sm"
          >
            Add to Cart
          </button>
          <Link to={`/product/${id}`} className="text-xs text-blue-600">Details</Link>
        </div>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
}
