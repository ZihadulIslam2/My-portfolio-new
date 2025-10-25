import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Mail, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

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

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/message/me`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      )

      const data = await res.json()

      if (data.success) {
        setStatus({ type: 'success', message: data.message })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.message })
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Section (unchanged) */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex flex-col justify-center"
          >
            <h4 className="text-lg uppercase text-accent font-medium mb-3 tracking-wider">
              Get in touch
            </h4>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
              Let&apos;s <span className="text-accent">work</span> <br />{' '}
              together!
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-md mb-10 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Let’s connect and make
              something great together.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="mailto:zihadul708@gmail.com"
                className="p-3 rounded-full bg-white/5 hover:bg-accent/20 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="text-accent" size={22} />
              </a>
              <a
                href="https://github.com/ZihadulIslam2"
                className="p-3 rounded-full bg-white/5 hover:bg-accent/20 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-accent" size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/zihadulislam2/"
                className="p-3 rounded-full bg-white/5 hover:bg-accent/20 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="text-accent" size={22} />
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
            className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-accent/20 transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-accent">
              Send me a message
            </h3>

            <div className="flex flex-col gap-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-b border-white/20 py-3 outline-none w-full text-white placeholder-white/50 focus:border-accent transition-all"
                type="text"
                placeholder="Your name"
                required
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-b border-white/20 py-3 outline-none w-full text-white placeholder-white/50 focus:border-accent transition-all"
                type="email"
                placeholder="Your email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-transparent border-b border-white/20 py-3 outline-none w-full text-white placeholder-white/50 focus:border-accent transition-all resize-none"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-accent text-black font-semibold px-8 py-3 rounded-full hover:bg-accent/80 transition-all duration-300 self-start"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status.message && (
                <p
                  className={`mt-3 text-sm ${
                    status.type === 'success'
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
