// src/components/Pokedex.js
import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(props) {
  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <h4>Total Experience: {props.exp}</h4>
      {props.isWinner ? <p className="Pokedex-winner">THIS HAND WINS!</p> : <p className="Pokedex-loser">THIS HAND LOSES!</p>}
      <div className="Pokedex-cards">
        {props.pokemon.map((p) => (
          <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
