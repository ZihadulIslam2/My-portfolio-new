import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  const links = {
    linkedin: 'https://www.linkedin.com/in/zihadulislam2/',
    github: 'https://github.com/ZihadulIslam2',
    email: 'zihadul708@gmail.com',
  }

  const myResumeLink =
    'https://drive.google.com/file/d/1PW77VLwffR73auXTbb6OO2vfuxeCrlSA/view'

  return (
    <section
      className="min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center relative overflow-hidden"
      id="home"
    >
      {/* Background Gradient Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-8 lg:gap-x-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="mb-4"
            >
              <span className="py-2 px-4 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-accent inline-block">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-[48px] font-bold leading-[1.1] lg:text-[90px] mb-6 tracking-tight"
            >
              Zihadul <span className="text-gradient-accent">Islam</span>
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8 text-[24px] lg:text-[36px] font-medium leading-[1.2] text-white/80"
            >
              <span className="mr-2">I build</span>
              <TypeAnimation
                sequence={[
                  'scalable web apps',
                  2000,
                  'modern user interfaces',
                  2000,
                  'robust backends',
                  2000,
                ]}
                speed={50}
                className="text-accent font-semibold"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="mb-10 max-w-lg mx-auto lg:mx-0 text-white/60 text-lg leading-relaxed"
            >
              Software developer with 1+ year of experience. I create efficient,
              scalable applications and craft seamless user experiences using
              modern technologies.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-x-6 mb-12"
            >
              <a href={`mailto:${links.email}`} className="btn btn-accent">
                Contact me
              </a>
              <a
                href={myResumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex text-[24px] gap-x-8 max-w-max mx-auto lg:mx-0"
            >
              <a
                href={links.linkedin}
                className="text-white/60 hover:text-accent transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href={links.github}
                className="text-white/60 hover:text-accent transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href={`mailto:${links.email}`}
                className="text-white/60 hover:text-accent transition-colors"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px] relative"
          >
            {/* Image Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-secondary/20 rounded-full blur-[80px] -z-10" />
            <img
              src="https://res.cloudinary.com/ddtuyxcsl/image/upload/v1766186976/IMG_20251219_082121_rlanj9.png"
              alt="Zihadul Islam"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
