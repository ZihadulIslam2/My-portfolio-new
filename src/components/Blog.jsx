import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const blogPosts = [
    {
        title: 'Getting Started with React 19',
        excerpt: 'Explore the new features and improvements in the latest version of React.',
        date: 'Dec 15, 2024',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        link: '#',
    },
    {
        title: 'Mastering Tailwind CSS',
        excerpt: 'Tips and tricks to build beautiful, responsive UIs faster with Tailwind.',
        date: 'Nov 28, 2024',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop',
        link: '#',
    },
    {
        title: 'The Future of Web Development',
        excerpt: 'Trends and technologies that will shape the web in 2025 and beyond.',
        date: 'Oct 10, 2024',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop',
        link: '#',
    },
]

const Blog = () => {
    return (
        <section className="section relative z-10" id="blog">
            <div className="container mx-auto">
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="h2 text-white mb-6">Latest Articles</h2>
                    <p className="max-w-2xl mx-auto text-white/60 text-lg">
                        Thoughts, tutorials, and insights on web development and design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 0.4 + index * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between text-xs text-white/40 mb-4">
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-white/60 text-sm mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <a
                                    href={post.link}
                                    className="text-accent text-sm font-medium hover:underline underline-offset-4"
                                >
                                    Read More →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog
