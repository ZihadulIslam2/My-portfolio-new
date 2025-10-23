import express from 'express'
const PortfolioRoute = express.Router()
import {
  addNewPortfolio,
  getAllData,
  deleteData,
  updateData,
  getSinglePortfolio,
} from '../controllers/portfoioController'

PortfolioRoute.post('/', addNewPortfolio)

PortfolioRoute.get('/', getAllData)

PortfolioRoute.delete('/:id', deleteData)

PortfolioRoute.put('/:id', updateData)

PortfolioRoute.get('/:id', getSinglePortfolio)

export default PortfolioRoute
