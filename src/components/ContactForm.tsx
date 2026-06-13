import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.warn('EmailJS keys are missing.');
            setStatus({ type: 'error', message: 'Email configuration missing.' });
            setLoading(false);
            return;
        }

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                to_name: 'Zihadul Islam',
                message: formData.message,
            };

            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

            if (response.status === 200) {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-bg py-24 px-6 overflow-hidden" id="contact">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-px bg-stroke" />
                            <span className="text-xs text-muted uppercase tracking-[0.3em]">Contact</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-display text-text-primary mb-8">
                            Let's <span className="italic">collaborate</span> and build something <span className="italic">extraordinary</span>
                        </h2>
                        <p className="text-muted text-lg max-w-md mb-12 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="flex gap-4">
                            {[
                                { icon: Mail, href: "mailto:zihadul708@gmail.com" },
                                { icon: Github, href: "https://github.com/ZihadulIslam2" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/zihadulislam2/" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full bg-surface border border-stroke text-muted hover:text-text-primary transition-all duration-300"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: true }}
                        className="bg-surface border border-stroke rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
                    >
                        <h3 className="text-2xl font-display italic text-text-primary mb-10">Send me a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-muted ml-1">Your name</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Jane Doe"
                                    required
                                    className="w-full bg-bg/50 border border-stroke rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-text-primary placeholder:text-muted/30"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-muted ml-1">Your email</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="jane@example.com"
                                    required
                                    className="w-full bg-bg/50 border border-stroke rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-text-primary placeholder:text-muted/30"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-muted ml-1">Your message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full bg-bg/50 border border-stroke rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-text-primary placeholder:text-muted/30 min-h-[150px] resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="group relative w-full rounded-2xl px-8 py-5 bg-text-primary text-bg font-medium transition-all hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                <span className="absolute inset-0 rounded-2xl p-[1px] hidden group-hover:block accent-gradient -z-10" />
                                {loading ? 'Sending...' : 'Send Message'}
                                {!loading && <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                            </button>

                            {status.message && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`text-center text-xs font-medium tracking-wide ${status.type === 'success' ? 'text-green-400' : 'text-red-400'
                                        }`}
                                >
                                    {status.message}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
