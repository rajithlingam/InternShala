// src/components/ui/Shimmer.jsx
import React from 'react'

export default function Shimmer({ gridCount = 6 }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Loading…</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: gridCount }).map((_, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow animate-pulse">
            <div className="h-36 bg-gray-200 rounded mb-3" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}
