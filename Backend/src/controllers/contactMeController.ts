import express, { Request, Response } from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export const sendMessageToMe = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      res
        .status(400)
        .json({ success: false, message: 'All fields are required' })
      return
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL, // send to yourself
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    })
  } catch (error) {
    console.error('Error sending message:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    })
  }
}
