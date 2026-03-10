import { Client, Databases, Storage } from 'appwrite'

const client = new Client()
const endpoint =
  import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1'
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID

client.setEndpoint(endpoint)

if (projectId) {
  client.setProject(projectId)
} else {
  console.warn(
    'Missing VITE_APPWRITE_PROJECT_ID. Please configure your .env file.',
  )
}

export const databases = new Databases(client)
export const storage = new Storage(client)
export { client }
