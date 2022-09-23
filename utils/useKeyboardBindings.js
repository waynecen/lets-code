import { useEffect } from 'react'

export default function useKeyboardBindings(spriteMap) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const handler = spriteMap[e.key]

      if (typeof handler === 'function') {
        handler()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [spriteMap])
}
