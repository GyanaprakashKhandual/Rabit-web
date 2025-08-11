const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/DB');

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`The Local Host is running on http://localhost:${PORT}`);
});
