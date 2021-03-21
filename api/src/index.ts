import express from 'express';

const v1 = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/v1', v1);

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
