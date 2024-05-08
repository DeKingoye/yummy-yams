import mongoose from 'mongoose';


const gameSchema = new mongoose.Schema({
  name: { type: String, },
  image: { type: String, required: true }, 
  stock: { type: Number, required: true },
  quantityWon: { type: Number, required: true },
});

const Game = mongoose.model('Game', gameSchema);
export default Game;