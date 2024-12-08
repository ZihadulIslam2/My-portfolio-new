import express from 'express'
const PortfolioRoute = express.Router()
import {
  addNewPortfolio,
  getAllData,
  deleteData,
  updateData,
} from '../controllers/portfoioController'

PortfolioRoute.post('/', addNewPortfolio)

PortfolioRoute.get('/',getAllData)

PortfolioRoute.delete('/:id', deleteData)

PortfolioRoute.put('/:id', updateData)


export default PortfolioRoute
