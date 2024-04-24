import "./App.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { PokeSearch } from "../components/PokeSearch";
import { Modal } from "../components/Modal";
import { SearchProvider } from "../Context";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedPokemonName, setSelectedPokemonName] = useState("");

	const toggleModal = (pokemonName) => {
		setSelectedPokemonName(pokemonName);
		setIsModalOpen(!isModalOpen);
	};

	return (
		<SearchProvider>
			<Container
				className="bg-danger p-4 w-100"
				style={{ maxWidth: "100vw", overflowX: "hidden", maxHeight: "100vh" }}
			>
				<Header />
				<PokeSearch />
				<CardList toggleModal={toggleModal} />
				<Footer />
			</Container>
			<Modal
				isOpen={isModalOpen}
				closeModal={() => setIsModalOpen(!isModalOpen)}
				pokemonName={selectedPokemonName}
			/>
		</SearchProvider>
	);
}

export default App;
