import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-gray-600">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 inline-block rounded-xl border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">Go Home</Link>
    </div>
  )
}
