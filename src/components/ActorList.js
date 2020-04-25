import React from 'react';
import { Grid } from 'semantic-ui-react';
import Actor from './Actor';


const ActorList = ({ actors }) => {
  console.log({ actors })
  return (
    <Grid padded>
      {
        actors.map(act => (
          <Grid.Column key={act.name} computer={5} mobile={16} tablet={8}>
            <Actor name={act.name} height={act.height} gender={act.gender} birthDate={act.birthYear} movies={act.films} />
          </Grid.Column>
        ))
      }
    </Grid>
  );
}

export default ActorList;