import React from "react";
import Navigation from "./components/Navigation.js";
import { Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import Character from "./components/Character.js";
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main>
      <Navigation /> 

      {/*App routes*/}
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList}/>
      <Route path="/characters/:id" component={Character} /> 
      <Route path="/search" component={SearchForm}/> 
    </main>
  );
}