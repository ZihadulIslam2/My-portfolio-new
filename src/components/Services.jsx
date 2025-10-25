// import { motion } from 'framer-motion'
// import { fadeIn } from './../variants'

// const Servicesdata = [
//   {
//     name: 'Full Stack Development',
//     description:
//       'I offer end-to-end full stack development services, building responsive front-ends and efficient back-ends using the latest web technologies for scalable solutions.',
//     link: 'Learn more',
//   },
//   {
//     name: 'Front-End Development',
//     description:
//       'I create visually appealing, responsive front-end interfaces using modern frameworks, ensuring seamless user experiences across all devices and platforms.',
//     link: 'Learn more',
//   },
//   {
//     name: 'Back-End Development',
//     description:
//       'I build secure, scalable back-end systems, ensuring efficient data management, seamless API integrations, and optimal performance for robust web applications.',
//     link: 'Learn more',
//   },
// ]

// const Services = () => {
//   return (
//     <section className="py-16 md:py-24" id="services">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* text and image */}
//           <motion.div
//             variants={fadeIn('right', 0.3)}
//             initial="hidden"
//             whileInView={'show'}
//             viewport={{ once: true, amount: 0.3 }}
//             className="flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
//               What I Do.
//             </h2>
//             <h3 className="text-xl md:text-2xl max-w-[455px] mb-8">
//               I&apos;m a freelancer Front-end and back-end developer with one
//               year of experience.
//             </h3>
//             <button className="btn btn-sm">See my work</button>
//           </motion.div>
//           {/* services */}
//           <motion.div
//             variants={fadeIn('left', 0.5)}
//             initial="hidden"
//             whileInView={'show'}
//             viewport={{ once: true, amount: 0.5 }}
//             className="flex-1"
//           >
//             {/* services list */}
//             {Servicesdata.map((service, index) => (
//               <div
//                 className="border-b border-white/20 py-6 flex flex-col md:flex-row gap-4 md:gap-8"
//                 key={index}
//               >
//                 <div className="flex-grow max-w-[476px]">
//                   <h4 className="text-xl font-semibold mb-3">{service.name}</h4>
//                   <p className="text-sm md:text-base leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Services

import { motion } from 'framer-motion'
import { fadeIn } from './../variants'
import { Code2, Layers, Server } from 'lucide-react' // icons

const Servicesdata = [
  {
    name: 'Full Stack Development',
    icon: <Layers size={26} className="text-accent" />,
    description:
      'I provide end-to-end development, from responsive UI to scalable backend systems, ensuring seamless performance and integration using the latest web technologies.',
  },
  {
    name: 'Front-End Development',
    icon: <Code2 size={26} className="text-accent" />,
    description:
      'Crafting clean, interactive, and visually engaging front-end experiences using React, TailwindCSS, and modern JavaScript to deliver responsive and intuitive user interfaces.',
  },
  {
    name: 'Back-End Development',
    icon: <Server size={26} className="text-accent" />,
    description:
      'Building secure, optimized, and maintainable server-side architectures with Express.js, Node.js, and MongoDB for high-performing web applications.',
  },
]

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            What I Do
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            I specialize in developing modern, scalable web solutions with a
            focus on clean code, performance, and beautiful design across the
            full stack.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Servicesdata.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.2 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-accent/30"
            >
              <div className="flex flex-col gap-4 h-full">
                {/* Icon */}
                <div className="p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Learn More link */}
                <a
                  href="#work"
                  className="text-accent text-sm font-medium mt-4 group-hover:underline underline-offset-4"
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-20"
        >
          <a
            href="#work"
            className="inline-block bg-accent text-black font-semibold px-8 py-3 rounded-full hover:bg-accent/80 transition"
          >
            See My Work
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
