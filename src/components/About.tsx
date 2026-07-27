import React from "react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
    return (
        <section className="bg-bg py-24 px-6 relative overflow-hidden" id="about">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full group-hover:bg-accent/30 transition-colors duration-700" />
                        <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] overflow-hidden border border-stroke bg-surface/50 backdrop-blur-xl">
                            <img
                                src={"https://res.cloudinary.com/ddtuyxcsl/image/upload/v1766172757/My_Image_1_dlqvc2.jpg"}
                                alt="Zihadul Islam"
                                className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Decorative Tag */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 bg-text-primary text-bg px-8 py-4 rounded-2xl shadow-2xl z-20"
                        >
                            <span className="font-display italic text-xl">Zihadul Islam</span>
                            {/* <p className="text-[10px] uppercase tracking-[0.2em] mt-1 opacity-70">Based in Dhaka</p> */}
                        </motion.div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-px bg-stroke" />
                            <span className="text-xs text-muted uppercase tracking-[0.3em]">The Architect</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-display italic text-text-primary mb-8 leading-[0.9]">
                            Beyond the <span className="italic">code</span>
                        </h2>
                        <div className="space-y-6 text-muted text-lg leading-relaxed">
                            <p>
                                I am a software developer with a passion for building clean, efficient, and user-centric digital experiences. My journey is fueled by a curiosity for new technologies and a commitment to architectural excellence.
                            </p>
                            <p>
                                With a focus on <span className="text-text-primary italic">Fullstack development</span>, I bridge the gap between complex backend logic and seamless frontend interactions. I believe that every line of code should serve a purpose and contribute to a larger, meaningful system.
                            </p>
                            <div className="pt-8 grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-text-primary font-display italic text-2xl mb-2">Passion</h4>
                                    <p className="text-sm">Driven by solving real-world problems through innovative software solutions.</p>
                                </div>
                                <div>
                                    <h4 className="text-text-primary font-display italic text-2xl mb-2">Vision</h4>
                                    <p className="text-sm">Building future-proof applications that empower users and businesses.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
