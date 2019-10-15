import React, { useState } from "react";
import axios from "axios";

export default function SearchForm() {
 
  const [searchQ, setSearchQ] = useState("");
  const [resultList, setResultList] = useState("");
  const handleChange = e => {
    setSearchQ(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchQ}`)
      .then(response => {
        setResultList(response.data.results);
        console.log("results: ", resultList);
        console.log(resultList[0].name);
        console.log(resultList.forEach(function(thingy) {
          console.log(thingy.name);
        }));
        const listNames = resultList.forEach(function(item) {
          return item.name;
        });
        console.log(listNames);
        
      })
      .catch(error => {
        console.log("Error Message: ", error);
      });
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
