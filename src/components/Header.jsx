'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import '../styles/Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navigationLinks = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About Us' },
      { id: 'services', label: 'Our Services' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'why-choose-us', label: 'Why Choose Us' },
      { id: 'contact', label: 'Contact Us' },
    ],
    []
  )

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    setIsScrolled(scrollY > 50)
  }, [])

  // Optimized section change handler with throttling
  const handleSectionChange = useCallback(() => {
    const sections = navigationLinks.map((link) => link.id)
    const scrollPosition = window.scrollY + 100

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i])
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i])
        break
      }
    }
  }, [navigationLinks])

  useEffect(() => {
    let scrollTimer = null
    let sectionTimer = null

    const throttledHandleScroll = () => {
      if (scrollTimer) return
      scrollTimer = setTimeout(() => {
        handleScroll()
        scrollTimer = null
      }, 16) // ~60fps
    }

    const throttledHandleSectionChange = () => {
      if (sectionTimer) return
      sectionTimer = setTimeout(() => {
        handleSectionChange()
        sectionTimer = null
      }, 100) // Less frequent
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    window.addEventListener('scroll', throttledHandleSectionChange, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      window.removeEventListener('scroll', throttledHandleSectionChange)
      if (scrollTimer) clearTimeout(scrollTimer)
      if (sectionTimer) clearTimeout(sectionTimer)
    }
  }, [handleScroll, handleSectionChange])

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })

      // Don't set activeSection immediately to prevent flickering
      // Let the scroll event handler update it naturally
    }
    setIsMobileMenuOpen(false)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  // Memoized Logo Component to prevent unnecessary re-renders
  const InteriorDesignLogo = useMemo(() => {
    return () => (
      <div className="logo-icon interior-logo">
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-svg"
        >
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#F4D03F" />
            </linearGradient>
            <linearGradient
              id="houseGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F8F9FA" />
            </linearGradient>
          </defs>

          {/* Main Circle Background */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="url(#logoGradient)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
          />

          {/* House Structure */}
          {/* Roof */}
          <path
            d="M25 45 L50 25 L75 45 L70 45 L50 30 L30 45 Z"
            fill="url(#houseGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />

          {/* Main House Body */}
          <rect
            x="30"
            y="45"
            width="40"
            height="30"
            fill="url(#houseGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            rx="2"
          />

          {/* Door */}
          <rect
            x="45"
            y="55"
            width="10"
            height="20"
            fill="rgba(139, 92, 246, 0.7)"
            rx="1"
          />

          {/* Door Handle */}
          <circle cx="52" cy="65" r="1" fill="rgba(244, 208, 63, 0.9)" />

          {/* Windows */}
          <rect
            x="35"
            y="50"
            width="6"
            height="6"
            fill="rgba(139, 92, 246, 0.6)"
            rx="1"
          />
          <rect
            x="59"
            y="50"
            width="6"
            height="6"
            fill="rgba(139, 92, 246, 0.6)"
            rx="1"
          />

          {/* Window Cross Lines */}
          <line
            x1="38"
            y1="50"
            x2="38"
            y2="56"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.5"
          />
          <line
            x1="35"
            y1="53"
            x2="41"
            y2="53"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.5"
          />
          <line
            x1="62"
            y1="50"
            x2="62"
            y2="56"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.5"
          />
          <line
            x1="59"
            y1="53"
            x2="65"
            y2="53"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.5"
          />

          {/* Chimney */}
          <rect
            x="60"
            y="30"
            width="4"
            height="10"
            fill="rgba(244, 208, 63, 0.8)"
            rx="0.5"
          />

          {/* Decorative Stars/Sparkles - Remove animation causing flickering */}
          <g fill="rgba(255,255,255,0.8)">
            <path d="M20 25 L21 27 L23 26 L21 28 L22 30 L20 29 L18 30 L19 28 L17 26 L19 27 Z" />
            <path d="M80 65 L81 67 L83 66 L81 68 L82 70 L80 69 L78 70 L79 68 L77 66 L79 67 Z" />
          </g>

          {/* Moon/Sun in corner - Remove animation causing flickering */}
          <circle cx="25" cy="35" r="3" fill="rgba(244, 208, 63, 0.7)" />
        </svg>
      </div>
    )
  }, [])

  const LogoComponent = InteriorDesignLogo()

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header-content">
        {/* Logo with stable styling to prevent flickering */}
        <div
          className="logo"
          onClick={() => scrollToSection('home')}
          style={{ cursor: 'pointer' }}
        >
          {LogoComponent}
          <div className="logo-text-container">
            <span className="logo-text-line">Sun Shine</span>
            <span className="logo-text-line">Interior</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          {navigationLinks.map((link, index) => (
            <motion.button
              key={link.id}
              className={`nav-link ${
                activeSection === link.id ? 'active' : ''
              }`}
              onClick={() => scrollToSection(link.id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 'inherit',
                fontFamily: 'inherit',
                fontWeight: 500,
              }}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        {/* Mobile & Theme Toggle Container */}
        <div className="header-actions">
          {/* Theme Toggle */}
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon size={24} strokeWidth={2} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun size={24} strokeWidth={2} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Overlay & Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="mobile-nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <nav className="mobile-nav-content">
                {navigationLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    className={`mobile-nav-link ${
                      activeSection === link.id ? 'active' : ''
                    }`}
                    onClick={() => scrollToSection(link.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      fontFamily: 'inherit',
                      width: '100%',
                    }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
