import React, { useState, useEffect } from 'react';
import './FlipCard.css';
import PikachuLogo from '../../img/pokemon.svg';

const FlipCard = ({ backContent }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
        .then(response => response.json())
        .then(data => {
            setPokemonList(data.results);
            setFilteredPokemonList(data.results);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filteredPokemon = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm)
        );
        setFilteredPokemonList(filteredPokemon);
    };

    const [flippedCards, setFlippedCards] = useState([]);

    const handleClick = (pokemon) => {
        if (flippedCards.includes(pokemon)) {
        setFlippedCards(flippedCards.filter(card => card !== pokemon));
        } else {
        setFlippedCards([...flippedCards, pokemon]);
        }
    };

    return (
        <div className='main-container'>
            <div className='header'>
                <img src={PikachuLogo} alt="Pikachu" className='logo'/>
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
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon.url)}.png`} alt={pokemon.name} className="pokemon-image" />
                                <h3 className="pokemon-name">{pokemon.name}</h3>
                            </div>
                            <div className="flip-card-back">
                                {backContent}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ); 
};

const getPokemonId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
};

export default FlipCard;
