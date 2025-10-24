import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import Components
import Banner from './components/Banner'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import AdminPage from './pages/AdminPage' // Import the admin page component
import ManagePortfolio from './pages/ManagePortfolio'
import UpdatePortfolio from './pages/EditPortfolio'
import Skills from './components/Skills'
import Certifications from './components/Certifications'

const App = () => {
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
                <About />
                <Skills />
                <Certifications/>
                <Services />
                <Work />
                <Contact />
              </>
            }
          />

          {/* Admin Page Route */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/manage-portfolio" element={<ManagePortfolio />} />
          <Route path="/update-portfolio/:id" element={<UpdatePortfolio />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
