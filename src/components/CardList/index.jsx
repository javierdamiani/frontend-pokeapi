import React, { useEffect, useState, useContext } from "react";
import { Card } from "../Card";
import { fetchPokemonList } from "../../utils/PokeApi";
import { SearchContext } from "../../Context";

function CardList({ toggleModal }) {
	const { searchValue } = useContext(SearchContext);
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		const fetchPokemonData = async () => {
			const data = await fetchPokemonList();
			setPokemonList(data);
		};

		fetchPokemonData();
	}, []);

	const searchedPokemon = pokemonList.filter((pokemon) => {
		const pokemonText = pokemon.name.toLowerCase();
		const searchText = searchValue.toLowerCase();
		return pokemonText.includes(searchText);
	});

	return (
		<div className="container">
			<div className="row justify-content-center">
				{searchedPokemon.map((pokemon) => {
					const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

					return (
						<div
							className="col-md-4 mb-3"
							key={pokemon.id}
						>
							<Card
								toggleModal={toggleModal}
								name={pokemon.name}
								img={imgUrl}
								pokemon={pokemon}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export { CardList };
