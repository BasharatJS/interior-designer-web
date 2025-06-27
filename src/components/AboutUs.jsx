'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import '@/styles/AboutUs.css'

const About = () => {
  const [activeTab, setActiveTab] = useState('story')
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    awards: 0,
  })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.3 })

  // Animation for counting numbers
  useEffect(() => {
    if (isInView) {
      const targets = { projects: 500, clients: 300, years: 8, awards: 25 }
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepTime = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          years: Math.floor(targets.years * progress),
          awards: Math.floor(targets.awards * progress),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, stepTime)

      return () => clearInterval(timer)
    }
  }, [isInView])

  const tabContent = {
    story: {
      title: 'Our Story',
      content:
        "Founded in 2016, Moon Shine Interiors began as a dream to transform ordinary spaces into extraordinary experiences. What started as a small team of passionate designers has grown into Kolkata's most trusted interior design firm. We believe that every space tells a story, and we're here to help you write yours.",
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    },
    mission: {
      title: 'Our Mission',
      content:
        "To create inspiring, functional, and beautiful spaces that enhance the way people live and work. We're committed to sustainable design practices, innovative solutions, and exceeding our clients' expectations. Every project is an opportunity to bring dreams to life and create lasting value.",
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
    },
    values: {
      title: 'Our Values',
      content:
        'Excellence, Innovation, and Integrity form the foundation of everything we do. We believe in transparent communication, timely delivery, and creating designs that stand the test of time. Our client-first approach ensures that every decision is made with your vision and lifestyle in mind.',
      image:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop',
    },
  }

  const team = [
    {
      name: 'Md Azad Ansari',
      role: 'Founder & Lead Designer',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      description:
        'With 8+ years of experience, Azad brings creativity and precision to every project.',
    },
    {
      name: 'Jacob Doe',
      role: 'Senior Interior Designer',
      image:
        'https://plus.unsplash.com/premium_photo-1661443913056-d6c92c8b4d27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNlbm9yJTIwaW50ZXJpb3IlMjBkZXNpZ25lciUyMG1hbiUyMGltYWdlfGVufDB8fDB8fHww',
      description:
        'Specialist in residential design with a keen eye for modern aesthetics.',
    },
    {
      name: 'Tommy Doe',
      role: 'Project Manager',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      description:
        'Ensures seamless execution and timely delivery of all projects.',
    },
  ]

  return (
    <section id="about" className="about-section">
      {/* Dynamic Background Elements */}
      <div className="about-bg">
        {/* Animated Particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className={`about-particle particle${i + 1}`}
            animate={{
              y: [-20, -60, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Orbital Rings */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`orbital-${i}`}
            className={`orbital-ring ring${i + 1}`}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container">
        {/* Section Header with Interior Design Icon */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* About Icon Container */}
          <motion.div
            className="about-icon-container"
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
            <div className="about-icon">
              {/* Interior Designer Icon */}
              <img
                src="https://img.icons8.com/fluency/96/8b5cf6/interior-design.png"
                alt="Interior Design"
                width="45"
                height="45"
              />
            </div>
          </motion.div>

          <motion.div
            className="title-underline"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '120px', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <motion.div
              className="underline-dot"
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
            About Us
          </motion.span>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Crafting Dreams Into Reality
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
          >
            We are passionate interior designers dedicated to creating spaces
            that inspire, comfort, and reflect your unique personality.
          </motion.p>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          ref={ref}
          className="stats-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="stats-grid">
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="stat-number">{counters.projects}+</div>
              <div className="stat-label">Projects Completed</div>
            </motion.div>
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="stat-number">{counters.clients}+</div>
              <div className="stat-label">Happy Clients</div>
            </motion.div>
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="stat-number">{counters.years}+</div>
              <div className="stat-label">Years Experience</div>
            </motion.div>
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="stat-number">{counters.awards}+</div>
              <div className="stat-label">Awards Won</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Tabs Section */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <div className="tab-navigation">
            {Object.keys(tabContent).map((tab) => (
              <motion.button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tabContent[tab].title}
              </motion.button>
            ))}
          </div>

          <div className="tab-content">
            <motion.div
              key={activeTab}
              className="tab-panel"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="tab-text">
                <h3>{tabContent[activeTab].title}</h3>
                <p>{tabContent[activeTab].content}</p>
                <motion.button
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
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
                </motion.button>
              </div>
              <div className="tab-image">
                <motion.img
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="image-overlay-about"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="team-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h3 className="team-title">Meet Our Creative Team</h3>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                viewport={{ once: false }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <div className="social-links">
                      <motion.a href="#" whileHover={{ scale: 1.2 }}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </motion.a>
                      <motion.a href="#" whileHover={{ scale: 1.2 }}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  <p>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action - Updated Version */}
        <motion.div
          className="about-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Decorative elements */}
          <div className="cta-decoration cta-decoration-1"></div>
          <div className="cta-decoration cta-decoration-2"></div>
          <div className="cta-decoration cta-decoration-3"></div>

          {/* Content wrapper with left-right layout */}
          <div className="cta-content-wrapper">
            <div className="cta-content">
              <h3>Ready to Transform Your Space?</h3>
              <p>
                Let's discuss your dream project and bring your vision to life.
                Our team of experts is ready to create something extraordinary
                for you.
              </p>
            </div>

            <div className="cta-button-container">
              <motion.button
                className="main-cta-button"
                whileHover={{ scale: 1.05 }}
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
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
