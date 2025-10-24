import { useState, useEffect } from 'react'
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'

const Work = () => {
  // State to store projects
  const [projects, setProjects] = useState([])

  // Fetch projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/portfolio/`
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setProjects(data)
        console.log(projects)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section className="section my-56" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-col gap-x-10">
          {/* Text Section */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
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
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
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
                  src={project.imgLink} // Use imgLink from database
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
