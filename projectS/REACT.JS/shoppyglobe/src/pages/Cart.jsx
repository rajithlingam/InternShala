import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../components/CartItem'
import { selectCartItems, selectCartTotal, clearCart } from '../redux/cartSlice'

export default function Cart() {
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="mb-4 text-xl font-semibold">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-3">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="text-lg font-semibold">Total: ${total.toFixed(2)}</div>
            <div className="flex gap-3">
              <button
                onClick={() => dispatch(clearCart())}
                className="rounded-xl border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50"
              >
                Clear Cart
              </button>
              <a href="/checkout" className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">
                Checkout
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
