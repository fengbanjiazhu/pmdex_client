import React from "react";

import "./PokemonInfoView.css";

const PokemonInfoView = ({ pm }) => {
  return (
    <div className="pokemon-info-container">
      <PokemonInfoBasic />
      <PokemonBaseStats />
      <PokemonTrainBreed />
    </div>
  );
};

export const PokemonInfoBasic = ({ pm }) => {
  return (
    <div className="pokemon-info-basic">
      <table>
        <tr>
          <td>ID:</td>
          <td>778</td>
        </tr>
        <tr>
          <td>Weight:</td>
          <td>0.7kg</td>
        </tr>
        <tr>
          <td>Height:</td>
          <td>0.2m</td>
        </tr>
        <tr>
          <td>Type:</td>
          <td>Fairy/Ghost</td>
        </tr>
        <tr>
          <td>Abilities:</td>
          <td>Disguise</td>
        </tr>
        <tr>
          <td></td>
          <td>Disguise</td>
        </tr>
      </table>
      <p>Dex Description</p>
      <p>
        It wears a rag fashioned into a Pikachu costume in an effort to look
        less scary. Unfortunately, the costume only makes it creepier.
      </p>
    </div>
  );
};

export const PokemonBaseStats = ({ pm }) => {
  // extract stats locally
  const stats = {};
  pm.stats.map((stat) => {
    stats[stat.stat.name] = stat.base_stat;
    return stats;
  });

  return (
    <div className="pokemon-base-stats">
      <table>
        <tr>
          <td>HP:</td>
          <td>{stats["hp"]}</td>
          <td>
            <div className="HP_pm"
              style={{ width: `${(stats['hp'] * 100) / 255}%` }}
						></div>
          </td>
        </tr>
        <tr>
          <td>ATK:</td>
          <td>{stats["attack"]}</td>
          <td>
            <div className="ATK_pm"
              style={{ width: `${(stats['attack'] * 100) / 255}%` }}
						></div>
          </td>
        </tr>
        <tr>
          <td>DEF:</td>
          <td>{stats["defense"]}</td>
          <td>
            <div className="DEF_pm"
              style={{ width: `${(stats['defense'] * 100) / 255}%` }}
						></div>
          </td>
        </tr>
        <tr>
          <td>SpA:</td>
          <td>{stats["special-attack"]}</td>
          <td>
            <div className="SPA_pm"
              style={{ width: `${(stats['special-attack'] * 100) / 255}%` }}
						></div>
          </td>
        </tr>
        <tr>
          <td>SpD:</td>
          <td>{stats["special-defense"]}</td>
          <td>
            <div
              className="SPD_pm"
              style={{ width: `${(stats['special-defense'] * 100) / 255}%` }}
            ></div>
          </td>
        </tr>
        <tr>
          <td>SPE:</td>
          <td>{stats["speed"]}</td>
          <td>
            <div
              className="SPE_pm"
              style={{ width: `${(stats['speed'] * 100) / 255}%` }}
            ></div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export const PokemonTrainBreed = ({ pm }) => {
  return (
    <div className="pokemon-train-breed">
      <p>Egg Group: Amorphous</p>
      <p>Hatch time: 5140-5396 steps</p>
    </div>
  );
};

export default PokemonInfoView;
