import React, { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'

gsap.registerPlugin(ScrollTrigger)

const roles = ['Fullstack Developer', 'Creative thinker', 'Problem Solver']

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const hlsUrl =
      'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(hlsUrl)
      hls.attachMedia(video)
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to('.name-reveal', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.5,
      }).to(
        '.blur-in',
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1,
          stagger: 0.1,
        },
        '-=0.8',
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <Navbar />

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-4xl">
        <div className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          AVAILABLE FOR WORK
        </div>
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 opacity-0">
          Zihadul Islam
        </h1>
        <div className="blur-in text-lg md:text-xl text-text-primary mb-4 h-8 flex items-center justify-center gap-2">
          A{' '}
          <span
            key={roleIndex}
            className="font-display italic animate-role-fade-in inline-block text-accent"
          >
            {roles[roleIndex]}
          </span>{' '}
        </div>
        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-12">
          Software developer crafting efficient, scalable applications and
          seamless digital interactions.
        </p>

        <div className="blur-in flex flex-wrap justify-center gap-4">
          <Link
            to="/#work"
            className="group relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg transition-all hover:scale-105 hover:bg-bg hover:text-text-primary"
          >
            <span className="absolute inset-0 rounded-full p-[1px] hidden group-hover:block accent-gradient -z-10" />
            See Works
          </Link>
          <a
            href="https://drive.google.com/file/d/1PW77VLwffR73auXTbb6OO2vfuxeCrlSA/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary transition-all hover:scale-105 hover:border-transparent flex items-center justify-center"
          >
            <span className="absolute inset-0 rounded-full p-[1px] hidden group-hover:block accent-gradient -z-10" />
            View Resume
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-muted uppercase tracking-[0.2em]">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}
