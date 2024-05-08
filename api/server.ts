import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import authroutes from './src/routes/auth.routes';
import gameroutes from './src/routes/game.routes'

// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour lire le JSON
app.use(express.json());
app.use(cors());
app.use('/api', authroutes);
app.use('/api', gameroutes);

// Route de base
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});


mongoose.connect(process.env.DatabaseUrl as string)

console.log('connection à la base de données réussie')

// Écouter sur le port spécifié
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

