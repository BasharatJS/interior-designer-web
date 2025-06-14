'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  // Sample interior design images (you can replace with actual images)
  const carouselImages = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1920&h=1080&fit=crop&crop=center',
  ]

  const typingTexts = [
    'Transforming Spaces into Dreams',
    'Where Luxury Meets Comfort',
    'Creating Beautiful Living Experiences',
    'Your Vision, Our Expertise',
  ]

  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  // Carousel auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(slideInterval)
  }, [carouselImages.length])

  // Typing animation effect
  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex]
    let currentIndex = 0
    setTypedText('')
    setIsTyping(true)

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentFullText.length) {
        setTypedText(currentFullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)

        // Wait before starting next text
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentTextIndex])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="home" className="hero">
      {/* Background Carousel */}
      <div className="hero-carousel">
        <AnimatePresence mode="wait">
          {carouselImages.map((image, index) => (
            <motion.div
              key={index}
              className={`carousel-slide ${
                index === currentSlide ? 'active' : ''
              }`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: index === currentSlide ? 0.7 : 0,
                scale: index === currentSlide ? 1 : 1.1,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <img
                src={image}
                alt={`Interior Design ${index + 1}`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Moon Shine
            <br />
            <span style={{ color: 'white' }}>Interiors</span>
          </motion.h1>

          <motion.div
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {typedText}
            {isTyping && <span className="typing-cursor" />}
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Experience the perfect blend of elegance and functionality. We
            create stunning interior spaces that reflect your personality and
            enhance your lifestyle.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={() => scrollToSection('portfolio')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              View Our Work
            </motion.button>

            <motion.button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Get Free Consultation
            </motion.button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            className="hero-features"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {[
              { icon: '🏆', text: '500+ Projects' },
              { icon: '⭐', text: '5-Star Rating' },
              { icon: '🎯', text: '100% Satisfaction' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="hero-feature"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
              >
                <span className="hero-feature-icon">{item.icon}</span>
                {item.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <motion.div
        className="slide-indicators"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        {carouselImages.map((_, index) => (
          <motion.button
            key={index}
            className={`slide-indicator ${
              index === currentSlide ? 'active' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </section>
  )
}

export default Hero
