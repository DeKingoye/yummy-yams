
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import gameRoutes from './routes/gameRoutes';
import pastriesRoutes from './routes/pastryRoutes';
import dotenv from 'dotenv';
import cors from 'cors';
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/game', gameRoutes);
app.use('/api/pastry', pastriesRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
  });

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
mongoose.connect(process.env.DatabaseUrl as string)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
