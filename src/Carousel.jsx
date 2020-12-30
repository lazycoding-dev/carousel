import React from 'react'
import './Carousel.css'

export const Carousel = ({ images = [], width = 800, height = 600, delay = 5000 }) => {
  const [idx, setIdx] = React.useState(0)

  React.useEffect(() => {
    // Prefetch images.
    images.forEach(i => new Image().src = i)

    const interval = setInterval(() => setIdx(i => i === images.length - 1 ? 0 : i + 1), delay)
    return () => clearInterval(interval)
  }, [images, delay])

  if (!images.length) return null

  return (
    <div className='carousel' style={{ width, height }}>
      <img className='carousel__img' style={{ animationDuration: `${delay / 1000}s` }} src={images[idx]} alt={`slide${idx}`} />
    </div>
  )
}