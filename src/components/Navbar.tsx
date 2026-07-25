import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Work", href: "/#work" },
    { name: "Skills", href: "/#skills" },
    { name: "Journal", href: "/#journal" },
    { name: "Contact", href: "/#contact" },
];

export const Navbar: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const activeLink = navLinks.find((link) => link.href === `/${location.hash || "#home"}`);
        setActiveTab(activeLink?.name || "Home");
    }, [location.hash]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
            <div
                className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${isScrolled ? "shadow-md shadow-black/10" : ""
                    }`}
            >
                {/* Logo */}
                <Link
                    to="/#home"
                    className="group relative w-9 h-9 flex items-center justify-center rounded-full p-[1px] overflow-hidden"
                >
                    <div className="absolute inset-0 accent-gradient group-hover:rotate-180 transition-transform duration-700" />
                    <div className="relative w-full h-full bg-bg rounded-full flex items-center justify-center">
                        <span className="font-display italic text-[13px] text-text-primary px-1">ZI</span>
                    </div>
                </Link>

                {/* Divider */}
                <div className="hidden md:block w-px h-5 bg-stroke mx-2" />

                {/* Nav Links */}
                <div className="flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setActiveTab(link.name)}
                            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors relative ${activeTab === link.name
                                ? "text-text-primary bg-stroke/50"
                                : "text-muted hover:text-text-primary hover:bg-stroke/50"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-px h-5 bg-stroke mx-2" />

                {/* Say Hi Button */}
                <a
                    href="mailto:zihadul708@gmail.com"
                    className="group relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary overflow-hidden"
                >
                    <span className="absolute inset-0 p-[1px] rounded-full hidden group-hover:block">
                        <span className="absolute inset-0 accent-gradient animate-gradient-shift bg-[length:200%_200%]" />
                    </span>
                    <span className="relative z-10 flex items-center gap-1 bg-surface rounded-full px-3 py-1.5 backdrop-blur-md">
                        Say hi <span className="text-[10px]">↗</span>
                    </span>
                </a>
            </div>
        </nav>
    );
};
