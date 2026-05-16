import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import Components
import Banner from './components/Banner'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
// import Services from './components/Services' // Removed in favor of Experience
import Experience from './components/Experience'
import Work from './components/Work'
import Contact from './components/Contact'
import AdminPage from './pages/AdminPage'
import ManagePortfolio from './pages/ManagePortfolio'
import UpdatePortfolio from './pages/EditPortfolio'
import ProjectDetails from './pages/ProjectDetails'
import Skills from './components/Skills'
import Recommendations from './components/Recommendations'
import Blog from './components/Blog'

// SEO Hook
import { useSEOSchema } from './hooks/useSEOSchema'

const App = () => {
  // Add schema.org structured data for homepage
  useSEOSchema()
  return (
    <Router>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Nav />

        {/* Define Routes */}
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Work />
                <Skills />
                <Experience />
                <About />
                <Recommendations />
                <Contact />
                <Blog />
                {/* <Certifications/> */}
                {/* <Services /> */}
              </>
            }
          />

          {/* Admin Page Route */}
          <Route path="/projects/:projectTitle" element={<ProjectDetails />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/manage-portfolio" element={<ManagePortfolio />} />
          <Route path="/update-portfolio/:id" element={<UpdatePortfolio />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
