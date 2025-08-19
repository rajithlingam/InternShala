import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../redux/cartSlice'

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M2 3h2l.4 2M7 13h10l3-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M9 22a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"/>
    </svg>
  )
}

export default function Header() {
  const count = useSelector(selectCartCount)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-semibold">ShoppyGlobe</Link>

        <nav className="hidden gap-6 text-sm sm:flex">
          <NavLink to="/" className={({isActive}) => isActive ? 'font-medium underline' : 'hover:underline'}>Home</NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive ? 'font-medium underline' : 'hover:underline'}>Cart</NavLink>
          <NavLink to="/checkout" className={({isActive}) => isActive ? 'font-medium underline' : 'hover:underline'}>Checkout</NavLink>
        </nav>

        <Link to="/cart" className="relative inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
          <CartIcon />
          <span className="hidden sm:inline">Cart</span>
          <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-black px-1 text-xs font-semibold text-white">{count}</span>
        </Link>
      </div>
    </header>
  )
}
