import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from './../variants'

const Servicesdata = [
  {
    name: 'Full Stack Development',
    description:
      'I offer end-to-end full stack development services, building responsive front-ends and efficient back-ends using the latest web technologies for scalable solutions.',
    link: 'Learn more',
  },
  {
    name: 'Front-End Development',
    description:
      'I create visually appealing, responsive front-end interfaces using modern frameworks, ensuring seamless user experiences across all devices and platforms.',
    link: 'Learn more',
  },
  {
    name: 'Back-End Development',
    description:
      'I build secure, scalable back-end systems, ensuring efficient data management, seamless API integrations, and optimal performance for robust web applications.',
    link: 'Learn more',
  },
]

const Services = () => {
  return (
    <section className="py-16 md:py-24" id="services">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* text and image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              What I Do.
            </h2>
            <h3 className="text-xl md:text-2xl max-w-[455px] mb-8">
              I&apos;m a freelancer Front-end and back-end developer with one
              year of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1"
          >
            {/* services list */}
            {Servicesdata.map((service, index) => (
              <div
                className="border-b border-white/20 py-6 flex flex-col md:flex-row gap-4 md:gap-8"
                key={index}
              >
                <div className="flex-grow max-w-[476px]">
                  <h4 className="text-xl font-semibold mb-3">{service.name}</h4>
                  <p className="text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
