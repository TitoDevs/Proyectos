import React, { useState, useEffect } from 'react';
import './FlipCard.css';
import PikachuLogo from '../../img/pokemon.svg';

const FlipCard = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
      const data = await response.json();

      const pokemonData = await Promise.all(data.results.map(async pokemon => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return {
          ...pokemon,
          abilities: data.abilities,
          stats: data.stats,
        };
      }));

      setPokemonList(pokemonData);
      setFilteredPokemonList(pokemonData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredPokemon = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm)
    );
    setFilteredPokemonList(filteredPokemon);
  };

  const [flippedCards, setFlippedCards] = useState([]);

  const handleClick = pokemon => {
    if (flippedCards.includes(pokemon)) {
      setFlippedCards(flippedCards.filter(card => card !== pokemon));
    } else {
      setFlippedCards([...flippedCards, pokemon]);
    }
  };

  const getPokemonId = url => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  return (
    <div className="main-container">
      <div className="header">
        <img src={PikachuLogo} alt="Pikachu" className="logo" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Buscar nombre..."
          className="search-input"
        />
      </div>
      <div className="flip-card-container">
        {filteredPokemonList.map(pokemon => (
          <div
            key={pokemon.name}
            className={`flip-card ${flippedCards.includes(pokemon) ? 'flipped' : ''}`}
            onClick={() => handleClick(pokemon)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
                    pokemon.url
                  )}.png`}
                  alt={pokemon.name}
                  className="pokemon-image"
                />
                <h3 className="pokemon-name">{pokemon.name}</h3>
              </div>
              <div className="flip-card-back">
                <h3 className="pokemon-name">{pokemon.name}</h3>
                <div className="pokemon-detail">
                  <h4 className="text-1">Abilities:</h4>
                  <ul>
                    {pokemon.abilities.map((ability, index) => (
                      <li key={index}>{ability.ability.name}</li>
                    ))}
                  </ul>
                  <h4 className="text-2">Stats:</h4>
                  <ul>
                    {pokemon.stats.map((stat, index) => (
                      <li key={index}>
                        {stat.stat.name}: {stat.base_stat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipCard;
