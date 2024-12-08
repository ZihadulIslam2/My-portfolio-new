import Portfolio from '../models/portFolioModel'
import { Request, Response } from 'express'

export const addNewPortfolio = async (req: Request, res: Response) => {
  try {
    const newPortfolio = new Portfolio({ ...req.body })
    await newPortfolio.save()
    res.status(201).json(newPortfolio)
  } catch (error) {
    res.status(400).json({ mess: 'Error from controller addNewPortfolio' })
    console.error('Error from controller addNewPortfolio:', error)
  }
}


export const getAllData = async (req: Request, res: Response) => {
  try {
    const data = await Portfolio.find() // Fetch all data
    res.status(200).json({
      success: true,
      data,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      mess: 'Error fetching data',
    })
    console.error('Error fetching data:', error)
  }
}

export const deleteData = async (req: Request, res: Response) => {
  const { id } = req.params // Extract id from route parameters

  try {
    const deletedData = await Portfolio.findByIdAndDelete(id) // Find and delete by _id

    if (!deletedData) {
      return res.status(404).json({
        success: false,
        mess: 'Portfolio not found',
      })
    }

    res.status(200).json({
      success: true,
      mess: 'Portfolio deleted successfully',
      deletedData,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      mess: 'Error deleting data',
    })
    console.error('Error deleting data:', error)
  }
}


export const updateData = async (req: Request, res: Response) => {
  const { id } = req.params // Extract id from route parameters
  const updateFields = req.body // Fields to be updated

  try {
    const updatedData = await Portfolio.findByIdAndUpdate(
      id,
      { $set: updateFields }, // Use $set to update only the provided fields
      { new: true, runValidators: true } // Return updated document and run validators
    )

    if (!updatedData) {
      return res.status(404).json({
        success: false,
        mess: 'Portfolio not found',
      })
    }

    res.status(200).json({
      success: true,
      mess: 'Portfolio updated successfully',
      updatedData,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      mess: 'Error updating data',
    })
    console.error('Error updating data:', error)
  }
}