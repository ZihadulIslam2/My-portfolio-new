import React from "react";
import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Languages",
        skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C", "C++", "Go"],
    },
    {
        category: "Frontend",
        skills: ["React.js", "Next.js", "React Native", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express.js", "NestJS", "FastAPI", "Gin", "Socket.IO", "JWT", "REST APIs", "FFmpeg (Video HLS)"],
    },
    {
        category: "Testing",
        skills: ["Jest", "Supertest", "Unit Testing", "Integration Testing"],
    },
    {
        category: "Databases",
        skills: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Redis"],
    },
    {
        category: "DevOps & Cloud",
        skills: ["Git", "Docker", "Nginx", "PM2", "Linux", "VPS Management", "Cloud Deployment", "CI/CD", "GitHub Actions"],
    },
    {
        category: "Integrations",
        skills: ["Stripe", "PayPal", "Braintree", "Google Maps API"],
    },
    {
        category: "AI/LLM Exposure",
        skills: ["OpenAI API", "LLM Integrations", "Vector Database Basics", "AI Automation Workflows"],
    },
];

export const SkillsSection: React.FC = () => {
    return (
        <section className="bg-bg py-24 px-6 relative overflow-hidden" id="skills">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1200px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-8 h-px bg-stroke" />
                        <span className="text-xs text-muted uppercase tracking-[0.3em]">Expertise</span>
                        <div className="w-8 h-px bg-stroke" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display italic text-text-primary mb-6">
                        Skills & <span className="italic">Tech Stack</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        A comprehensive overview of the technologies and tools I use to bring ideas to life, focusing on building scalable and high-performance applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-surface border border-stroke rounded-[2rem] p-8 hover:border-accent/20 transition-all duration-500 group"
                        >
                            <h3 className="text-xl font-display italic text-text-primary mb-6 group-hover:text-accent transition-colors">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-3 py-1.5 text-xs font-medium text-muted bg-bg border border-stroke rounded-xl transition-all hover:bg-stroke hover:text-text-primary cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
