// src/routes/auth.routes.ts
import { Router } from 'express';
import gameController from '../controllers/game.controller';

const router = Router();

// Inscription
router.post('/reset', gameController.resetgame);

export default router;
