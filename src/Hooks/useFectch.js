import { useEffect, useState } from 'react'

const useFectch = (url) => {
  const [customer, setCustomer] = useState('')
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState('')

  useEffect(() => {
    const abortC = new AbortController()

    fetch(url, { signal: abortC.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch')
        }
        return res.json()
      })
      .then((data) => {
        setCustomer(data.data)
        setLoading(false)
        setErrors('')
      })
      .catch((err) => {
        if (err === 'AbortError') {
          setErrors('fetch aborted')
        }
        setErrors(err.message)
        setLoading(false)
      })
  }, [url])

  return { customer, loading, errors }
}

export default useFectch
