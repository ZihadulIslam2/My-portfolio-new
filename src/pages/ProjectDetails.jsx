import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import { fadeIn } from '../variants'
import { useProjectSchema } from '../hooks/useSEOSchema'
import projectsData from '../data/projects_v2.json'
import { Navbar } from '../components/Navbar'

const ProjectDetails = () => {
  const { projectTitle } = useParams()
  const navigate = useNavigate()

  const decodedTitle = projectTitle ? decodeURIComponent(projectTitle) : ''
  const project = projectsData.find((item) => item.title === decodedTitle)

  // Add schema.org structured data for this project
  useProjectSchema(project)

  if (!project) {
    return (
      <section className="relative min-h-screen bg-bg pt-28 pb-16">
        <div className="container relative mx-auto flex min-h-[70vh] items-center justify-center px-4">
          <div className="max-w-2xl rounded-[2rem] border border-stroke bg-surface p-8 text-center backdrop-blur-xl shadow-2xl shadow-black/30">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-muted">
              Featured Project
            </p>
            <h1 className="text-4xl md:text-5xl font-display italic text-text-primary mb-4">Project not found</h1>
            <p className="mx-auto mb-8 max-w-xl text-muted">
              The project you opened is not available in the featured projects
              list.
            </p>
            <button
              className="group relative rounded-full px-8 py-3 bg-text-primary text-bg text-sm font-medium transition-all hover:scale-105 hover:bg-bg hover:text-text-primary"
              onClick={() => navigate('/')}
            >
              <span className="absolute inset-0 rounded-full p-[1px] hidden group-hover:block accent-gradient -z-10" />
              Back to home
            </button>
          </div>
        </div>
      </section>
    )
  }

  const projectLinks = [
    ...project.demoLinks.map((link) => ({ label: 'Live Demo', href: link })),
    ...project.githubLinks.map((link) => ({
      label: 'Source Code',
      href: link,
    })),
  ]

  const statItems = [
    {
      label: 'Features',
      value: project.features?.length || 0,
    },
    {
      label: 'Demo links',
      value: project.demoLinks?.length || 0,
    },
    {
      label: 'Source links',
      value: project.githubLinks?.length || 0,
    },
  ]

  return (
    <section className="relative min-h-screen bg-bg overflow-hidden pt-28 pb-16">
      <Navbar />

      {/* Background Decorative Elements */}
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute right-[-7rem] top-[34rem] h-80 w-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="mb-8 flex items-center justify-between gap-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-4 py-2 text-sm font-medium text-text-primary/70 backdrop-blur-md transition-colors hover:border-white/20 hover:text-text-primary"
          >
            ← Back
          </button>
          <p className="text-xs uppercase tracking-[0.35em] text-muted">
            Featured Project Showcase
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <div className="overflow-hidden rounded-[2rem] border border-stroke bg-surface shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="relative h-[360px] overflow-hidden md:h-[520px]">
                <img
                  src={project.webImage}
                  alt={project.title}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            <div className="rounded-[2rem] border border-stroke bg-surface/50 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-muted">
                Project Summary
              </p>
              <h1 className="mt-4 text-4xl font-display italic leading-tight text-text-primary md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted md:text-lg">
                {project.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.45)}
            initial="hidden"
            animate="show"
            className="space-y-6 lg:sticky lg:top-28"
          >
            <div className="rounded-[2rem] border border-stroke bg-surface/50 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-muted">
                At a glance
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {statItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-stroke bg-bg/50 p-4 text-center"
                  >
                    <div className="text-2xl font-display text-text-primary italic">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-muted">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {projectLinks.length > 0 && (
                <div className="mt-6 space-y-3">
                  {projectLinks.map((item) => (
                    <a
                      key={`${item.label}-${item.href}`}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-between rounded-2xl border border-stroke bg-bg/50 px-4 py-3 text-sm text-text-primary/80 transition-all hover:border-transparent"
                    >
                      <span className="absolute inset-0 rounded-full p-[1px] hidden group-hover:block accent-gradient -z-10" />
                      <span>{item.label}</span>
                      <span className="text-accent">↗</span>
                    </a>
                  ))}
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  className="rounded-full px-6 py-2 border border-stroke text-sm hover:bg-stroke transition-all"
                  onClick={() => navigate(-1)}
                >
                  Go back
                </button>
                <button
                  className="rounded-full px-6 py-2 bg-text-primary text-bg text-sm hover:bg-transparent hover:text-text-primary border border-transparent hover:border-stroke transition-all"
                  onClick={() => navigate('/projects')}
                >
                  View all projects
                </button>
              </div>
            </div>

            {project.features?.length > 0 && (
              <div className="rounded-[2rem] border border-stroke bg-surface/50 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
                <h2 className="text-3xl font-display italic text-text-primary">
                  Key Features
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Selected highlights from the build.
                </p>
                <ul className="mt-6 grid gap-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 rounded-2xl border border-stroke bg-bg/30 px-4 py-3 text-muted"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span className="leading-7">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails
