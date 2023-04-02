import React, { useState, useEffect } from "react";
import axios from "axios";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then((response) => {
                setCharacters(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Personagens</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterList