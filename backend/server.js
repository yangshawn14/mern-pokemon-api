// Imports
const express = require("express");
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Initialize dotenv
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
// Parse JSON
app.use(express.json());
// Enable cors
app.use(cors());


