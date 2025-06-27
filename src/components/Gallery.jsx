'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import '../styles/Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleImages, setVisibleImages] = useState(9) // Changed to 9 (3 rows)
  const [loadMoreLoading, setLoadMoreLoading] = useState(false)

  const galleryRef = useRef(null)
  const isInView = useInView(galleryRef, { once: false, threshold: 0.1 })

  // Generate image data for 44 images
  const images = Array.from({ length: 44 }, (_, i) => ({
    id: i + 1,
    src: `/images/image${i + 1}.jpg`,
    alt: `Interior Design Project ${i + 1}`,
    category: ['residential', 'commercial', 'kitchen', 'bathroom', 'living'][
      Math.floor(Math.random() * 5)
    ],
    title: [
      'Modern Living Space',
      'Luxury Kitchen Design',
      'Contemporary Bedroom',
      'Office Interior',
      'Bathroom Makeover',
      'Restaurant Design',
      'Minimalist Apartment',
      'Classic Villa Interior',
    ][Math.floor(Math.random() * 8)],
  }))

  const filters = [{ id: 'all', label: 'All Projects' }]

  const filteredImages =
    activeFilter === 'all'
      ? images
      : images.filter((img) => img.category === activeFilter)

  const displayedImages = filteredImages.slice(0, visibleImages)

  const loadMore = async () => {
    if (loadMoreLoading) return

    setLoadMoreLoading(true)

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Load 9 more images (3 more rows)
    setVisibleImages((prev) => Math.min(prev + 9, filteredImages.length))
    setLoadMoreLoading(false)
  }

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="gallery" className="gallery-section" ref={galleryRef}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Gallery Icon Container */}
          <motion.div
            className="gallery-icon-container"
            animate={{
              rotateY: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="gallery-icon">
              <img
                src="https://img.icons8.com/fluency/96/8b5cf6/gallery.png"
                alt="Gallery"
                width="45"
                height="45"
              />
            </div>
          </motion.div>

          <motion.div
            className="gallery-title-underline"
            initial={{ width: 0, opacity: 0 }}
            animate={
              isInView
                ? { width: '120px', opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="gallery-underline-dot"
              animate={{
                x: [-60, 60, -60],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Gallery
          </motion.span>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Inspiring Spaces, Endless Possibilities
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover a stunning collection of our latest interior design
            projects. Each space tells a unique story of style, comfort, and
            innovation.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="gallery-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? 'active' : ''
              }`}
              onClick={() => {
                setActiveFilter(filter.id)
                setVisibleImages(9) // Reset to 9 images (3 rows)
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="gallery-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <AnimatePresence>
            {displayedImages.map((image, index) => (
              <motion.div
                key={`${activeFilter}-${image.id}`}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: loadMoreLoading ? 0 : index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -10 }}
                onClick={() => openLightbox(image)}
              >
                <div className="image-wrapper">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <motion.div
                        className="zoom-icon"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.35-4.35" />
                          <path d="M11 8v6" />
                          <path d="M8 11h6" />
                        </svg>
                      </motion.div>
                      <h3>{image.title}</h3>
                      <p className="image-category">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button with Loader */}
        {visibleImages < filteredImages.length && (
          <motion.div
            className="gallery-load-more"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <AnimatePresence mode="wait">
              {loadMoreLoading ? (
                <motion.div
                  key="loader"
                  className="load-more-loader"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="load-more-spinner"></div>
                  <p>Loading more projects...</p>
                </motion.div>
              ) : (
                <motion.button
                  key="button"
                  className="load-more-btn"
                  onClick={loadMore}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={loadMoreLoading}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  Load More Projects
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14" />
                    <path d="M19 12l-7 7-7-7" />
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Gallery Stats */}
        <motion.div
          className="gallery-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="stat-item">
            <motion.h3
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {filteredImages.length}+
            </motion.h3>
            <p>Completed Projects</p>
          </div>
          <div className="stat-item">
            <motion.h3
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              100%
            </motion.h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-item">
            <motion.h3
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              5+
            </motion.h3>
            <p>Years Experience</p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
