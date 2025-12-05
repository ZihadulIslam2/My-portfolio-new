import { useState, useEffect } from 'react'
import { appwriteService } from '../services/appwriteService'

const ManagePortfolio = () => {
  const [projects, setProjects] = useState([])

  // Fetch projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await appwriteService.getProjects()
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }

    fetchProjects()
  }, [])

  // Delete a project
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      await appwriteService.deleteProject(id)
      // Remove the deleted project from state
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.$id !== id)
      )
      alert('Project deleted successfully')
    } catch (error) {
      console.error('Error deleting project:', error)
      alert('Failed to delete the project')
    }
  }

  // Edit a project
  const handleEdit = (id) => {
    // Redirect to an edit form page (example)
    window.location.href = `/update-portfolio/${id}`
  }

  return (
    <section className="section my-56" id="manage portfolio">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-col gap-x-10">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative border-2 border-white/50 rounded-xl"
              >
                {/* Project Card */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {/* Image */}
                  <img
                    className="w-full h-full object-cover"
                    src={project.imgLink}
                    alt={project.title}
                  />

                  {/* Subtitle */}
                  <div className="absolute left-12 bottom-24">
                    <span className="text-gradient">{project.subtitle}</span>
                  </div>

                  {/* Title */}
                  <div className="absolute left-12 bottom-14">
                    <span className="text-3xl text-white">{project.title}</span>
                  </div>
                </a>

                {/* Action Buttons */}
                <div className="flex justify-between gap-5 mt-4 p-4">
                  <button
                    onClick={() => handleEdit(project.$id)}
                    className="btn btn-lg bg-blue-500 text-white hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.$id)}
                    className="btn btn-lg bg-red-500 text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManagePortfolio
