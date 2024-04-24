import React, { useEffect, useState } from "react";
import { detailedPokemon } from "../../utils/PokeApi";
import { Modal as BootstrapModal } from "react-bootstrap";

function Modal({ isOpen, closeModal, pokemonName }) {
	const [pokemonData, setPokemonData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await detailedPokemon(pokemonName);
			setPokemonData(data);
		};
		if (isOpen && pokemonName) {
			fetchData();
		}
	}, [isOpen, pokemonName]);

	if (!isOpen) return null;

	return (
		<BootstrapModal
			show={isOpen}
			onHide={closeModal}
			centered
		>
			<BootstrapModal.Header closeButton>
				<BootstrapModal.Title>{pokemonData?.name}</BootstrapModal.Title>
			</BootstrapModal.Header>
			<BootstrapModal.Body>
				<div className="text-center">
					<img
						src={pokemonData?.sprites?.front_default}
						alt={pokemonData?.name}
						className="img-fluid w-50"
					/>
					<p className="font-weight-bold mt-3">
						Base Experience: {pokemonData?.base_experience}
					</p>
					<p className="font-weight-bold">Weight: {pokemonData?.weight}</p>
					<p className="font-weight-bold">Height: {pokemonData?.height}</p>
					<p className="font-weight-bold">Abilities:</p>
					<ul className="list-unstyled">
						{pokemonData?.abilities?.map((ability, index) => (
							<li key={index}>{ability?.ability?.name}</li>
						))}
					</ul>
				</div>
			</BootstrapModal.Body>
			<BootstrapModal.Footer>
				<button
					className="btn btn-secondary"
					onClick={closeModal}
				>
					Close
				</button>
			</BootstrapModal.Footer>
		</BootstrapModal>
	);
}

export { Modal };
