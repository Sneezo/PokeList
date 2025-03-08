import { useState } from "react";
import Card from "./Card"
import PokemonModal from "./PokemonModal";

const CardGrid = ({pokemonList}) => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const handleCardClick = (pokemon) => {
        setSelectedPokemon(pokemon);
    }

    const closeModal = () => {
        setSelectedPokemon(null);
    }

    return (
        <div className="card-grid">
            {pokemonList.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} onClick={() => handleCardClick(pokemon)}/>
            ))}
            {selectedPokemon && <PokemonModal pokemon={selectedPokemon} onClose={closeModal}/>}
        </div>
    )
}

export default CardGrid;