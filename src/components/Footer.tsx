import React from 'react'
import { motion } from 'framer-motion'
import { getSiteContent } from '../data/content'

const Footer: React.FC = () => {
  const siteContent = getSiteContent()

  return (
    <footer className="bg-secondary text-white">
      <div className="container-max">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/images/legacy/logo.png" 
                  alt={`${siteContent.name} Logo`}
                  className="h-8 w-auto"
                />
                <h3 className="text-xl font-bold">{siteContent.name}</h3>
              </div>
              <p className="text-blue-200 mb-4">
                {siteContent.tagline}
              </p>
              <p className="text-blue-200 text-sm">
                © 2025 {siteContent.name} | Indirect Tax Specialists | Kolkata, India
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-blue-200 hover:text-primary transition-colors duration-200">About</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-primary transition-colors duration-200">Services</a></li>
                <li><a href="#why-choose-us" className="text-blue-200 hover:text-primary transition-colors duration-200">Why Choose Us</a></li>
                <li><a href="#booking" className="text-blue-200 hover:text-primary transition-colors duration-200">Book Consultation</a></li>
                <li><a href="#contact" className="text-blue-200 hover:text-primary transition-colors duration-200">Contact</a></li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <p className="text-blue-200">
                  <strong>Phone:</strong><br />
                  {siteContent.contact.phone}
                </p>
                <p className="text-blue-200">
                  <strong>Email:</strong><br />
                  <a 
                    href={`mailto:${siteContent.contact.email}`}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {siteContent.contact.email}
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
