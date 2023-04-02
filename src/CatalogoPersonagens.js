import React from "react";
import { Link } from "react-router-dom";
import CharacterList from "./CharacterList";

const CatalogoPersonagens = () => {
    return (
        <div>
            <CharacterList />
            <ul>
                {CharacterList.map((character) => (
                    <li key={character.id}>
                        <Link to={`/character/${character.id}`}>{character.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CatalogoPersonagens