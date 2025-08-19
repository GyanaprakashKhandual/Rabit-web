const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/DB');
const authRoutes = require('./routes/auth.route');
const testRoutes = require('./routes/test.route');
const projectRoutes = require('./routes/project.route');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

// Enable CORS for localhost:3000 and rabit.vercel.app
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://rabit.vercel.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', testRoutes);
app.use('/api/v1', projectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`The Local Host is running on http://localhost:${PORT}`);
});
