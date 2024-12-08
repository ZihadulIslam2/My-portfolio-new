import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
)

import PortfolioRoute from './routes/addNewPortfolio'
app.use('/api/portfolio', PortfolioRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Portfolio Backend!')
})

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error(err)
  }
}

main()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
