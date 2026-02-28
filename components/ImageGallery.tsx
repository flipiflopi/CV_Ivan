'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  images: string[]
  title: string
  galleryLayout: 'columns' | 'stack'
}

export default function ImageGallery({ images, title, galleryLayout }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % images.length))
  }, [images.length])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    )
  }, [images.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, closeLightbox, goNext, goPrev])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <>
      {/* COLUMNS: capturas de móvil en portrait */}
      {galleryLayout === 'columns' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="relative rounded-2xl overflow-hidden bg-gray-100 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-gray-300 group"
              style={{ aspectRatio: '9 / 19' }}
              aria-label={`Ampliar pantalla ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${title} pantalla ${i + 1}`}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={90}
                priority={i === 0}
              />
            </button>
          ))}
        </div>
      )}

      {/* STACK: imágenes apiladas full-width */}
      {galleryLayout === 'stack' && (
        <div className="flex flex-col gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="relative aspect-video rounded-2xl overflow-hidden cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-gray-300 group"
              aria-label={`Ampliar imagen ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${title} ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 768px"
                quality={90}
                priority={i === 0}
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Cerrar */}
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navegación */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                aria-label="Anterior"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                className="absolute right-16 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); goNext() }}
                aria-label="Siguiente"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}

          {/* Imagen ampliada */}
          <div
            className="relative w-full h-[90vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${title} ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
              priority
            />
          </div>

          {/* Contador */}
          {images.length > 1 && (
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tabular-nums">
              {lightboxIndex + 1} / {images.length}
            </p>
          )}
        </div>
      )}
    </>
  )
}
