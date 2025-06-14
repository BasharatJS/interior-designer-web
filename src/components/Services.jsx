'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Interior Design',
      subtitle: 'Transform Your Home Into a Haven',
      description:
        'From cozy apartments to spacious villas, we create personalized living spaces that reflect your lifestyle and personality. Our residential designs focus on functionality, comfort, and aesthetic appeal.',
      features: [
        'Complete home makeovers',
        'Room-by-room design solutions',
        'Custom furniture design',
        'Color consultation',
        'Space optimization',
      ],
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop',
      icon: '🏠',
      animation: 'parallax',
    },
    {
      id: 2,
      title: 'Commercial Interior Design',
      subtitle: 'Elevate Your Business Environment',
      description:
        'Create inspiring workspaces that boost productivity and reflect your brand identity. We design offices, retail spaces, restaurants, and commercial establishments that leave lasting impressions.',
      features: [
        'Office space planning',
        'Retail store design',
        'Restaurant & hospitality design',
        'Brand-focused interiors',
        'Ergonomic solutions',
      ],
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop',
      icon: '🏢',
      animation: 'rotate',
    },
    {
      id: 3,
      title: 'Kitchen & Bathroom Design',
      subtitle: 'Functional Beauty for Essential Spaces',
      description:
        'Specialized design for your most important rooms. We create stunning kitchens and bathrooms that combine practicality with luxury, featuring premium materials and smart storage solutions.',
      features: [
        'Custom cabinetry design',
        'Premium material selection',
        'Smart storage solutions',
        'Lighting design',
        'Plumbing & electrical planning',
      ],
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop',
      icon: '🛁',
      animation: 'split',
    },
    {
      id: 4,
      title: '3D Visualization & Planning',
      subtitle: "See Your Dreams Before They're Built",
      description:
        'Advanced 3D modeling and virtual reality previews help you visualize your space before construction begins. Make informed decisions with photorealistic renderings and interactive walkthroughs.',
      features: [
        'Photorealistic 3D renders',
        'Virtual reality walkthroughs',
        'Interactive floor plans',
        'Material & color previews',
        'Lighting simulations',
      ],
      image:
        'https://images.unsplash.com/photo-1722188166196-a68440b0bc0d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: '🎨',
      animation: 'morphing',
    },
    {
      id: 5,
      title: 'Furniture & Decor Selection',
      subtitle: 'Curated Pieces for Perfect Harmony',
      description:
        'Expert selection and sourcing of furniture, artwork, and decorative elements. We ensure every piece complements your design while staying within budget and timeline.',
      features: [
        'Custom furniture design',
        'Vintage & antique sourcing',
        'Artwork & accessory selection',
        'Textile & fabric consultation',
        'Budget-conscious options',
      ],
      image:
        'https://plus.unsplash.com/premium_photo-1720307880151-90089c5effd1?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: '🪑',
      animation: 'floating',
    },
    {
      id: 6,
      title: 'Project Management',
      subtitle: 'Seamless Execution from Start to Finish',
      description:
        'Complete project oversight ensuring timely delivery, quality control, and budget management. We coordinate with contractors, suppliers, and artisans to bring your vision to life stress-free.',
      features: [
        'Timeline management',
        'Quality control inspections',
        'Vendor coordination',
        'Budget tracking',
        'Regular progress updates',
      ],
      image:
        'https://images.unsplash.com/photo-1649521712353-e3661b4d42f4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: '📋',
      animation: 'cascade',
    },
  ]

  const ServiceCard = ({ service, index, isReversed }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, threshold: 0.3 })
    const [isImageHovered, setIsImageHovered] = useState(false)

    return (
      <motion.div
        ref={ref}
        className={`service-card ${isReversed ? 'reversed' : ''}`}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        {/* Content Side */}
        <div className="service-content">
          <motion.div
            className="service-icon"
            initial={{ scale: 0, rotate: -180 }}
            animate={
              isInView
                ? {
                    scale: 1,
                    rotate: 0,
                  }
                : { scale: 0, rotate: -180 }
            }
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            whileInView={{
              rotate: [0, 360, 720],
              transition: {
                duration: 2,
                ease: 'easeInOut',
                delay: index * 0.3,
              },
            }}
            viewport={{ once: false, threshold: 0.5 }}
          >
            {service.icon}
          </motion.div>

          <motion.h3
            className="service-title"
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isReversed ? 50 : -50 }
            }
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          >
            {service.title}
          </motion.h3>

          <motion.p
            className="service-subtitle"
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isReversed ? 50 : -50 }
            }
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
          >
            {service.subtitle}
          </motion.p>

          <motion.p
            className="service-description"
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isReversed ? 50 : -50 }
            }
            transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
          >
            {service.description}
          </motion.p>

          <motion.ul
            className="service-features"
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isReversed ? 50 : -50 }
            }
            transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
          >
            {service.features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + 0.8 + featureIndex * 0.1,
                }}
              >
                <span className="feature-check">✓</span>
                {feature}
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            className="service-cta"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
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

        {/* Image Side */}
        <div
          className="service-image"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <div className="image-container">
            <motion.div
              className="image-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            >
              <img src={service.image} alt={service.title} />

              {/* White Overlay with Icon on Hover */}
              <motion.div
                className="image-hover-overlay"
                animate={{ opacity: isImageHovered ? 0.5 : 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <motion.div
                  className="hover-icon"
                  animate={{
                    scale: isImageHovered ? [0.8, 1.2, 1] : 0.8,
                    rotate: isImageHovered ? [0, 180, 360] : 0,
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  {service.icon}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Complete Interior Design Solutions</h2>
          <p className="section-subtitle">
            From concept to completion, we offer comprehensive interior design
            services tailored to transform your space into something
            extraordinary.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="services-list">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h3>Ready to Start Your Project?</h3>
          <p>
            Let's discuss your vision and create something amazing together.
          </p>
          <motion.button
            className="main-cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Consultation
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
