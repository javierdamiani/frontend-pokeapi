import React from "react";
import { Navbar, Container, Col } from "react-bootstrap";
import PokemonImage from "../../Images/pokemon-23.svg";

function Header() {
	return (
		<Navbar
			bg="light"
			expand="lg"
			className="mb-4"
		>
			<Container className="p-1 text-center">
				<Col
					xs={4}
					md={2}
				>
					<img
						src={PokemonImage}
						alt="Pokedex Logo"
						style={{ maxWidth: "200px" }}
					/>
				</Col>
				<Col
					xs={8}
					md={10}
				>
					<Navbar.Brand
						href="/"
						style={{ fontWeight: "bold", fontSize: "24px" }}
					>
						Pokedex
					</Navbar.Brand>
				</Col>
			</Container>
		</Navbar>
	);
}

export { Header };
