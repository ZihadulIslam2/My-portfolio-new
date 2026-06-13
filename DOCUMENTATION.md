# Portfolio '26 — Documentation

A high-end, futuristic portfolio experience built for **Zihadul Islam**. This document outlines the design system, technical architecture, and content structure of the application.

---

## 🎨 Visual Identity

### Design Philosophy
The portfolio follows a **"Premium Dark"** aesthetic, characterized by high-contrast typography, glassmorphism, and cinematic motion. It balances raw digital elements (like halftone overlays) with elegant serif type and vibrant accent gradients.

### Color Palette (HSL System)
*   **Background (`--bg`)**: `260 30% 2%` — A deep, midnight obsidian.
*   **Surface (`--surface`)**: `260 30% 6%` — Slightly lighter for depth and layering.
*   **Accent (`--accent`)**: `265 89% 65%` — A vibrant electric violet.
*   **Primary Text (`--text-primary`)**: `0 0% 98%` — Crisp off-white.
*   **Muted Text (`--muted`)**: `260 10% 60%` — Deep grey for hierarchy.
*   **Stroke (`--stroke`)**: `260 20% 15%` — Subtle borders for structure.

### Typography
*   **Sans-Serif**: `Inter` — Used for body copy, navigation, and interface elements. Reliable and legible.
*   **Display / Serif**: `Instrument Serif` — Used for headings and artistic emphasis. Often italicized for a high-fashion, editorial feel.

---

## 🏗️ Technical Architecture

### Core Stack
*   **Frontend**: React 18 with Vite + TypeScript.
*   **Styling**: Tailwind CSS for utility-first design and custom CSS variables.
*   **Motion**: 
    *   **GSAP (GreenSock)**: Used for complex timeline animations and high-performance scroll triggers.
    *   **Framer Motion**: Used for component-level entrance animations, layout transitions, and simple hover states.
*   **Video**: `hls.js` for adaptive bitrate streaming of high-quality cinematic backgrounds.
*   **Contact**: `EmailJS` for direct serverless email integration.

---

## 🗺️ Site Structure & Sections

### 1. Loading Screen
*   **Animation**: A custom `requestAnimationFrame` counter (0-100%).
*   **Dynamics**: Cycles through key project words (Creative, Efficient, Scalable) using Framer Motion.

### 2. Navbar
*   **Layout**: A floating glassmorphism pill centered at the top.
*   **Features**: Active tab highlighting, scroll-detection background change, and a custom "Say hi" button with an animated gradient.

### 3. Hero Section (`#home`)
*   **Visual**: Auto-playing HLS video background with a dark overlay.
*   **Logic**: A role-cycling effect that alternates between "Fullstack", "Backend", and "Problem Solver".

### 4. About Section (`#about`)
*   **Layout**: Two-column split.
*   **Visual**: Profile image with a grayscale-to-color transition and a floating ID tag.
*   **Content**: Narrative "Beyond the code" story and core passion points.

### 5. Selected Works (`#work`)
*   **Layout**: A dynamic **Bento Grid** (uneven column spans).
*   **Features**: Halftone image overlays, backdrop-blur hover revealed titles, and scroll-triggered entrances.

### 6. Skills & Tech Stack (`#skills`)
*   **Layout**: A 4-column categorical grid.
*   **Animation**: Staggered card entrances and scale-on-hover skill chips.

### 7. Journal (`#journal`)
*   **Layout**: Vertical list of horizontal pill-shaped entries.
*   **Interactions**: Large rounded hover states and arrow icons.

### 8. Explorations (Gallery)
*   **Visual**: A 300vh parallax section.
*   **Motion**: GSAP `ScrollTrigger` pins the viewport while three image columns move at different speeds (parallax effect).

### 9. Stats Section
*   **Visual**: Three-column display of large, italicized numerals.
*   **Content**: Year experience, projects completed, and client satisfaction.

### 10. Contact Form (`#contact`)
*   **Layout**: Split between a call-to-action heading and a premium input form.
*   **Logic**: Real-time validation and status feedback using EmailJS.

### 11. Footer
*   **Features**: An infinite marquee with GSAP, a flipped video background, and secondary social links.

---

## ✨ Key Global Features

*   **Halftone Overlays**: All project and about images use a custom CSS halftone mask to create a vintage, printed-texture look.
*   **Adaptive Video**: Uses Mux HLS streams to ensure video backgrounds load fast and play smoothly regardless of connection speed.
*   **Responsive Engine**: Fully adapted for mobile with adjusted bento grids and touch-friendly interaction targets.
*   **SEO & Smooth Scroll**: Integrated metadata hooks and Lenis-like smooth scroll characteristics via GSAP.
