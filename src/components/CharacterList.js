import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Route } from "react-router-dom";
import CharacterCard from "./CharacterCard.js";
import {CardGroup} from "reactstrap";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
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
}