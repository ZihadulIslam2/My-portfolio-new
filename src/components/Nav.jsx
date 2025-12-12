import { BiHomeAlt, BiUser, BiCodeAlt } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
    <nav className="fixed bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
          className="w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center border border-white/10 shadow-lg"
        >
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="nav-link"
          >
            <BiHomeAlt size={20} />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="nav-link"
          >
            <BsBriefcase size={20} />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="nav-link"
          >
            <BiCodeAlt size={20} />
          </Link>
          <Link
            to="experience"
            activeClass="active"
            smooth={true}
            spy={true}
            className="nav-link"
          >
            <BsClipboardData size={20} />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="nav-link"
          >
            <BiUser size={20} />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="nav-link"
          >
            <BsChatSquareText size={20} />
          </Link>
        </motion.div>
      </div>
    </nav>
  )
}

export default Nav
