'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/WhyChooseUs.css'

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: '✨',
      title: 'Unparalleled Creativity',
      description:
        'Our award-winning design team brings fresh perspectives and innovative ideas to every project, ensuring your space is not just beautiful, but uniquely yours.',
      image:
        'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      icon: '🔍',
      title: 'Meticulous Attention to Detail',
      description:
        'We believe that exceptional design lies in the details. From perfect lighting placement to thoughtfully curated accessories, we leave nothing to chance.',
      image:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      icon: '👂',
      title: 'Client-Centered Approach',
      description:
        'Your vision drives our process. We listen carefully to your needs, preferences, and lifestyle to create spaces that perfectly reflect who you are.',
      image:
        'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      icon: '🌿',
      title: 'Sustainable Design Practices',
      description:
        'Embracing eco-friendly materials and energy-efficient solutions, we create beautiful spaces that are kind to the planet without compromising on style.',
      image:
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      icon: '💎',
      title: 'Quality Craftsmanship',
      description:
        'We partner with the finest artisans, craftspeople, and suppliers to ensure every element of your design is executed with exceptional quality and durability.',
      image:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&h=400&fit=crop',
    },
    {
      id: 6,
      icon: '⏱️',
      title: 'Timely Project Completion',
      description:
        'Our dedicated project management team ensures your design is delivered on schedule and within budget, with transparent communication every step of the way.',
      image:
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&h=400&fit=crop',
    },
  ]

  const ReasonCard = ({ reason, index }) => {
    const [isHovered, setIsHovered] = useState(false)
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: false, threshold: 0.1 })

    return (
      <motion.div
        ref={cardRef}
        className="reason-card"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="reason-image">
          <img src={reason.image} alt={reason.title} />
          <div className={`reason-overlay ${isHovered ? 'active' : ''}`} />
        </div>

        <div className="reason-content">
          <div className="reason-icon">
            {reason.icon}
            <div className={`icon-ripple ${isHovered ? 'active' : ''}`} />
          </div>

          <h3 className="reason-title">{reason.title}</h3>

          <p className="reason-description">{reason.description}</p>

          <div className={`reason-shine ${isHovered ? 'active' : ''}`} />
        </div>
      </motion.div>
    )
  }

  return (
    <section id="why-choose-us" className="why-choose-section">
      <div className="container">
        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-square purple"></div>
          <div className="floating-circle gold"></div>
          <div className="floating-triangle purple"></div>
        </div>

        {/* Section Header with Why Choose Us Icon */}
        <motion.div
          className="why-choose-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Why Choose Us Icon Container */}
          <motion.div
            className="whychoose-icon-container"
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
            <div className="whychoose-icon">
              {/* Why Choose Us Icon */}
              <img
                src="https://img.icons8.com/fluency/96/8b5cf6/trophy.png"
                alt="Why Choose Us"
                width="45"
                height="45"
              />
            </div>
          </motion.div>

          <motion.div
            className="whychoose-title-underline"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '120px', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <motion.div
              className="whychoose-underline-dot"
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
            Why Choose Us
          </motion.span>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Elevate Your Space with Our Expertise
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Discover what sets our interior design studio apart and why
            discerning clients trust us to transform their spaces into
            extraordinary environments.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.id} reason={reason} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="why-choose-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="cta-content">
            <h3>Ready to Transform Your Space?</h3>
            <p>
              Let's create something extraordinary together. Book a free
              consultation today.
            </p>
          </div>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
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
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
