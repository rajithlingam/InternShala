import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateQty } from '../redux/cartSlice'

export default function CartItem({ item }) {
  const dispatch = useDispatch()

  const dec = () => dispatch(updateQty({ id: item.id, qty: Math.max(1, item.qty - 1) }))
  const inc = () => dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))

  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
      <img src={item.thumbnail} alt={item.title} className="h-16 w-16 rounded-lg object-cover" />
      <div className="flex-1">
        <div className="font-medium line-clamp-1">{item.title}</div>
        <div className="text-sm text-gray-500">${item.price}</div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={dec} className="h-8 w-8 rounded-lg border border-gray-200">-</button>
        <span className="w-8 text-center text-sm">{item.qty}</span>
        <button onClick={inc} className="h-8 w-8 rounded-lg border border-gray-200">+</button>
      </div>

      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="ml-3 rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
      >
        Remove
      </button>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
  }).isRequired,
}
