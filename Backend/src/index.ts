import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Portfolio Backend he he ho ho!')
})

async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://zihadul708:01882343242@nodetuts.xnfrv.mongodb.net/my portfolio?retryWrites=true&w=majority&appName=nodetuts'
    )
    console.log('connected to mongodb')
  } catch (err) {
    console.log(err)
  }
}

main()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
