import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export default function ProductItem({ product }) {
  const dispatch = useDispatch()
  const { id, title, thumbnail, price } = product

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <Link to={`/product/${id}`}>
        <img src={thumbnail} alt={title} className="aspect-square w-full rounded-xl object-cover" />
      </Link>
      <div className="mt-3">
        <Link to={`/product/${id}`} className="font-medium hover:underline line-clamp-1">{title}</Link>
        <p className="mt-1 text-sm text-gray-500">${price}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-3 w-full rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
}
