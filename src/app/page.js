'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '../context/ThemeContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/AboutUs'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import WhyChooseUs from '@/components/WhyChooseUs'
import './globals.css'
import ContactMap from '@/components/ContactMap'
import Contact from '@/components/Contact'

// Loading Screen Component
const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ textAlign: 'center', color: 'white' }}>
            <div className="loader"></div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                marginTop: '2rem',
                fontFamily: 'Playfair Display, serif',
                fontSize: '2rem',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #f4d03f 0%, #f39c12 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Moon Shine Interiors
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                marginTop: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.1rem',
              }}
            >
              Creating Beautiful Spaces...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Placeholder sections for navigation
const PlaceholderSection = ({ id, title, height = '100vh' }) => {
  return (
    <section
      id={id}
      style={{
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--current-surface)',
        borderTop: '1px solid var(--current-border)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center' }}
      >
        <h2
          style={{
            fontSize: '3rem',
            color: 'var(--current-text)',
            marginBottom: '1rem',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: 'var(--current-text-secondary)',
            fontSize: '1.2rem',
          }}
        >
          This section will be developed next...
        </p>
      </motion.div>
    </section>
  )
}

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh' }}>
        <LoadingScreen isLoading={isLoading} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <WhyChooseUs />
            <Contact />
            {/* Placeholder sections for navigation */}
            {/* <PlaceholderSection id="about" title="About Us" /> */}
            {/* <PlaceholderSection id="services" title="Our Services" /> */}
            {/* <PlaceholderSection id="portfolio" title="Portfolio" /> */}
            {/* <PlaceholderSection id="features" title="Why Choose Us" /> */}
            {/* <PlaceholderSection id="contact" title="Contact Us" /> */}
          </main>

          {/* Footer placeholder */}
          <footer
            style={{
              background: 'var(--dark-navy)',
              color: 'white',
              textAlign: 'center',
              padding: '2rem',
              borderTop: '3px solid var(--primary-red)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  marginBottom: '1rem',
                  color: 'var(--primary-gold)',
                }}
              >
                Moon Shine Interiors
              </h3>
              <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
                24/3, Dasu Babu Bagan, Kamarhati, Kolkata - 58
              </p>
              <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
                📧 mdazadansari2606@gmail.com | 📱 9038520720 | 📱 9163135727
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>
                © 2025 Moon Shine Interiors. All rights reserved.
              </p>
            </motion.div>
          </footer>
        </motion.div>
      </div>
    </ThemeProvider>
  )
}

export default HomePage
