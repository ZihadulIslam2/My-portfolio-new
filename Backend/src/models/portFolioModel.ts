import mongoose from 'mongoose'

const portfolioSchema = new mongoose.Schema(
  {
    imgLink: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
  { timestamps: true }
)

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

export default Portfolio
