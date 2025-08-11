const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/DB');
const authRoutes = require('./routes/auth.route');

dotenv.config();


connectDB();

const app = express();
app.use(express.json());

app.use('/v1/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`The Local Host is running on http://localhost:${PORT}`);
});
