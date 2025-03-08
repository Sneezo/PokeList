import React from "react";

const Card = ({pokemon, onClick}) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <h2>{pokemon.name}</h2>
            <p>
                {pokemon.types.map((type) => type.type.name).join(", ")}
            </p>
        </div>
    )
}

export default Card;