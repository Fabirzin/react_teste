import React, { useState, useEffect } from "react";
import axios from "axios";

const CharacterDetail = ({ match }) => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${match.params.id}`)
            .then((response) => {
                setCharacter(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [match.params.id]);

    if (!character) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Espécie: {character.species}</p>
            <p>Gênero: {character.gender}</p>
        </div>
    );
};

export default CharacterDetail