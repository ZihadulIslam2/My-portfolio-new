import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const experienceData = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Frontend Developer',
    period: '2023 - Present',
    description:
      'Leading the frontend development of core products using React and Next.js. Improved site performance by 40% and implemented a new design system.',
  },
  {
    company: 'Creative Agency',
    role: 'Web Developer Intern',
    period: '2022 - 2023',
    description:
      'Collaborated with designers to translate Figma mockups into responsive web pages. Built interactive components using JavaScript and Tailwind CSS.',
  },
]

const Experience = () => {
  return (
    <section className="section relative z-10" id="experience">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="h2 text-white mb-6">Experience</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            My professional journey and the companies I've had the privilege to
            work with.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.4 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative pl-8 pb-12 last:pb-0 border-l border-white/10"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-accent" />

              <div className="bg-[#1A0B33]/60   backdrop-blur-xl border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm text-white/40 font-medium bg-white/5 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-accent font-medium mb-4">{exp.company}</h4>
                <p className="text-white/60 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
