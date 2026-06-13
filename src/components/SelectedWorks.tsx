import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
    {
        title: "Multi-Sector Booking Platform",
        image: "https://res.cloudinary.com/dynsi60i4/image/upload/v1778855131/screencapture-bookersi-2026-05-15-20_20_42_nsipvd.png",
        colSpan: "md:col-span-7",
        aspect: "aspect-video md:aspect-auto md:h-[450px]",
    },
    {
        title: "HierroMarket Custom eCommerce Platform",
        image: "https://res.cloudinary.com/dynsi60i4/image/upload/v1778855592/screencapture-hierroamedida-2026-05-15-20_32_17_wz8y5n.png",
        colSpan: "md:col-span-5",
        aspect: "aspect-video md:aspect-auto md:h-[450px]",
    },
    {
        title: "Board Games E-Commerce Website & Dynamic QR Code Integration",
        image: "https://res.cloudinary.com/dynsi60i4/image/upload/v1778855960/screencapture-doundogames-2026-05-15-20_38_55_vgskmy.png",
        colSpan: "md:col-span-5",
        aspect: "aspect-video md:aspect-auto md:h-[450px]",
    },
    {
        title: "Live Event Audience Interaction Platform",
        image: "https://res.cloudinary.com/dynsi60i4/image/upload/v1778926433/screencapture-lfstactivation-cloud-2026-05-16-16_12_01_luvai2.png",
        colSpan: "md:col-span-7",
        aspect: "aspect-video md:aspect-auto md:h-[450px]",
    },
];

export const SelectedWorks: React.FC = () => {
    return (
        <section className="bg-bg py-24 md:py-32 px-6" id="work">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-px bg-stroke" />
                            <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text-primary">
                            Featured <span className="italic">projects</span>
                        </h2>
                        <p className="text-muted mt-4 max-w-md">
                            A selection of projects I've worked on, from concept to launch.
                        </p>
                    </div>

                    <Link to="/projects" className="hidden md:inline-flex items-center gap-2 rounded-full px-6 py-3 border border-stroke text-sm group hover:border-transparent transition-all relative">
                        <span className="absolute inset-0 rounded-full p-[1px] hidden group-hover:block accent-gradient -z-10" />
                        View all work <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${project.colSpan} ${project.aspect} group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer`}
                        >
                            <Link to={`/projects/${encodeURIComponent(project.title)}`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="halftone-overlay absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none" />

                                <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-500 flex items-center justify-center">
                                    <div className="relative p-[1px] rounded-full overflow-hidden">
                                        <div className="absolute inset-0 accent-gradient animate-gradient-shift bg-[length:200%_200%]" />
                                        <div className="relative bg-white text-black px-6 py-2 rounded-full text-sm font-medium">
                                            View — <span className="font-display italic">{project.title}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
