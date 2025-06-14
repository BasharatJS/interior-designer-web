'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import '../styles/Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.2 })

  const filterOptions = [
    { id: 'all', label: 'All Projects', icon: '🏠' },
    { id: 'living-room', label: 'Living Room', icon: '🛋️' },
    { id: 'kitchen', label: 'Kitchen', icon: '🍳' },
    { id: 'bedroom', label: 'Bedroom', icon: '🛏️' },
    { id: 'office', label: 'Office Space', icon: '💼' },
  ]

  const portfolioItems = [
    // Living Room Projects
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
      title: 'Scandinavian Comfort Zone',
      category: 'living-room',
      description: 'Warm woods and cozy textiles for family gatherings',
      image:
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop',
      client: 'The Gupta Residence',
      year: '2023',
      area: '520 sq ft',
    },
    {
      id: 4,
      title: 'Industrial Chic Living',
      category: 'living-room',
      description: 'Exposed brick and metal accents for urban sophistication',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      client: 'Loft 42 Project',
      year: '2023',
      area: '800 sq ft',
    },
    {
      id: 5,
      title: 'Bohemian Paradise',
      category: 'living-room',
      description: 'Eclectic patterns and vibrant colors for creative souls',
      image:
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&h=400&fit=crop',
      client: 'Artist Studio Home',
      year: '2024',
      area: '380 sq ft',
    },

    // Kitchen Projects
    {
      id: 6,
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
      id: 7,
      title: 'Rustic Modern Kitchen',
      category: 'kitchen',
      description: 'Reclaimed wood and contemporary fixtures blend perfectly',
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&sat=-50&hue=30',
      client: 'Farmhouse Revival',
      year: '2023',
      area: '280 sq ft',
    },
    {
      id: 8,
      title: 'Sleek Urban Kitchen',
      category: 'kitchen',
      description: 'High-gloss finishes and smart storage solutions',
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&brightness=10',
      client: 'City Center Condo',
      year: '2024',
      area: '200 sq ft',
    },
    {
      id: 9,
      title: 'Family-Friendly Kitchen',
      category: 'kitchen',
      description: 'Durable materials and open layout for busy families',
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&warm=20',
      client: 'The Johnson Family',
      year: '2023',
      area: '350 sq ft',
    },
    {
      id: 10,
      title: 'Minimalist Kitchen Haven',
      category: 'kitchen',
      description: 'Clean lines and hidden storage for clutter-free cooking',
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&sat=-30',
      client: 'Zen Living Project',
      year: '2024',
      area: '250 sq ft',
    },

    // Bedroom Projects
    {
      id: 11,
      title: 'Master Suite Sanctuary',
      category: 'bedroom',
      description: 'Luxurious retreat with walk-in closet and spa-like ensuite',
      image:
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop',
      client: 'Luxury Villa Project',
      year: '2024',
      area: '450 sq ft',
    },
    {
      id: 12,
      title: 'Cozy Teen Bedroom',
      category: 'bedroom',
      description: 'Vibrant colors and functional furniture for growing minds',
      image:
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop&hue=60',
      client: 'Growing Family Home',
      year: '2023',
      area: '200 sq ft',
    },
    {
      id: 13,
      title: 'Romantic Master Bedroom',
      category: 'bedroom',
      description: 'Soft textures and warm lighting for intimate spaces',
      image:
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop&warm=30',
      client: 'Newlywed Apartment',
      year: '2024',
      area: '320 sq ft',
    },
    {
      id: 14,
      title: 'Contemporary Guest Room',
      category: 'bedroom',
      description: 'Welcoming space that doubles as a home office',
      image:
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop&sat=-20',
      client: 'Multi-Purpose Living',
      year: '2023',
      area: '180 sq ft',
    },

    // Office Projects
    {
      id: 15,
      title: 'Executive Office Suite',
      category: 'office',
      description: 'Sophisticated workspace that commands respect',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      client: 'Corporate Headquarters',
      year: '2024',
      area: '400 sq ft',
    },
    {
      id: 16,
      title: 'Creative Studio Space',
      category: 'office',
      description: 'Inspiring environment for innovation and collaboration',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&hue=30',
      client: 'Design Agency Office',
      year: '2023',
      area: '600 sq ft',
    },
    {
      id: 17,
      title: 'Home Office Retreat',
      category: 'office',
      description: 'Productive workspace within residential setting',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&brightness=15',
      client: 'Remote Worker Haven',
      year: '2024',
      area: '150 sq ft',
    },
    {
      id: 18,
      title: 'Modern Startup Office',
      category: 'office',
      description: 'Flexible layout for growing tech company',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&sat=20',
      client: 'Tech Startup Hub',
      year: '2023',
      area: '800 sq ft',
    },
    {
      id: 19,
      title: 'Legal Firm Office',
      category: 'office',
      description:
        'Professional and trustworthy atmosphere for client meetings',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&warm=-20',
      client: 'Law Associates',
      year: '2024',
      area: '500 sq ft',
    },
  ]

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  const PortfolioCard = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false)

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
          <motion.img
            src={item.image}
            alt={item.title}
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

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
            {filterOptions.find((f) => f.id === item.category)?.icon}
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
        {/* Section Header */}
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <span className="section-tag">Our Portfolio</span>
          <h2 className="section-title">Transforming Visions Into Reality</h2>
          <p className="section-subtitle">
            Explore our diverse collection of interior design projects that
            showcase our expertise across residential and commercial spaces.
          </p>
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
              }`}
              onClick={() => setActiveFilter(filter.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="filter-icon">{filter.icon}</span>
              {filter.label}
              <motion.span
                className="filter-count"
                key={activeFilter} // Re-animate when filter changes
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {filter.id === 'all'
                  ? portfolioItems.length
                  : portfolioItems.filter((item) => item.category === filter.id)
                      .length}
              </motion.span>
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="portfolio-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <PortfolioCard
                key={`${activeFilter}-${item.id}`}
                item={item}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="portfolio-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="stats-grid">
            <motion.div className="stat-item" whileHover={{ scale: 1.05 }}>
              <motion.span
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
              >
                {portfolioItems.length}+
              </motion.span>
              <span className="stat-label">Projects Completed</span>
            </motion.div>
            <motion.div className="stat-item" whileHover={{ scale: 1.05 }}>
              <motion.span
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
              >
                4
              </motion.span>
              <span className="stat-label">Design Categories</span>
            </motion.div>
            <motion.div className="stat-item" whileHover={{ scale: 1.05 }}>
              <motion.span
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
              >
                98%
              </motion.span>
              <span className="stat-label">Client Satisfaction</span>
            </motion.div>
          </div>
        </motion.div>

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
