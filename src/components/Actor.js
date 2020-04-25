import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Actor = ({ image = './profile-avatar.png', name, birthDate, height, gender, movies = [] }) => {
  return (
    <Grid padded style={{ border: '1px solid black', height: '100%' }}>
      <Grid.Column computer={4} mobile={4} tablet={4}>
        <Image src={image} size='medium' />
      </Grid.Column>
      <Grid.Column computer={6} mobile={6} tablet={6} style={{ paddingLeft: 0 }}>
        <Header as='h5'>{name}</Header>
        <Header.Content>Born in {birthDate}</Header.Content>
        <Header.Content>height {height}</Header.Content>
        <Header.Content>{gender}</Header.Content>
      </Grid.Column>
      <Grid.Column computer={6} mobile={6} tablet={6} style={{ paddingLeft: 0 }}>
        <Header as='h5'>Movies</Header>
        {
          movies && movies.length > 0 &&
          (
            <ul style={{ paddingLeft: 0 }}>
              {
                movies.map((m, idx) => (
                  <li><Link to={`/${m.title}`} key={`movie_${m.title}`}>{m.title}</Link></li>
                ))
              }
            </ul>
          )
        }
      </Grid.Column>
    </Grid>
  );
}

export default Actor;