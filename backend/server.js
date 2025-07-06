/*
import dotenv from 'dotenv';
dotenv.config({ path: 'backend/config.env' }); // ✅ Ensure path is correct relative to where you run the command

// Imports
import express from 'express';
import dbConnection from './database/dbConnection.js';

// App setup
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Connect to DB (do this before the app starts handling routes)
dbConnection();

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 SERVER HAS STARTED AT PORT ${PORT}`);
});*/

import app from './app.js';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ SERVER HAS STARTED AT PORT ${PORT}`);
});



