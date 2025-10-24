import React from 'react'
import { motion } from 'framer-motion'
import { getSiteContent } from '../data/content'

const About: React.FC = () => {
  const siteContent = getSiteContent()

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Our Firm
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              P & M Tax Consult was founded with a commitment to provide specialized services in <strong>Indirect Taxation</strong>. With extensive experience in <strong>Customs, GST, Central Excise, and Service Tax (Legacy Laws)</strong>, we help businesses and individuals navigate complex tax regulations effectively.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We take pride in representing clients at every stage — from <strong>Assessment</strong> and <strong>Adjudication</strong> to <strong>Appellate Tribunals</strong> and the <strong>High Court at Calcutta</strong>.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Kolkata-based consultancy firm</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Pan-India service coverage</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Representation before High Court</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/founder.jpg" 
              alt={`${siteContent.founder.name} - ${siteContent.founder.title}`}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">
                {siteContent.founder.name}
              </h3>
              <p className="text-blue-200 text-lg">
                {siteContent.founder.title}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
