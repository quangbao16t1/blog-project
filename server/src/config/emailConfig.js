import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transport = nodemailer.createTransport({
  // host: process.env.EMAIL_HOST,
  // port: process.env.EMAIL_PORT,
  service: 'gmail',
  secure: true,
  auth: {
     user: process.env.EMAIL_USER,
     pass: process.env.EMAIL_PASS
  }
});
// EMAIL_HOST
// EMAIL_PORT
// EMAIL_USER
// EMAIL_PASS