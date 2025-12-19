import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { appwriteService } from '../services/appwriteService'

const Work = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await appwriteService.getProjects()
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section className="section relative z-10" id="work">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="h2 text-white mb-6">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            A selection of projects that showcase my passion for building
            scalable and user-centric applications.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.3 + index * 0.1)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.1 }}
              className="group relative"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full bg-[#1A0B33]/60   backdrop-blur-xl  border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-[240px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B33]/60 to-transparent z-10 opacity-60" />
                  <img
                    src={project.imgLink}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-6 relative z-20 -mt-12">
                  <div className="bg-[#1A0B33]/80 backdrop-blur-md border border-white/5 p-4 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {project.subtitle}
                    </p>

                    {/* Tech Stack */}
                    {project.techStack && (
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded-md bg-white/5 text-white/80 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </a>

              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
