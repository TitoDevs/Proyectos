import React, { useState, useEffect } from 'react';

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch(pokemonUrl)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [pokemonUrl]);

  return (
    <div
      className={`pokemon-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-inner">
        <div className="card-front">
          {pokemonData && (
            <>
              <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
              <h3>{pokemonData.name}</h3>
            </>
          )}
        </div>
        <div className="card-back">
          {pokemonData && (
            <>
              <p>Height: {pokemonData.height}</p>
              <p>Weight: {pokemonData.weight}</p>
              {/* Otros datos de combate que quieras mostrar */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
