import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
 
  const [searchQ, setSearchQ] = useState("");
  const [resultList, setResultList] = useState("");
  const [resultNames, setResultNames] = useState("");
  
  const handleChange = e => {
    setSearchQ(e.target.value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();

    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchQ}`)
      .then(response => {
        console.log(response.data.results);
      })
      .then(response => {
        setResultList("these are the results");
        console.log("result list: ", resultList);
      })
      
      .catch(error => {
        console.log("Error Message: ", error);
      });
    //*Can log results in console but attempts of displaying them on the page have been unsuccessful... 
  };

  return (
    <>
      <h2 className="search-page-title">Search for your favorite character...</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          name="searchBar"
          type="text"
          placeholder="Character Search"
          onChange={handleChange}
        />
        <input
          name="submit"
          type="submit"
          value="Enter"
        />
      </form>

      <section className="results-list">
        <div>
          Results: {}
        </div>
      </section>
    </>
  );
};
