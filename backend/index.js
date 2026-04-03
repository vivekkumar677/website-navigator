const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const fileRoutes = require('./routes/fileRoutes');

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/files', fileRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});