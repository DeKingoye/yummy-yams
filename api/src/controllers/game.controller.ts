// src/controllers/auth.controller.ts
import { Request, Response } from 'express';
import Game from '../models/game.model';
import fs from 'fs'; 
import path from 'path'; 


class GameController {
  async resetgame(req: Request, res: Response) {
    try {
         // Step 1: Read the pastries.json file
      const filePath = path.join(__dirname, '..', '..', 'public', 'pastries.json');
      const data = fs.readFileSync(filePath, { encoding: 'utf8' });
      const pastries = JSON.parse(data);

      await Game.deleteMany({});
     
      await Game.insertMany(pastries);

      res.status(200).send('Game data has been reset successfully.');
      
    } catch (error) {
    if (error instanceof Error) {  
        res.status(400).send(error.message);
    } else {
        res.status(500).send('An unknown error occurred');
    }
  }

}}


export default new GameController();
