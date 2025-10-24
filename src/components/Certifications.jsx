import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Developer',
      issuer: 'DigiPakistan',
      issued: 'Dec 2023',
      expiration: 'No Expiration Date',
    },
    {
      title: 'MERN Stack Developer',
      issuer: 'Jawan Pakistan',
      issued: 'Feb 2022',
      expiration: 'No Expiration Date',
    },
    {
      title: 'AWS, MicroServices & Serverless Framework',
      issuer: 'Self Learning',
      issued: 'Aug 2022',
      expiration: 'No Expiration Date',
    },
    {
      title: 'SEO - Search Engine Optimization',
      issuer: 'DigiSkills',
      issued: 'Aug 2020',
      expiration: 'No Expiration Date',
    },
    {
      title: 'WordPress Developer',
      issuer: 'DigiSkills',
      issued: 'Aug 2020',
      expiration: 'No Expiration Date',
    },
    {
      title: 'Graphic Designer',
      issuer: 'DigiSkills',
      issued: 'May 2020',
      expiration: 'No Expiration Date',
    },
  ]

  return (
    <section
      id="certifications"
      className="section bg-site bg-no-repeat bg-cover py-16 px-6 lg:px-12 text-white"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-accent mb-4 uppercase">
            Licenses & Certifications
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-gray-300">
            Here are some of the professional certifications and learning
            programs that have shaped my technical and creative skills.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#111] rounded-2xl p-6 shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gradient mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                <span className="font-semibold text-gray-300">Issued by:</span>{' '}
                {cert.issuer}
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Issued:</span>{' '}
                {cert.issued}
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Expires:</span>{' '}
                {cert.expiration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
