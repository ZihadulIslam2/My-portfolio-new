import { databases, storage } from '../appwrite';
import { ID, Query } from 'appwrite';

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const PORTFOLIO_TABLE_ID = import.meta.env.VITE_APPWRITE_PORTFOLIO_TABLE_ID;
const MESSAGES_TABLE_ID = import.meta.env.VITE_APPWRITE_MESSAGES_TABLE_ID;
const BUCKET_ID = import.meta.env.VITE_APPWRITE_BUCKET_ID;

export const appwriteService = {
    // Portfolio
    async getProjects() {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                PORTFOLIO_TABLE_ID,
                [Query.orderDesc('$createdAt')]
            );
            return response.documents;
        } catch (error) {
            console.error('Appwrite service :: getProjects :: error', error);
            throw error;
        }
    },

    async addProject(data, file) {
        try {
            let fileId = null;
            let imgLink = data.imgLink; // Fallback if no file uploaded

            if (file) {
                const fileUpload = await storage.createFile(BUCKET_ID, ID.unique(), file);
                fileId = fileUpload.$id;
                const result = storage.getFileView(BUCKET_ID, fileId);
                imgLink = result.href ? result.href : result;
            }

            const document = await databases.createDocument(
                DATABASE_ID,
                PORTFOLIO_TABLE_ID,
                ID.unique(),
                {
                    ...data,
                    imgLink,
                    imgId: fileId, // Store file ID for deletion
                }
            );
            return document;
        } catch (error) {
            console.error('Appwrite service :: addProject :: error', error);
            throw error;
        }
    },

    async updateProject(id, data, file) {
        try {
            let updates = { ...data };

            if (file) {
                // Upload new file
                const fileUpload = await storage.createFile(BUCKET_ID, ID.unique(), file);
                const fileId = fileUpload.$id;
                const result = storage.getFileView(BUCKET_ID, fileId);
                updates.imgLink = result.href ? result.href : result;
                updates.imgId = fileId;

                // Delete old file if exists (we need to fetch the doc first or pass the old imgId)
                // For simplicity, we'll assume the caller might handle cleanup or we just leave it for now
                // A better approach is to fetch the document here to get the old imgId
                const oldDoc = await databases.getDocument(DATABASE_ID, PORTFOLIO_TABLE_ID, id);
                if (oldDoc.imgId) {
                    await storage.deleteFile(BUCKET_ID, oldDoc.imgId).catch(err => console.log("Old file delete failed", err));
                }
            }

            const document = await databases.updateDocument(
                DATABASE_ID,
                PORTFOLIO_TABLE_ID,
                id,
                updates
            );
            return document;
        } catch (error) {
            console.error('Appwrite service :: updateProject :: error', error);
            throw error;
        }
    },

    async deleteProject(id) {
        try {
            // Get document to find file ID
            const document = await databases.getDocument(DATABASE_ID, PORTFOLIO_TABLE_ID, id);

            if (document.imgId) {
                await storage.deleteFile(BUCKET_ID, document.imgId).catch(err => console.log("File delete failed", err));
            }

            await databases.deleteDocument(DATABASE_ID, PORTFOLIO_TABLE_ID, id);
            return true;
        } catch (error) {
            console.error('Appwrite service :: deleteProject :: error', error);
            throw error;
        }
    },

    async getProject(id) {
        try {
            return await databases.getDocument(DATABASE_ID, PORTFOLIO_TABLE_ID, id);
        } catch (error) {
            console.error('Appwrite service :: getProject :: error', error);
            throw error;
        }
    },

    // Messages
    async sendMessage(data) {
        try {
            const document = await databases.createDocument(
                DATABASE_ID,
                MESSAGES_TABLE_ID,
                ID.unique(),
                data
            );
            return { success: true, message: 'Message sent successfully!' };
        } catch (error) {
            console.error('Appwrite service :: sendMessage :: error', error);
            return { success: false, message: 'Failed to send message.' };
        }
    }
};
