import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Route } from "react-router-dom";
import CharacterCard from "./CharacterCard.js";
import {CardGroup} from "reactstrap";



export default function CharacterList() {
  
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    
    const getCharacters = () => {
      Axios 
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response.data.results);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.log("Error Message: ", error);
        }); 
    };
    getCharacters();
  }, []);


  return (
  
    <CardGroup 
      width="100%" 
      className="grid-view"
    >
        <CharacterCard className="grid-view" characters={characters} />
    </CardGroup>
    
  );
}