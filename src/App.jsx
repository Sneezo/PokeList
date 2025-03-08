import React, { useState, useEffect } from 'react';
import { fetchPokemonList } from './utils/api';
import CardGrid from './components/CardGrid';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [sortBy, setSortBy] = useState(null); // 'weight', 'height', or null
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    // Fetch the list of Pokémon
    fetchPokemonList(50) // Limit to 20 for simplicity
      .then((data) => {
        setPokemonList(data);
        fetchPokemonList(1025-50,50)
        .then((remainingData) => {
          setPokemonList((prevlist) => [...prevlist, ...remainingData]);
        })
      }).catch((error) => console.error('Error:', error))
      .catch((error) => console.error('Error:', error));
  }, []);

  // Sort Pokémon based on the selected criteria
  const sortedPokemonList = sortBy
    ? [...pokemonList].sort((a, b) => {
        if (sortBy === 'weight') {
          return sortAscending ? a.weight - b.weight : b.weight - a.weight;
        } else if (sortBy === 'height') {
          return sortAscending ? a.height - b.height : b.height - a.height;
        }
        return 0;
      })
    : pokemonList;

  return (
    <div className="App">
      <h1>Pokémon Cards</h1>
      <div className="sort-controls">
        <button onClick={() => setSortBy(null)}>
          Unsort
        </button>
        <button onClick={() => setSortBy('weight')}>
          Sort by Weight
        </button>
        <button onClick={() => setSortBy('height')}>
          Sort by Height
        </button>
        {sortBy && (
          <button onClick={() => setSortAscending(!sortAscending)}>
            {sortAscending ? 'Descending' : 'Ascending'}
          </button>
        )}
      </div>
      <CardGrid pokemonList={sortedPokemonList} />
    </div>
  );
}

export default App;