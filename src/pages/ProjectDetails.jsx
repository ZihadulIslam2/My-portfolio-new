import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import { fadeIn } from '../variants'
import projectsData from '../data/projects_v2.json'

const ProjectDetails = () => {
  const { projectTitle } = useParams()
  const navigate = useNavigate()

  const decodedTitle = projectTitle ? decodeURIComponent(projectTitle) : ''
  const project = projectsData.find((item) => item.title === decodedTitle)

  if (!project) {
    return (
      <section className="section relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="h2 text-white mb-4">Project not found</h1>
          <p className="text-white/60 mb-8">
            The project you opened is not available in the featured projects
            list.
          </p>
          <button className="btn btn-lg" onClick={() => navigate('/')}>
            Back to home
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="section relative z-10 min-h-screen pt-32">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            ← Back
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            className="bg-[#1A0B33]/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden"
          >
            <div className="relative h-[320px] md:h-[420px] overflow-hidden">
              <img
                src={project.webImage}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3">
                  Featured Project
                </p>
                <h1 className="h2 text-white mb-3">{project.title}</h1>
                <p className="max-w-3xl text-white/75 text-base md:text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.45)}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <div className="bg-[#1A0B33]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Project Overview
              </h2>
              <p className="text-white/65 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.features?.length > 0 && (
              <div className="bg-[#1A0B33]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-white/70">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.demoLinks?.length > 0 && (
                <div className="bg-[#1A0B33]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Live Demo
                  </h3>
                  <div className="space-y-2">
                    {project.demoLinks.map((link) => (
                      <a
                        key={link}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-accent hover:underline underline-offset-4 break-all"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {project.githubLinks?.length > 0 && (
                <div className="bg-[#1A0B33]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Source
                  </h3>
                  <div className="space-y-2">
                    {project.githubLinks.map((link) => (
                      <a
                        key={link}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-accent hover:underline underline-offset-4 break-all"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {project.technologies?.length > 0 && (
              <div className="bg-[#1A0B33]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-white/5 text-white/75 border border-white/10"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails
