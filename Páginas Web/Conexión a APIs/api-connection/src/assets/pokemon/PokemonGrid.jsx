import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

const PokemonGrid = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="pokemon-grid">
      {pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
      ))}
    </div>
  );
};

export default PokemonGrid;
