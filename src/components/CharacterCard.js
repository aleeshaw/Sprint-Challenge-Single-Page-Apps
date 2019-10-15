import React from "react";
import { Link } from "react-router-dom";
import { 
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody
} from "reactstrap";


const CharacterCard = ({characters}) => {

  function CharacterDetails({character}) {
    const { name, species, gender, status, origin, image } = character;
    return (
     
     <div>
      <Card className="grid-view">
        <CardImg top width="100%" src={image} alt={name} className="card-img"/>
        <CardBody>
          <CardTitle className="card-title">{name}</CardTitle>
          <CardSubtitle><strong>Species:</strong> {species}</CardSubtitle>
          <CardSubtitle><strong>Gender:</strong> {gender}</CardSubtitle>
          <CardSubtitle><strong>Status:</strong> {status}</CardSubtitle>
          <CardSubtitle>Origin: {origin.name}</CardSubtitle>
          <Link key={character.id} to={`/characters/${character.id}`}>
          <Button>More Info</Button>
          </Link>
        </CardBody>
      </Card>
      </div>
    )
  }
  return (
    <div className="card grid-view">
      {characters.map(character => (
        
        <CharacterDetails key={character.id} character={character} />
        
      ))}
    </div>
  );
};

export default CharacterCard;