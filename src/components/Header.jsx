import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [bg, setBg] = useState(false)
  const inLink = 'https://www.linkedin.com/in/zihadulislam2/'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBg(true)
      } else {
        setBg(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`${bg ? 'bg-black/50 backdrop-blur-lg py-4 shadow-lg' : 'bg-transparent py-8'
        } fixed top-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link to="/">
            <h1 className="text-2xl font-bold font-primary">
              <span className="text-gradient">Zihadul</span>{' '}
              <span className="text-white">Islam</span>
            </h1>
          </Link>
          {/* button */}
          <a href={inLink} target="_blank" rel="noreferrer">
            <button className="btn btn-sm btn-accent">Work with me</button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
