// src/components/Cart.jsx
import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice'

export default function Cart() {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const total = items.reduce((s, i) => s + i.price * (i.qty || 1), 0)

  // Vite-friendly static import for assets in src/
  const successVideoUrl = new URL('../assets/Order_Placed_Success.mp4', import.meta.url).href

  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef(null)

  const handleAdd = (item) => {
    dispatch(addToCart(item))
  }

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleClear = () => {
    dispatch(clearCart())
  }

  const handlePlaceOrder = () => {
    // show video overlay; cart will be cleared when video ends or when user closes
    setShowVideo(true)

    // autoplay guard: try to play programmatically (some browsers require user gesture; it should play since click triggered)
    setTimeout(() => {
      try {
        videoRef.current?.play()
      } catch (e) {
        // ignore
      }
    }, 50)
  }

  const handleVideoEndOrClose = () => {
    // hide overlay then clear cart
    setShowVideo(false)
    dispatch(clearCart())
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-3">
            {items.map((it) => (
              <div key={it.id} className="flex items-center justify-between p-3 border rounded">
                <div className="min-w-0">
                  <div className="font-medium truncate">{it.title}</div>
                  <div className="text-sm text-gray-500">${it.price} x {it.qty || 1}</div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  {/* Add button (increase qty) */}
                  <button
                    onClick={() => handleAdd(it)}
                    className="px-3 py-1 bg-green-500 text-white rounded text-sm"
                  >
                    Add
                  </button>

                  {/* Remove button */}
                  <button
                    onClick={() => handleRemove(it.id)}
                    className="px-3 py-1 border rounded text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="font-bold">Total <span className="ml-2">${total.toFixed(2)}</span></div>

            <div className="flex gap-2">
              <button
                onClick={handleClear}
                className="px-4 py-2 border rounded bg-white"
              >
                Clear Cart
              </button>

              <button
                onClick={handlePlaceOrder}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Place your favourite order
              </button>
            </div>
          </div>
        </>
      )}

      {/* Video overlay */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          role="dialog"
          aria-modal="true"
          onClick={() => {
            // clicking overlay also closes and clears
            handleVideoEndOrClose()
          }}
        >
          <div
            className="relative"
            onClick={(e) => {
              // prevent overlay click from closing when clicking the video container
              e.stopPropagation()
            }}
          >
            {/* Close button */}
            <button
              onClick={handleVideoEndOrClose}
              className="absolute -top-6 -right-6 bg-white rounded-full p-2 shadow"
              aria-label="Close"
            >
              ✕
            </button>

            <video
              ref={videoRef}
              src={successVideoUrl}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEndOrClose}
              style={{
                height: '13vh',
                width: 'auto',
                display: 'block',
                borderRadius: 8,
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
