import React, { useContext } from "react";
import { SearchContext } from "../../Context";

function PokeSearch() {
	const { setSearchValue } = useContext(SearchContext);

	return (
		<>
			<input
				className="input-group input-group-sm mb-3 text-center"
				type="text"
				placeholder="Busca a tu Pokemon favorito"
				onChange={(e) => setSearchValue(e.target.value)}
			/>
		</>
	);
}

export { PokeSearch };
