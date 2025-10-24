import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    honeypot: '' // Anti-spam field
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const timeSlots = [
    '09:00 IST',
    '10:00 IST', 
    '11:00 IST',
    '14:00 IST',
    '15:00 IST',
    '16:00 IST'
  ]

  const services = [
    'Customs Consultation',
    'GST Advisory',
    'Legacy Laws Support',
    'Litigation Support',
    'General Consultation'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) {
      return
    }

    // Client-side validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      setSubmitStatus('error')
      return
    }

    // Check if date is not in the past
    if (formData.preferredDate) {
      const selectedDate = new Date(formData.preferredDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (selectedDate < today) {
        setSubmitStatus('error')
        return
      }
    }

    setIsSubmitting(true)

    try {
      // Use Netlify Forms - 100% FREE, no recurring costs
      const formDataToSend = new FormData()
      formDataToSend.append('form-name', 'booking')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('service', formData.service)
      formDataToSend.append('preferredDate', formData.preferredDate)
      formDataToSend.append('preferredTime', formData.preferredTime)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('preferred_iso_datetime', formData.preferredDate && formData.preferredTime 
        ? new Date(`${formData.preferredDate}T${formData.preferredTime.split(' ')[0]}:00+05:30`).toISOString()
        : '')
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
          honeypot: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Book a Consultation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Schedule a consultation with our indirect tax experts. We'll help you navigate complex tax regulations and provide tailored solutions.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you! Your consultation request has been submitted. We'll contact you soon to confirm your appointment.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                There was an error submitting your request. Please check all required fields and try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" name="booking" data-netlify="true" data-netlify-honeypot="bot-field">
              {/* Netlify form detection */}
              <input type="hidden" name="form-name" value="booking" />
              
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="bot-field"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Please provide any additional details about your consultation needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Request Consultation'}
              </button>
            </form>

            {/* Calendly Integration - Commented out with placeholder */}
            {/* 
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-secondary mb-4">
                Or Schedule Directly with Calendly
              </h3>
              <p className="text-gray-600 mb-4">
                Use our online booking system to see available times and book instantly.
              </p>
              <div className="calendly-inline-widget" 
                   data-url="CALENDLY_URL" 
                   style={{minWidth:320,height:630}}></div>
              <script type="text/javascript" 
                      src="https://assets.calendly.com/assets/external/widget.js" 
                      async></script>
            </div>
            */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Booking
