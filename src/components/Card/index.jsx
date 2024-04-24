import React from "react";

function Card(props) {
	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<div
			className="card my-2"
			style={{ width: "18rem", cursor: "pointer" }}
			onClick={() => props.toggleModal(props.name)}
		>
			<div className="card-header">
				<div className="d-flex justify-content-between">
					<h5 className="card-title">{capitalizeFirstLetter(props.name)}</h5>
					<p>#{props.pokemon.id}</p>
				</div>
			</div>
			<img
				className="card-img-top"
				src={props.img}
				alt={props.name}
			/>
			<div className="card-body">
				<p className="card-text">
					<strong>Type:</strong>
					{capitalizeFirstLetter(props.pokemon.types[0].type.name)}
				</p>
				<p className="card-text">
					<strong>Ability:</strong>
					{capitalizeFirstLetter(props.pokemon.abilities[0].ability.name)}
				</p>
				<p className="card-text">
					<strong>Weight:</strong> {props.pokemon.weight / 10} kg
				</p>
				<p className="card-text">
					<strong>Height:</strong> {props.pokemon.height / 10} m
				</p>
				<p className="card-text">
					<strong>HP:</strong> {props.pokemon.stats[0].base_stat}
				</p>
				<p className="card-text">
					<strong>Attack:</strong> {props.pokemon.stats[1].base_stat}
				</p>
			</div>
		</div>
	);
}

export { Card };
