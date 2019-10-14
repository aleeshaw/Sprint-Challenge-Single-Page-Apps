import React, { useState } from "react";
import axios from "axios";

export default function SearchForm() {
 
  const [searchQ, setSearchQ] = useState("");

  const handleChange = e => {
    setSearchQ(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Search Term Submitted!!");
    console.log(searchQ);

    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchQ}`)
      .then(response => {
        console.log(response.data.results);
      })
      .catch(error => {
        console.log("Error Message: ", error);
      });
  };

  return (
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
  );
};
