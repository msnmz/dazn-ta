import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Button, Header } from 'semantic-ui-react';

import PersonContext from '../context/person-context';

const Movie = () => {
  const { title } = useParams();
  const history = useHistory();
  const personContext = useContext(PersonContext);

  const handleBackClick = () => {
    history.push('/');
  }

  if (!personContext.results.films) {
    return (
      <Container style={{ paddingTop: 20 }}>
        <Button icon='arrow left' basic content='Back to actors search' onClick={handleBackClick} />
        <Header>Can not find movie with title: {title}</Header>
      </Container>
    )
  }
  const movie = personContext.results.films.find(f => f.title === title);
  console.log({ movie })
  return (
    <Container style={{ paddingTop: 20 }}>
      <Button icon='arrow left' basic content='Back to actors search' onClick={handleBackClick} />
      <Header as='h2'>{title}</Header>
      {movie.director && <p><strong>Director:</strong> {movie.director}</p>}
      {movie.producers && <p><strong>Producers:</strong> {movie.producers.join(', ')}</p>}
      {movie.releaseDate && <p><strong>Release Date:</strong> {new Date(movie.releaseDate).toDateString()}</p>}
      {movie.openingCrawl && <p><strong>Opening Crawl:</strong></p>}
      {movie.openingCrawl && <p>{movie.openingCrawl}</p>}
    </Container>
  )
}

export default Movie;