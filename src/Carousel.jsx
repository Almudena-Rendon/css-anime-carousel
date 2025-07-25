import { useEffect, useState } from 'react'

const images = ['/Image-1.webp', '/Image-2.webp', '/Image-3.webp', '/Image-4.webp']

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images?.length)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const goToIndex = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="carousel-container">
      {images.map((src, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={src} alt={`Slide ${index}`} />
        </div>
      ))}

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Carousel
