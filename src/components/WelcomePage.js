import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1 className="center">Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <Link to="/characters">
        <Button className="color-btn">
          Get Shwifty!!
        </Button>
      </Link>
    </section>
  );
}
