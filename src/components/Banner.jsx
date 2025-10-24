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
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center justify-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Zihadul <span>Islam</span>
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={['Developer', 2000, 'Designer', 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto"
            >
              Passionate MERN stack developer creating efficient, scalable web
              applications and enhancing user experiences every day.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto"
            >
                  <button className="btn btn-lg">
                    <a href={`mailto:${links.email}`}>Contact me</a>
                  </button>
                  <button>
                    <a
                      href={myResumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-gradient bln-link"
                    >
                      View Resume →
                    </a>
                  </button>
            </motion.div>
            {/* social */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto"
            >
              <a href={links.linkedin}>
                <FaLinkedin />
              </a>
              <a href={links.github}>
                <FaGithub />
              </a>
              <a href={`mailto:${links.email}`}>
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView="show"
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mt-8 lg:mt-0"
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dynsi60i4/image/upload/v1733553328/linkedin_profile_001_without_bg_ofujjo.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
