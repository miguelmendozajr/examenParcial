const express = require('express');
const studentsRoutes = require('./src/routes/student');

const app = express();
app.use(express.json());

app.use('/api/students', studentsRoutes);

const PORT = 3005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));