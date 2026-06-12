import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Mail, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    // These should ideally be in your .env file
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Check if keys are provided
    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS keys are missing. Please add them to your .env file.')
      // For now, I'll let it proceed but it will fail if not set. 
      // Or I can provide a more helpful error.
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: 'Zihadul Islam', // You can change this
        message: formData.message,
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        })
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section relative z-10 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Section */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <h4 className="text-lg uppercase text-accent font-bold mb-4 tracking-widest">
              Get in touch
            </h4>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
              Let&apos;s <span className="text-gradient-accent">work</span>{' '}
              <br /> together!
            </h2>
            <p className="text-white/60 text-lg max-w-md mb-12 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Let’s connect and make
              something great together.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="mailto:zihadul708@gmail.com"
                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:text-black transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail
                  className="text-white group-hover:text-black transition-colors"
                  size={24}
                />
              </a>
              <a
                href="https://github.com/ZihadulIslam2"
                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:text-black transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  className="text-white group-hover:text-black transition-colors"
                  size={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/zihadulislam2/"
                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:text-black transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  className="text-white group-hover:text-black transition-colors"
                  size={24}
                />
              </a>
            </div>
          </motion.div>

          {/* Right Form Section */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 w-full bg-[#1A0B33]/60   backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-white/10 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">
              Send me a message
            </h3>

            <div className="flex flex-col gap-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none w-full text-white placeholder-white/40 focus:border-accent focus:bg-white/10 transition-all"
                type="text"
                placeholder="Your name"
                required
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none w-full text-white placeholder-white/40 focus:border-accent focus:bg-white/10 transition-all"
                type="email"
                placeholder="Your email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none w-full text-white placeholder-white/40 focus:border-accent focus:bg-white/10 transition-all resize-none min-h-[150px]"
                placeholder="Your message"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-accent w-full md:w-auto self-start mt-2"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status.message && (
                <p
                  className={`mt-2 text-sm font-medium ${status.type === 'success'
                      ? 'text-green-400'
                      : 'text-red-400'
                    }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
