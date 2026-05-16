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
      <section className="relative min-h-screen overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),_transparent_35%),linear-gradient(180deg,#0B0616_0%,#12081F_50%,#0B0616_100%)]" />
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="container relative mx-auto flex min-h-[70vh] items-center justify-center px-4">
          <div className="max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl shadow-2xl shadow-black/30">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/40">
              Featured Project
            </p>
            <h1 className="h2 text-white mb-4">Project not found</h1>
            <p className="mx-auto mb-8 max-w-xl text-white/60">
              The project you opened is not available in the featured projects
              list.
            </p>
            <button className="btn btn-lg" onClick={() => navigate('/')}>
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
    <section className="relative min-h-screen overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.06),_transparent_24%),linear-gradient(180deg,#0B0616_0%,#12081F_45%,#0B0616_100%)]" />
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute right-[-7rem] top-[34rem] h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="mb-8 flex items-center justify-between gap-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-md transition-colors hover:border-white/20 hover:text-white"
          >
            ← Back
          </button>
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
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
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="relative h-[360px] overflow-hidden md:h-[520px]">
                <img
                  src={project.webImage}
                  alt={project.title}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,6,22,0.05)_0%,rgba(11,6,22,0.18)_100%)]" />
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#140A25]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                Project Summary
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
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
            <div className="rounded-[2rem] border border-white/10 bg-[#140A25]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                At a glance
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {statItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <div className="text-2xl font-semibold text-white">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-white/45">
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
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition-colors hover:border-white/20 hover:bg-white/10"
                    >
                      <span>{item.label}</span>
                      <span className="text-accent">↗</span>
                    </a>
                  ))}
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn btn-sm" onClick={() => navigate(-1)}>
                  Go back
                </button>
                <button
                  className="btn btn-sm btn-accent"
                  onClick={() => navigate('/')}
                >
                  View all projects
                </button>
              </div>
            </div>

            {project.features?.length > 0 && (
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
                <h2 className="text-2xl font-semibold text-white">
                  Key Features
                </h2>
                <p className="mt-2 text-sm text-white/45">
                  Selected highlights from the build.
                </p>
                <ul className="mt-6 grid gap-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/75"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span className="leading-7">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.technologies?.length > 0 && (
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/70"
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
