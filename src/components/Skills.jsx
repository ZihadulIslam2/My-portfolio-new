import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const skillsData = [
  {
    title: 'Programming Languages',
    delay: 0.3,
    items: ['JavaScript', 'TypeScript', 'Python', 'Dart', 'HTML / CSS'],
  },
  {
    title: 'Frontend',
    delay: 0.4,
    items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Framer Motion', 'Flutter'],
  },
  {
    title: 'Backend',
    delay: 0.5,
    items: ['Node.js', 'Express.js', 'Appwrite', 'Firebase', 'REST APIs', 'Fast'],
  },
  {
    title: 'Database & Tools',
    delay: 0.6,
    items: ['MongoDB', 'PostgreSQL', 'Git', 'Docker'],
  },
]

const Skills = () => {
  return (
    <section className="section relative z-10" id="skills">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="h2 text-white mb-6">Skills & Tech Stack</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            A comprehensive overview of the technologies and tools I use to
            bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map(({ title, delay, items }, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', delay)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#1A0B33]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-accent/50 transition-colors duration-300 group"
            >
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-accent transition-colors">
                {title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium text-white/70 bg-white/5 rounded-lg border border-white/5 group-hover:bg-white/10 group-hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
