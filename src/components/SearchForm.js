import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
 
  const [searchQ, setSearchQ] = useState("");
  const [resultList, setResultList] = useState("");
  const [resultNames, setResultNames] = useState("");
  useEffect(() => {
    const getList = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${searchQ}`)
        .then(response => {
          console.log(response.data.results);
          setResultList(response.data.results);
        })
        .catch(error => {
          console.log("Error Message: ", error);
        });
    };
    getList(); 
    }, []);
    //TODO ...add another component for rendering the search results??

  
  const handleChange = e => {
    setSearchQ(e.target.value)
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    
    
    // axios
    //   .get(`https://rickandmortyapi.com/api/character/?name=${searchQ}`)
    //   .then(response => {
    //     setResultList(response.data.results[3].name);
    //     console.log(resultList);

    //     function getNames(array) {
    //       array.foreach(item) {
    //         return item.name;
    //       }
    //     }
        
        //console.log(resultList);
        //console.log("results: ", resultList);
        //console.log(resultList[0].name);
      //  setResultNames(resultList.forEach(function(thing) {
      //   console.log("names are: ", thing.name);
      //  }));

       //console.log("Names are: ", resultNames);
        


        
        // function getNames() {
        //   resultList.foreach((result) => {
        //     console.log(result.name);
        //   });
        // }
        // getNames();
        // const listNames = resultList.forEach(function(item) {
        //   //console.log(item.name);
        //   const list = item.name;
        //   return list;
        // });
        //setResultNames(listNames);
        //console.log("Here are the names: ", resultNames);
        
      // })
      // .catch(error => {
      //   console.log("Error Message: ", error);
      // });
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
