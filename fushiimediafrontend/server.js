// const express = require('express');
// const next = require('next');
// const bodyParser = require('body-parser');
// const { PrismaClient } = require('@prisma/client');
// require('dotenv').config();

// const prisma = new PrismaClient();
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();
//   server.use(bodyParser.json());

//   // API endpoint to handle form submission
//   server.post('/api/submit-form', async (req, res) => {
//     try {
//       const { name, email, message, phone } = req.body;

//       // Store the submission in PostgreSQL
//       const submission = await prisma.formSubmission.create({
//         data: {
//           name,
//           email,
//           message,
//           phone: phone || null, // Handle optional phone field
//         },
//       });

//       res.status(200).json({
//         success: true,
//         data: submission
//       });
//     } catch (error) {
//       console.error('Error saving form submission:', error);
//       res.status(500).json({
//         error: 'Failed to save form submission',
//         details: error.message
//       });
//     }
//   });

//   // Optional: Endpoint to get all submissions
//   server.get('/api/submissions', async (req, res) => {
//     try {
//       const submissions = await prisma.formSubmission.findMany({
//         orderBy: {
//           createdAt: 'desc'
//         }
//       });
//       res.status(200).json(submissions);
//     } catch (error) {
//       console.error('Error fetching submissions:', error);
//       res.status(500).json({ error: 'Failed to fetch submissions' });
//     }
//   });

//   server.all('*', (req, res) => {
//     return handle(req, res);
//   });

//   const PORT = process.env.PORT || 3000;
//   server.listen(PORT, async (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${PORT}`);

//     // Test database connection
//     try {
//       await prisma.$connect();
//       console.log('> Database connected successfully');
//     } catch (error) {
//       console.error('Database connection failed:', error);
//       process.exit(1);
//     }
//   });
// });

// // Handle cleanup
// process.on('beforeExit', async () => {
//   await prisma.$disconnect();
// });
import { PrismaClient } from '@prisma/client';
import express from 'express';
import next from 'next';

// Initialize Prisma with connection pooling
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  },
  connectionLimit: 1,
  log: ['query', 'error', 'warn']
});

// Export config for Vercel
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
};

// Create Express app wrapped in a handler
const app = express();

const handler = async (req, res) => {
  try {
    // Test database connection
    await prisma.$connect();
    console.log('Database connected successfully');

    // Add your routes here
    app.get('/api/test', (req, res) => {
      res.json({ status: 'ok' });
    });

    // Default route
    app.all('*', (req, res) => {
      res.status(200).json({ status: 'running' });
    });

    // Handle the request with Express
    return new Promise((resolve, reject) => {
      app(req, res, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};

export default handler;