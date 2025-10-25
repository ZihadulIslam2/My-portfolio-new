import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const skillsData = [
  {
    title: 'Programming Languages',
    delay: 0.4,
    items: ['JavaScript', 'HTML / CSS', 'Python', 'TypeScript', 'Dart'],
  },
  {
    title: 'Frontend Development',
    delay: 0.5,
    items: ['React', 'React Native', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    delay: 0.6,
    items: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Databases',
    delay: 0.7,
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Tools & Technologies',
    delay: 0.8,
    items: ['Git', 'Agile / Scrum', 'Postman', 'VS Code'],
  },
  {
    title: 'Design',
    delay: 0.9,
    items: [
      'Figma',
      'Adobe Illustrator',
      'UI/UX Design',
      'Wireframing & Prototyping',
    ],
  },
]

const Skills = () => {
  return (
    <section className="min-h-screen py-10 px-4" id="skills">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-accent mb-4 uppercase">
            Skills
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-gray-300">
            I&apos;ve worked with a range of technologies in the web development
            world, from frontend to backend and everything in between.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map(({ title, delay, items }, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', delay)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#200E40] p-6 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gradient mb-4">
                {title}
              </h3>
              <ul className="space-y-2 text-gray-300">
                {items.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
