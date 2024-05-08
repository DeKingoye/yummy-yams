// src/controllers/auth.controller.ts
import { Request, Response } from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { email, name , password } = req.body;
      const user = new User({ email, name , password });
      await user.save();
      res.status(201).send('User registered');
    } catch (error) {
    if (error instanceof Error) {  // Vérifiez si c'est une instance d'Error
        res.status(400).send(error.message);
    } else {
        res.status(500).send('An unknown error occurred');
    }
  }}

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).send('User not found');
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).send('Invalid credentials');
      }
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
      res.send({ token });
    } catch (error) {
      if (error instanceof Error) {  // Vérifiez si c'est une instance d'Error
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');

    }
  }}
}

export default new AuthController();
