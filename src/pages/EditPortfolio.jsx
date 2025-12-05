import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { appwriteService } from '../services/appwriteService'

const UpdatePortfolio = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true) // Loading state
  const { id: portfolioId } = useParams()
  const navigate = useNavigate()

  // Fetch existing data to populate the form
  useEffect(() => {
    const fetchPortfolio = async () => {
      setIsLoading(true) // Start loading
      try {
        const result = await appwriteService.getProject(portfolioId)

        // Assuming the portfolio data is under `result`
        reset({
          // imgLink is not pre-filled for file input, but we can show it if we want. 
          // For now, we just populate text fields.
          title: result.title,
          subtitle: result.subtitle,
          link: result.link,
        })
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
        setErrorMessage('Failed to load portfolio data. Please try again.')
      } finally {
        setIsLoading(false) // Stop loading
      }
    }

    if (portfolioId) fetchPortfolio()
  }, [portfolioId, reset])

  // Update portfolio
  const onSubmit = async (data) => {
    try {
      const file = data.imgLink && data.imgLink.length > 0 ? data.imgLink[0] : null;

      await appwriteService.updateProject(portfolioId, {
        title: data.title,
        subtitle: data.subtitle,
        link: data.link,
      }, file);

      // Show success message
      setSuccessMessage('Portfolio updated successfully!')
      setErrorMessage('')

      // Redirect to the manage portfolio page
      navigate('/manage-portfolio')
    } catch (error) {
      console.error('Error updating portfolio:', error)
      setErrorMessage('Failed to update portfolio. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Update Portfolio</h1>
      <p>Update the existing portfolio details!</p>

      {/* Show loading state */}
      {isLoading ? (
        <div>Loading portfolio data...</div>
      ) : (
        <>
          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}

          <div className="w-100 border-white border-4 rounded-lg my-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Image Link (File Upload) */}
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder-white focus:border-accent transition-all"
                type="file"
                placeholder="Img Link"
                {...register('imgLink', { required: false })} // Not required for update
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
                Update Portfolio
              </button>
            </form>
          </div>
        </>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="mt-5 text-green-500 font-semibold">
          {successMessage}
        </div>
      )}
    </div>
  )
}

export default UpdatePortfolio
