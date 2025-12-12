import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const recommendations = [
    {
        name: 'John Doe',
        role: 'CEO at TechCorp',
        text: 'Zihadul is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are top-notch.',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
        name: 'Jane Smith',
        role: 'Product Manager',
        text: 'Working with Zihadul was a pleasure. He understood our requirements perfectly and delivered a solution that exceeded our expectations.',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
        name: 'Mike Johnson',
        role: 'Senior Engineer',
        text: 'Great technical skills and a strong work ethic. Zihadul is a valuable asset to any team.',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
]

const Recommendations = () => {
    return (
        <section className="section relative z-10" id="recommendations">
            <div className="container mx-auto">
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="h2 text-white mb-6">Recommendations</h2>
                    <p className="max-w-2xl mx-auto text-white/60 text-lg">
                        What others say about working with me.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recommendations.map((rec, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 0.4 + index * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={rec.image}
                                    alt={rec.name}
                                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                                />
                                <div>
                                    <h4 className="text-lg font-bold text-white">{rec.name}</h4>
                                    <p className="text-sm text-accent">{rec.role}</p>
                                </div>
                            </div>
                            <p className="text-white/70 italic leading-relaxed">
                                "{rec.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Recommendations
