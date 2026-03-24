import { databases, storage } from '../appwrite'
import { ID, Query } from 'appwrite'

// Appwrite configuration IDs from environment variables
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID
const PORTFOLIO_TABLE_ID = import.meta.env.VITE_APPWRITE_PORTFOLIO_TABLE_ID
const MESSAGES_TABLE_ID = import.meta.env.VITE_APPWRITE_MESSAGES_TABLE_ID
const BUCKET_ID = import.meta.env.VITE_APPWRITE_BUCKET_ID

/**
 * Appwrite Service - Handles all database and storage operations
 * Manages projects (Featured Projects section) and messages
 */
export const appwriteService = {
  /**
   * Portfolio Projects Management
   */

  /**
   * Fetch all projects from Appwrite database
   * Used by Featured Projects section to display projects
   * @returns {Array} Array of project documents ordered by creation date (newest first)
   * @throws {Error} If database query fails
   */
  async getProjects() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        PORTFOLIO_TABLE_ID,
        [Query.orderDesc('$createdAt')],
      )
      return response.documents
    } catch (error) {
      console.error('Appwrite service :: getProjects :: error', error)
      throw error
    }
  },

  /**
   * Add a new project to the portfolio
   * Handles file upload to storage and document creation in database
   * @param {Object} data - Project data (title, subtitle, link, techStack, etc.)
   * @param {File} file - Project image file to upload (optional)
   * @returns {Object} Created project document
   * @throws {Error} If project creation fails
   */
  async addProject(data, file) {
    try {
      let fileId = null
      let imgLink = data.imgLink // Fallback if no file uploaded

      // Upload image to Appwrite storage
      if (file) {
        const fileUpload = await storage.createFile(
          BUCKET_ID,
          ID.unique(),
          file,
        )
        fileId = fileUpload.$id
        const result = storage.getFileView(BUCKET_ID, fileId)
        imgLink = result.href ? result.href : result
      }

      // Create project document in database with image metadata
      const document = await databases.createDocument(
        DATABASE_ID,
        PORTFOLIO_TABLE_ID,
        ID.unique(),
        {
          ...data,
          imgLink,
          imgId: fileId, // Store file ID for deletion
        },
      )
      return document
    } catch (error) {
      console.error('Appwrite service :: addProject :: error', error)
      throw error
    }
  },

  /**
   * Update existing project in the portfolio
   * Handles file replacement and old file cleanup
   * @param {string} id - Project document ID
   * @param {Object} data - Updated project data
   * @param {File} file - New project image file (optional)
   * @returns {Object} Updated project document
   * @throws {Error} If project update fails
   */
  async updateProject(id, data, file) {
    try {
      let updates = { ...data }

      // Handle image replacement
      if (file) {
        // Upload new file
        const fileUpload = await storage.createFile(
          BUCKET_ID,
          ID.unique(),
          file,
        )
        const fileId = fileUpload.$id
        const result = storage.getFileView(BUCKET_ID, fileId)
        updates.imgLink = result.href ? result.href : result
        updates.imgId = fileId

        // Delete old file if exists (fetch document to get old imgId)
        const oldDoc = await databases.getDocument(
          DATABASE_ID,
          PORTFOLIO_TABLE_ID,
          id,
        )
        if (oldDoc.imgId) {
          await storage
            .deleteFile(BUCKET_ID, oldDoc.imgId)
            .catch((err) => console.log('Old file delete failed', err))
        }
      }

      // Update project document
      const document = await databases.updateDocument(
        DATABASE_ID,
        PORTFOLIO_TABLE_ID,
        id,
        updates,
      )
      return document
    } catch (error) {
      console.error('Appwrite service :: updateProject :: error', error)
      throw error
    }
  },

  /**
   * Delete a project from portfolio
   * Removes both database document and associated image file
   * @param {string} id - Project document ID
   * @returns {boolean} True if deletion successful
   * @throws {Error} If deletion fails
   */
  async deleteProject(id) {
    try {
      // Get document to find associated file ID
      const document = await databases.getDocument(
        DATABASE_ID,
        PORTFOLIO_TABLE_ID,
        id,
      )

      // Delete image file from storage
      if (document.imgId) {
        await storage
          .deleteFile(BUCKET_ID, document.imgId)
          .catch((err) => console.log('File delete failed', err))
      }

      // Delete project document from database
      await databases.deleteDocument(DATABASE_ID, PORTFOLIO_TABLE_ID, id)
      return true
    } catch (error) {
      console.error('Appwrite service :: deleteProject :: error', error)
      throw error
    }
  },

  /**
   * Get a single project by ID
   * @param {string} id - Project document ID
   * @returns {Object} Project document
   * @throws {Error} If project not found or query fails
   */
  async getProject(id) {
    try {
      return await databases.getDocument(DATABASE_ID, PORTFOLIO_TABLE_ID, id)
    } catch (error) {
      console.error('Appwrite service :: getProject :: error', error)
      throw error
    }
  },

  /**
   * Contact Messages Management
   */

  /**
   * Send a new contact message
   * Stores contact form submissions in the database
   * @param {Object} data - Message data (name, email, message, subject, etc.)
   * @returns {Object} Success/failure response object
   */
  async sendMessage(data) {
    try {
      await databases.createDocument(
        DATABASE_ID,
        MESSAGES_TABLE_ID,
        ID.unique(),
        data,
      )
      return { success: true, message: 'Message sent successfully!' }
    } catch (error) {
      console.error('Appwrite service :: sendMessage :: error', error)
      return { success: false, message: 'Failed to send message.' }
    }
  },
}
