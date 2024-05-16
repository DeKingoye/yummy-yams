import { getWinners } from "../../../network/endpoints/game";
import { useEffect, useState } from "react";
import { Winner } from "../../../normalizr/game/winner";
import { Pastry } from "../../../normalizr/pastry/pastry";
import './Winners.css'; // Importation du fichier CSS

function Winners() {
  const [winners, setWinners] = useState<Winner[] | null>(null);
  useEffect(() => {
    getWinners()
      .then((data) => {
        setWinners(data);
      })
  }, []);

  const DisplayPastry = (pastry: Pastry) => {
    return (
      <div className="pastry" key={pastry._id}>
        <img className="pastry-image" src={pastry.getImage()} alt={pastry.name} />
        <div className="pastry-name">{pastry.name}</div>
      </div>
    );
  }
  
  return (
    <div className="winners-container">
      <h2 className="winners-title">Gagnants</h2>
      {!winners && <p className="loading-text">Loading...</p>}
      {winners && winners.length === 0 && <p className="no-winners-text">Pas de gagnants pour le moment</p>}
      {winners && winners.length > 0 && 
      <>
        <p className="other-winners-text">Les autres gagnants sont:</p>
        <table className="winners-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Combinaison</th>
              <th>Date</th>
              <th>Récompense</th>
            </tr>
          </thead>
          <tbody>
            {winners?.map((winner, index) => (
              <tr key={index}>
                <td>{winner.user.name}</td>
                <td>{winner.dices} - {winner.nameGame()}</td>
                <td>{new Date(winner.updatedAt).toLocaleDateString()}</td>
                <td className="pastry-list">
                  {winner.pastries.map(pastry => DisplayPastry(pastry))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
      }
    </div>
  );
}

export default Winners;
