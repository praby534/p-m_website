import React from 'react'
import { motion } from 'framer-motion'
import { getSiteContent } from '../data/content'

const Hero: React.FC = () => {
  const siteContent = getSiteContent()

  return (
    <section id="home" className="bg-gradient-to-br from-secondary to-accent text-white section-padding">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {siteContent.name}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {siteContent.tagline}
          </motion.p>
          
          <motion.p 
            className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {siteContent.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Contact Us
            </a>
            <a 
              href="#booking" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Book Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
