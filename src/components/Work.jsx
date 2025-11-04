import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Work = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/portfolio/`
        )
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section className="section my-56 bg-site bg-cover" id="work">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="h2 text-accent mb-4">My Latest Work</h2>
          <p className="max-w-2xl mx-auto text-white/80">
            Explore my most recent projects — crafted with attention to detail,
            modern design, and clean functionality.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/20 shadow-lg hover:shadow-accent/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="h-64 w-full overflow-hidden relative">
                <img
                  src={project.imgLink}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 mb-3">{project.subtitle}</p>
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/10 text-xs text-white px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <button className="px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent/80 transition">
                  View Project
                </button>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Work

// import { useState, useEffect } from 'react'
// //motion
// import { motion } from 'framer-motion'
// //variants
// import { fadeIn } from '../variants'

// const Work = () => {
//   // State to store projects
//   const [projects, setProjects] = useState([])

//   // Fetch projects from the backend
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_API_URL}/api/portfolio/`
//         )
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`)
//         }
//         const data = await response.json()
//         setProjects(data)
//         console.log(projects)
//       } catch (error) {
//         console.error('Error fetching projects:', error)
//       }
//     }

//     fetchProjects()
//   }, [])

//   return (
//     <section className="section my-56" id="work">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-col gap-x-10">
//           {/* Text Section */}
//           <motion.div
//             variants={fadeIn('right', 0.3)}
//             initial="hidden"
//             whileInView={'show'}
//             viewport={{ once: true, amount: 0.3 }}
//             className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0"
//           >
//             <div>
//               <h2 className="h2 leading-tight text-accent">
//                 My Latest <br /> work
//               </h2>
//               <p className="max-w-sm mb-16">
//                 Explore my latest projects, showcasing innovative designs and
//                 development, focused on delivering responsive, scalable web
//                 applications and solutions.
//               </p>
//               {/* <button className="btn btn-sm">View all projects</button> */}
//             </div>
//           </motion.div>

//           {/* Projects Section */}
//           <motion.div
//             variants={fadeIn('left', 0.3)}
//             initial="hidden"
//             whileInView={'show'}
//             viewport={{ once: true, amount: 0.3 }}
//             className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
//           >
//             {projects.map((project, index) => (
//               <a
//                 key={index}
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative overflow-hidden border-2 border-white/50 rounded-xl block"
//               >
//                 {/* Overlay */}
//                 <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

//                 {/* Image */}
//                 <img
//                   className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
//                   src={project.imgLink} // Use imgLink from database
//                   alt={project.title}
//                 />

//                 {/* Subtitle */}
//                 <div
//                   className="absolute left-12 z-50
//       sm:-bottom-full sm:group-hover:bottom-24 bottom-24 transition-all duration-500"
//                 >
//                   <span className="text-gradient">{project.subtitle}</span>
//                 </div>

//                 {/* Title */}
//                 <div
//                   className="absolute left-12 z-50
//       sm:-bottom-full sm:group-hover:bottom-14 bottom-14 transition-all duration-700"
//                 >
//                   <span className="text-3xl text-white">{project.title}</span>
//                 </div>
//               </a>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Work
