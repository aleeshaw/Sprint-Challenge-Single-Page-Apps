import React, { useEffect, useState } from "react";
import Axios from "axios";


export default function CharacterList() {
  ///// TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    const getCharacters = () => {
      Axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response.data.response);
        })
        .catch(error => {
          console.log("Error Message: ", error);
        });
    };
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
