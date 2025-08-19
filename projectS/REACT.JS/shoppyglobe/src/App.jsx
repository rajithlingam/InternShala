import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NotFound from './components/NotFound'
import Skeleton from './components/ui/Skeleton'

const Home = lazy(() => import('./pages/Home'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="mb-4">
              <Skeleton className="h-8 w-40" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 p-4 shadow-sm">
                  <Skeleton className="mb-3 aspect-square w-full rounded-xl" />
                  <Skeleton className="mb-2 h-5 w-3/4" />
                  <Skeleton className="mb-1 h-4 w-1/2" />
                  <Skeleton className="h-10 w-24 rounded-xl" />
                </div>
              ))}
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}
