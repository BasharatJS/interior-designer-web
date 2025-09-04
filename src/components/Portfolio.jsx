'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import '../styles/Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [portfolioItems, setPortfolioItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterLoading, setFilterLoading] = useState(false) // New state for filter loading
  const [error, setError] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.2 })

  // Your NoCodeAPI endpoint
  const NOCODEAPI_ENDPOINT =
    'https://v1.nocodeapi.com/datascientist/google_sheets/tzmbVnoOLnurWsht?tabId=interior-designer'

  const filterOptions = [
    { id: 'all', label: 'Recent Projects', icon: '🏠' },
    { id: 'living-room', label: 'Living Room', icon: '🛋️' },
    { id: 'kitchen', label: 'Kitchen', icon: '🍳' },
    { id: 'bedroom', label: 'Bedroom', icon: '🛏️' },
    { id: 'office', label: 'Office Space', icon: '💼' },
  ]

  // Fallback data in case API fails
  const fallbackData = [
    {
      id: 1,
      title: 'Modern Minimalist Living',
      category: 'living-room',
      description: 'Clean lines and neutral tones create a serene atmosphere',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      client: 'The Sharma Family',
      year: '2024',
      area: '450 sq ft',
    },
    {
      id: 2,
      title: 'Luxury Contemporary Lounge',
      category: 'living-room',
      description: 'Rich textures and bold accents for sophisticated living',
      image:
        'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&h=400&fit=crop',
      client: 'Urban Heights Apartment',
      year: '2024',
      area: '650 sq ft',
    },
    {
      id: 3,
      title: 'Gourmet Chef Kitchen',
      category: 'kitchen',
      description: 'Professional-grade appliances meet elegant design',
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      client: 'Culinary Expert Home',
      year: '2024',
      area: '320 sq ft',
    },
    {
      id: 4,
      title: 'Master Bedroom Suite',
      category: 'bedroom',
      description: 'Luxurious retreat with spa-like ensuite',
      image:
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop',
      client: 'Villa Project',
      year: '2023',
      area: '280 sq ft',
    },
    {
      id: 5,
      title: 'Executive Office Suite',
      category: 'office',
      description: 'Sophisticated workspace that commands respect',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      client: 'Corporate Headquarters',
      year: '2024',
      area: '400 sq ft',
    },
  ]

  // Fetch data from Google Sheets via NoCodeAPI
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true)
        setError(null)

        console.log('Fetching data from:', NOCODEAPI_ENDPOINT)

        const response = await fetch(NOCODEAPI_ENDPOINT, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        console.log('Response status:', response.status)

        if (!response.ok) {
          throw new Error(
            `API Error: ${response.status} - ${response.statusText}`
          )
        }

        const result = await response.json()
        console.log('API Response:', result)

        // Check if data exists and is an array
        if (!result.data || !Array.isArray(result.data)) {
          throw new Error('Invalid data format received from API')
        }

        // Transform the Google Sheets data to match your component structure
        const transformedData = result.data
          .filter((item) => item.id && item.title) // Filter out empty rows
          .map((item) => ({
            id: parseInt(item.id) || Math.random(),
            title: item.title || 'Untitled Project',
            category: item.category || 'living-room',
            description: item.description || 'No description available',
            image:
              item.image ||
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
            client: item.client || 'Client Name',
            year: item.year || '2024',
            area: item.area || 'N/A',
          }))

        console.log('Transformed data:', transformedData)

        if (transformedData.length === 0) {
          throw new Error('No valid portfolio items found in the sheet')
        }

        setPortfolioItems(transformedData)
        console.log('Portfolio items set successfully!')
      } catch (err) {
        console.error('Error fetching portfolio data:', err)
        setError(`Failed to load portfolio data: ${err.message}`)

        // Use fallback data if API fails
        console.log('Using fallback data...')
        setPortfolioItems(fallbackData)
      } finally {
        setLoading(false)
      }
    }

    fetchPortfolioData()
  }, [])

  // Handle filter change with loading simulation
  const handleFilterChange = async (filterId) => {
    if (filterId === activeFilter || filterLoading) return

    setFilterLoading(true)

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800))

    setActiveFilter(filterId)
    setFilterLoading(false)
  }

  // Filter items based on active filter
  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  // Loading component for initial load
  const LoadingGrid = () => (
    <div className="portfolio-grid">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="portfolio-card loading-card">
          <div className="loading-image">
            <div className="loading-shimmer"></div>
          </div>
          <div className="loading-content">
            <div className="loading-title"></div>
            <div className="loading-description"></div>
          </div>
        </div>
      ))}
    </div>
  )

  // Filter Loading component
  const FilterLoader = () => (
    <div className="filter-loading-container">
      <motion.div
        className="filter-loader"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="filter-spinner"></div>
        <p>Filtering projects...</p>
      </motion.div>
    </div>
  )

  // Error component
  const ErrorDisplay = () => (
    <div className="error-display">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="error-content"
      >
        <h3>⚠️ API Connection Issue</h3>
        <p>{error}</p>
        <p>
          Showing fallback data. Please check your Google Sheet and API
          configuration.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="retry-button"
        >
          Refresh Page
        </button>
      </motion.div>
    </div>
  )

  const PortfolioCard = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [imageError, setImageError] = useState(false)

    const handleImageError = () => {
      console.log('Image failed to load:', item.image)
      setImageError(true)
    }

    return (
      <motion.div
        layout
        className="portfolio-card"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -50 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          layout: { duration: 0.6 },
        }}
        whileHover={{ y: -10 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="portfolio-image">
          {!imageError ? (
            <motion.img
              src={item.image}
              alt={item.title}
              onError={handleImageError}
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              loading="lazy"
            />
          ) : (
            <div className="image-placeholder">
              <span>🏠</span>
              <p>Image not available</p>
            </div>
          )}

          {/* Center Opening Overlay */}
          <motion.div
            className="portfolio-overlay"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <motion.div
              className="overlay-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: isHovered ? 1 : 0.8,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: isHovered ? 0.1 : 0 }}
            >
              <div className="portfolio-details">
                <span className="portfolio-client">{item.client}</span>
                <span className="portfolio-year">{item.year}</span>
                <span className="portfolio-area">{item.area}</span>
              </div>
              <motion.button
                className="view-project-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            className="category-badge"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            {filterOptions.find((f) => f.id === item.category)?.icon || '🏠'}
          </motion.div>
        </div>

        <motion.div
          className="portfolio-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section id="portfolio" className="portfolio-section" ref={ref}>
      <div className="container">
        {/* Section Header with Portfolio Icon */}
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Portfolio Icon Container */}
          <motion.div
            className="portfolio-icon-container"
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
            <div className="portfolio-icon">
              <img
                src="https://img.icons8.com/fluency/96/8b5cf6/portfolio.png"
                alt="Portfolio"
                width="45"
                height="45"
              />
            </div>
          </motion.div>

          <motion.div
            className="portfolio-title-underline"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '120px', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <motion.div
              className="portfolio-underline-dot"
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Our Portfolio {loading && '(Loading...)'}
          </motion.span>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Transforming Visions Into Reality
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Explore our diverse collection of interior design projects.
            {loading && ' Loading latest projects...'}
            {filterLoading && ' Filtering projects...'}
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {filterOptions.map((filter, index) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? 'active' : ''
              } ${filterLoading ? 'loading' : ''}`}
              onClick={() => handleFilterChange(filter.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: filterLoading ? 1 : 1.05,
                y: filterLoading ? 0 : -2,
              }}
              whileTap={{ scale: filterLoading ? 1 : 0.95 }}
              disabled={loading || filterLoading}
            >
              <span className="filter-icon">{filter.icon}</span>
              {filter.label}
              <motion.span
                className="filter-count"
                key={`${activeFilter}-${portfolioItems.length}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {loading || filterLoading
                  ? '...'
                  : filter.id === 'all'
                  ? portfolioItems.length
                  : portfolioItems.filter((item) => item.category === filter.id)
                      .length}
              </motion.span>
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Content */}
        <motion.div
          className="portfolio-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {loading ? (
            <LoadingGrid />
          ) : error && portfolioItems.length === 0 ? (
            <ErrorDisplay />
          ) : filterLoading ? (
            <FilterLoader />
          ) : (
            <div className="portfolio-grid">
              <AnimatePresence mode="wait">
                {filteredItems.map((item, index) => (
                  <PortfolioCard
                    key={`${activeFilter}-${item.id}`}
                    item={item}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>

        {/* Data Source Indicator */}
        {!loading && !filterLoading && (
          <motion.div
            className="data-source-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p>
              {error
                ? '⚠️ Using fallback data'
                : '✅ Live data'}
              {!error && ` • Last updated: ${new Date().toLocaleTimeString()}`}
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h3>Ready to Create Your Dream Space?</h3>
          <p>Let's bring your vision to life with our expert design team.</p>
          <motion.button
            className="main-cta-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
