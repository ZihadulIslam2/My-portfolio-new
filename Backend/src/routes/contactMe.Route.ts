import express, { Router } from 'express'
import { sendMessageToMe } from '../controllers/contactMeController'
const router = Router()

router.post('/message/me', sendMessageToMe)

export default router
