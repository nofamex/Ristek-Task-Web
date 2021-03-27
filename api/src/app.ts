import { config } from 'dotenv';
import { app } from './configureExpress';
config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
