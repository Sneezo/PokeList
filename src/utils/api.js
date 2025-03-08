import axios from "axios";

export async function fetchPokemonList(limit = 50, offset = 0){
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const results = response.data.results;

        const pokemonData = await Promise.all(results.map((pokemon)=> axios.get(pokemon.url).then((res) => res.data)));
        return pokemonData;
    } catch(error){
        console.error(`Error fetching pokemon list:`, error);
        throw error;
    }
}

export async function fetchPokemonDetails(idOrName){
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
        return response.data;
    } catch(error){
        console.error(`Error fetching pokemon details:`, error)
        throw error;
    }
}

export async function fetchAbilityDescription(name){
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/ability/${name}`);
        const description = response.data.effect_entries.find((entry) => entry.language.name ==="en")?.effect;
        return description || "No description available.";
    } catch(error){
        console.error(`Error fetching ability details:`, error)
        throw error;
    }
}