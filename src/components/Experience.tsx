import React from "react";
import { motion } from "framer-motion";

const experienceData = [
    {
        company: "Betopia Group",
        location: "Mohakhali, Dhaka",
        role: "Software Engineer (Backend Focused)",
        period: "December 2024 — Present",
        responsibilities: [
            "Designed and developed scalable backend services and REST APIs for multiple web and mobile applications using Node.js, Express.js, NestJS, and MongoDB, focusing on performance, security, and maintainable architecture.",
            "Owned backend development for multiple client-facing products including FinTech, E-Commerce, Transportation, and Media platforms, delivering features such as payment integration, authentication, real-time communication, and business logic implementation.",
            "Designed and optimized database schemas, queries, and API workflows using MongoDB and PostgreSQL to improve application reliability and response performance.",
            "Collaborated with frontend and product teams to translate business requirements into scalable technical solutions and deliver production-ready features within Agile development workflows.",
        ],
        keyProjects: [
            {
                name: "Transport Logic",
                description: "Developed a bus route and ticket booking management system to streamline public transit operations.",
            },
            {
                name: "FinTech Platform",
                description: "Engineered the backend for a real-time trading platform featuring portfolio tracking and financial analytics.",
            },
            {
                name: "E-Commerce",
                description: "Launched the beta version of an organic products marketplace, handling inventory and order processing.",
            },
            {
                name: "Media Streaming",
                description: "Built a secure audio streaming backend (MP3 Library) with playlist management and subscription tiers.",
            },
            {
                name: "Real-Time Communication",
                description: "Implemented Socket.io infrastructure for a Chat & Call application, enabling instant messaging and voice features.",
            },
        ],
    },
];

export const Experience: React.FC = () => {
    return (
        <section className="bg-bg py-24 px-6 relative overflow-hidden" id="experience">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

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
                        <span className="text-xs text-muted uppercase tracking-[0.3em]">Career</span>
                        <div className="w-8 h-px bg-stroke" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display italic text-text-primary mb-6">
                        Work <span className="italic">Experience</span>
                    </h2>
                </motion.div>

                <div className="max-w-[900px] mx-auto">
                    {experienceData.map((exp, idx) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-surface border border-stroke rounded-[2rem] p-8 md:p-10 hover:border-accent/20 transition-all duration-500"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-display italic text-text-primary">
                                        {exp.company}
                                    </h3>
                                    <p className="text-sm text-muted mt-1">{exp.location}</p>
                                </div>
                                <span className="px-4 py-1.5 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-xl whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>

                            <p className="text-lg text-text-primary font-medium mb-6">{exp.role}</p>

                            <div className="space-y-3 mb-8">
                                {exp.responsibilities.map((item, i) => (
                                    <div key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <h4 className="text-lg font-display italic text-text-primary mb-4">
                                    Key Contributions & Projects
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {exp.keyProjects.map((project) => (
                                        <div
                                            key={project.name}
                                            className="bg-bg border border-stroke rounded-2xl p-5 hover:border-accent/20 transition-all duration-300"
                                        >
                                            <h5 className="text-sm font-medium text-accent mb-2">
                                                {project.name}
                                            </h5>
                                            <p className="text-xs text-muted leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
