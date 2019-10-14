import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from "reactstrap";

const Character = props => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;

    axios 
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.log('Error Message: ', error);
      });
  },[props.match.params.id]);

  const { name, image, species, gender, status, id} = character;

  return (
    
    
    <div className="char-info-container">
      
      <Card className="more-char-info">
        <CardImg className="more-img" src={image} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle className="more-sub">
            <strong>Species: </strong>{species}
          </CardSubtitle>
          <CardSubtitle className="more-sub">
            <strong>Gender: </strong>{gender}
          </CardSubtitle>
          <CardSubtitle className="more-sub">
            <strong>Status: </strong>{status}
          </CardSubtitle>
          <CardSubtitle className="more-sub">
            <strong>Character Info:</strong>
          </CardSubtitle>
          <CardText>
          Wow I really crononberg'd up the whole place huh Morty, just a bunch a cronenbergs walkin around. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Rubber baby buggy bumpers!
          </CardText>
        </CardBody>
      </Card>

      <div className="char-nav-btns">
        <Link to={`/characters/${id-1}`}>
          <Button className="prev-btn">
            Prev Character
          </Button>
        </Link>

        <Link to="/characters">
          <Button className="char-page-btn">
            Character Page
          </Button>
        </Link>

        <Link to={`/characters/${id+1}`}>
          <Button className="next-btn">
            Next Character
          </Button>
        </Link>
      </div> 
    </div>
  );
};

export default Character;