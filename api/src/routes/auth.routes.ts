// src/routes/auth.routes.ts
import { Router } from 'express';
import authController from '../controllers/auth.controller';

const router = Router();

// Inscription
router.post('/signup', authController.register);

// Connexion
router.post('/login', authController.login);

export default router;
