const express = require('express');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(express.json());

app.use('/api/students/',studentRoutes);

const PORT = 3000;
app.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`);
});