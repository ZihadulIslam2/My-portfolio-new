// import { motion } from 'framer-motion'
// import { fadeIn } from '../variants'

// const Contact = () => {
//   return (
//     <section className="py-16 lg:section" id="contact">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           {/* text */}
//           <motion.div
//             variants={fadeIn('right', 0.3)}
//             initial="hidden"
//             whileInView={'show'}
//             viewport={{ once: true, amount: 0.3 }}
//             className="flex-1 flex justify-start items-center "
//           >
//             <div>
//               <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
//                 Get in touch
//               </h4>
//               <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
//                 Let&apos;s work <br /> together!
//               </h2>
//             </div>
//           </motion.div>
//           {/* form */}
//           <motion.form
//             variants={fadeIn('left', 0.3)}
//             initial="hidden"
//             whileInView={'show'}
//             viewport={{ once: true, amount: 0.3 }}
//             className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
//           >
//             <input
//               className="bg-transparent border-b py-3 outline-none w-full placeholder-white focus:border-accent transition-all"
//               type="text"
//               placeholder="Your name"
//             />
//             <input
//               className="bg-transparent border-b py-3 outline-none w-full placeholder-white focus:border-accent transition-all"
//               type="text"
//               placeholder="Your email"
//             />
//             <textarea
//               className="bg-transparent border-b py-3 outline-none w-full placeholder-white focus:border-accent transition-all resize-none "
//               placeholder="Your message"
//             ></textarea>
//             <button className="btn btn-lg">Send message</button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact



import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Mail, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Text Section */}
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

          {/* Contact Form Section */}
          <motion.form
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
                className="bg-transparent border-b border-white/20 py-3 outline-none w-full text-white placeholder-white/50 focus:border-accent transition-all"
                type="text"
                placeholder="Your name"
                required
              />
              <input
                className="bg-transparent border-b border-white/20 py-3 outline-none w-full text-white placeholder-white/50 focus:border-accent transition-all"
                type="email"
                placeholder="Your email"
                required
              />
              <textarea
                className="bg-transparent border-b border-white/20 py-3 outline-none w-full text-white placeholder-white/50 focus:border-accent transition-all resize-none"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-accent text-black font-semibold px-8 py-3 rounded-full hover:bg-accent/80 transition-all duration-300 self-start"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
