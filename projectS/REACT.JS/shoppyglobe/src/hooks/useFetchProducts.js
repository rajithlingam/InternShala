import { useCallback, useEffect, useState } from 'react'

// Custom hook to fetch product list with simple sessionStorage cache
export default function useFetchProducts() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError('')
      const res = await fetch('https://dummyjson.com/products')
      if (!res.ok) throw new Error('Failed to fetch products')
      const json = await res.json()
      sessionStorage.setItem('products_cache', JSON.stringify({ ts: Date.now(), payload: json }))
      setData(json)
    } catch (e) {
      setError(e.message || 'Error')
    } finally {
      setLoading(false)
    }
  }, [])

  const refetch = useCallback(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    const cacheRaw = sessionStorage.getItem('products_cache')
    if (cacheRaw) {
      try {
        const { ts, payload } = JSON.parse(cacheRaw)
        // 10 minutes cache
        if (Date.now() - ts < 10 * 60 * 1000) {
          setData(payload)
          setLoading(false)
          return
        }
      } catch {}
    }
    fetchData()
  }, [fetchData])

  return { data, loading, error, refetch }
}
