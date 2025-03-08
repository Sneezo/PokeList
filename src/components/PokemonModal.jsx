import { useState } from "react";
import AbilityModal from "./AbilityModal";

const PokemonModal = ({pokemon, onClose}) => {
    const [selectedAbility, setSelectedAbility] = useState(null);
    if (!pokemon) return null;

    const handleAbilityClick = (abilityName) => {
        setSelectedAbility(abilityName);
    }

    const closeAbilityModal = () => {
        setSelectedAbility(null);
    }

    return(
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-button" onClick={onClose}>x</button>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>Height: {pokemon.height/10} m</p>
                    <p>weight: {pokemon.weight/10} kg</p>
                    <p>Type(s) {pokemon.types.map((type) => type.type.name).join(", ")}</p>
                    <p>Abilities: {pokemon.abilities.map((ability) => (
                        <span 
                        key={ability.ability.name}
                        className="ability"
                        onClick={() => handleAbilityClick(ability.ability.name)}
                        >
                            {ability.ability.name}
                        </span>
                    ))}</p>
                </div>
            </div>
            {selectedAbility && <AbilityModal abilityName={selectedAbility} onClose={closeAbilityModal}/>}
        </>

    )
}

export default PokemonModal;