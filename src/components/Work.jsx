

//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'

// Project data array
const projects = [
  {
    title: 'Aero Mart',
    subtitle: 'E-commerce Website',
    image:
      'https://res.cloudinary.com/dynsi60i4/image/upload/v1733560863/portfolio-img1_ncte8t.png',
    link: 'https://aero-mart.netlify.app/',
  },
  {
    title: 'Book Store',
    subtitle: 'Online Book Store',
    image:
      'https://res.cloudinary.com/dynsi60i4/image/upload/v1733560861/portfolio-img2_jijsyw.png',
    link: 'https://exampleproject2.com',
  },
  {
    title: 'Flavor Fusion',
    subtitle: 'Online Food Store',
    image:
      'https://res.cloudinary.com/dynsi60i4/image/upload/v1733560865/portfolio-img3_xesns5.png',
    link: 'https://exampleproject3.com',
  },


]

const Work = () => {
  return (
    <section className="section my-56" id="work">
      <div className="container mx-auto">
        {/* <div className="flex flex-col lg:flex-row gap-x-10"> */}
        <div className="flex flex-col lg:flex-col gap-x-10">
          {/* Text Section */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> work
              </h2>
              <p className="max-w-sm mb-16">
                Explore my latest projects, showcasing innovative designs and
                development, focused on delivering responsive, scalable web
                applications and solutions.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
          </motion.div>

          {/* Projects Section */}
          {/* Projects Section */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
          >
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden border-2 border-white/50 rounded-xl block"
              >
                {/* Overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                {/* Image */}
                <img
                  className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                  src={project.image}
                  alt={project.title}
                />

                {/* Subtitle */}
                <div
                  className="absolute left-12 z-50 
      sm:-bottom-full sm:group-hover:bottom-24 bottom-24 transition-all duration-500"
                >
                  <span className="text-gradient">{project.subtitle}</span>
                </div>

                {/* Title */}
                <div
                  className="absolute left-12 z-50 
      sm:-bottom-full sm:group-hover:bottom-14 bottom-14 transition-all duration-700"
                >
                  <span className="text-3xl text-white">{project.title}</span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
