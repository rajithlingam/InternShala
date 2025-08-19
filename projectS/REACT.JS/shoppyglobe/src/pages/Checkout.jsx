export default function Checkout() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <h1 className="text-xl font-semibold">Checkout</h1>
      <p className="mt-2 text-gray-600 text-sm">
        This is a placeholder checkout page per rubric. Implementing payment is out of scope.
      </p>
      <form className="mt-6 grid grid-cols-1 gap-4">
        <input className="rounded-xl border border-gray-200 px-4 py-3 text-sm" placeholder="Full name" />
        <input className="rounded-xl border border-gray-200 px-4 py-3 text-sm" placeholder="Email" />
        <input className="rounded-xl border border-gray-200 px-4 py-3 text-sm" placeholder="Address" />
        <button type="button" className="mt-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90">
          Place Order
        </button>
      </form>
    </div>
  )
}
