import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoute from './routes/contactMe.Route'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow requests from the React app
    credentials: true, // Allow cookies if needed
  })
)

// Routes
import PortfolioRoute from './routes/addNewPortfolio'
app.use('/api/portfolio', PortfolioRoute)
app.use('/api', contactRoute)

// Test Endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Portfolio Backend!')
})

// Connect to MongoDB
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error(err)
  }
}

main()

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
