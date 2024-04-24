export async function fetchPokemonList() {
	try {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
		const data = await response.json();

		const allPokemons = data.results;

		const detailedPokemons = await Promise.all(
			allPokemons.map(async (pokemon) => {
				const pokemonResponse = await fetch(pokemon.url);
				const pokemonData = await pokemonResponse.json();
				return pokemonData;
			})
		);

		return detailedPokemons;
	} catch (error) {
		console.error("Error fetching Pokemon list:", error);
		return [];
	}
}

export async function detailedPokemon(name) {
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching detailed Pokemon:", error);
		return null;
	}
}
