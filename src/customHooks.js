import { useEffect, useRef } from 'react'

export default function useKey(key, cb) {
  const callbackRef = useRef(cb)

  useEffect(() => {
    callbackRef.current = cb
  })

  useEffect(() => {
    debugger
    function handle(event) {
      if (event.code === key) {
        callbackRef.current(event)
      }
    }

    document.addEventListener('keypress', handle)
    return () => {
      document.removeEventListener('keypress', handle)
    }
  }, [key])
}
