import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { appwriteService } from '../services/appwriteService'

const AdminPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [successMessage, setSuccessMessage] = useState('')

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const file = data.imgLink[0]; // Get the file object
      await appwriteService.addProject({
        title: data.title,
        subtitle: data.subtitle,
        link: data.link,
      }, file);

      // Show success message
      setSuccessMessage('Portfolio added successfully!')

      // Clear the form fields
      reset()
    } catch (error) {
      console.error('Error posting data:', error)
      setSuccessMessage('Failed to add portfolio. Please try again.')
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1>Admin Page</h1>
        <p>Welcome to the admin page of my portfolio!</p>
        {/* manage portfolio */}
        <div>
          <Link to="/manage-portfolio">
            <button className="btn btn-lg m-20">Manage Portfolio</button>
          </Link>
          <h1>Add New Portfolio</h1>
        </div>
        <div className="w-100 border-white border-4 rounded-lg my-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Image Link */}
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder-white focus:border-accent transition-all"
              type="file"
              placeholder="Img Link"
              {...register('imgLink', { required: 'Image is required' })}
            />
            {errors.imgLink && <span>{errors.imgLink.message}</span>}

            {/* Image Title */}
            <input
              className="bg-transparent border-b border-t py-3 outline-none w-full placeholder-white focus:border-accent transition-all"
              type="text"
              placeholder="Img Title"
              {...register('title', { required: 'Image title is required' })}
            />
            {errors.title && <span>{errors.title.message}</span>}

            {/* Image Subtitle */}
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder-white focus:border-accent transition-all"
              type="text"
              placeholder="Img Subtitle"
              {...register('subtitle', {
                required: 'Image subtitle is required',
              })}
            />
            {errors.subtitle && <span>{errors.subtitle.message}</span>}

            {/* Project Demo Link */}
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder-white focus:border-accent transition-all"
              type="text"
              placeholder="Project Demo Link"
              {...register('link', {
                required: 'Demo link is required.',
              })}
            />
            {errors.link && <span>{errors.link.message}</span>}

            {/* Submit Button */}
            <button className="btn btn-lg m-24" type="submit">
              Add New Portfolio
            </button>
          </form>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mt-5 text-green-500 font-semibold">
            {successMessage}
          </div>
        )}
      </div>
    </>
  )
}

export default AdminPage
