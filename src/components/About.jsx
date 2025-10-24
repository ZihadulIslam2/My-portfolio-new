import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const links = {
    linkedin: 'https://www.linkedin.com/in/zihadulislam2/',
    github: 'https://github.com/ZihadulIslam2',
    email: 'zihadul708@gmail.com',
  }
  return (
    <section className="min-h-screen py-10 px-4" id="about" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-accent mb-4">ABOUT ME.</h2>
          <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
            <img
              src="https://res.cloudinary.com/dynsi60i4/image/upload/v1733553658/my_photo_m5z1be.png"
              alt="Profile"
              className="w-full h-full object-cover flex-1   bg-no-repeat  mix-blend-lighten   "
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-4">
            I&apos;m a MERN Stack Developer with 1+ years of experience.
          </h3>
          <p className="mb-6 text-sm">
            Specializing in creating intuitive, high-performance web
            applications, I focus on delivering seamless user experiences and
            efficient back-end solutions, leveraging the power of modern web
            technologies to solve complex problems.
          </p>

          <div className="flex justify-around mb-8">
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">
                {inView ? <CountUp start={0} end={1} duration={3} /> : null}
              </div>
              <div className="text-xs uppercase">
                Years of
                <br />
                Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">
                {inView ? <CountUp start={0} end={20} duration={3} /> : null}+
              </div>
              <div className="text-xs uppercase">
                Projects
                <br />
                Completed
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">
                {inView ? <CountUp start={0} end={5} duration={3} /> : null}+
              </div>
              <div className="text-xs uppercase">
                Satisfied
                <br />
                Clients
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button className="btn btn-lg w-full">
              <a href={`mailto:${links.email}`}>Contact me</a>
            </button>
            <a href="#" className="text-gradient btn-link">
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
