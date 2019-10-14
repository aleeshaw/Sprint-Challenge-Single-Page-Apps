import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  ///// TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    ///// TODO: Add API Request here - must run in `useEffect`
    const getCharacters = () => {
      Axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response.data.response);
          let charList = response.data.response;
          setCharacters(charList);
        })
        .catch(error => {
          console.log("Error Message: ", error);
        });
    };
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <CardGroup  
      width="100%"
      className="grid-view"
    >
      <CharacterCard className="grid-view" characters={characters} />
    </CardGroup>
  );
};
