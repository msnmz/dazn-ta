import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import logo from './movie-icon.svg';

const EmptyResult = () => {
  return (
    <Grid padded>
      <Grid.Row centered>
        <img src={logo} alt='Movie' style={{ width: 300, height: 300 }} />
      </Grid.Row>
      <Grid.Row centered>
        <Header as='h3'>
          Start exploring the information about your favorite actors
        </Header>
      </Grid.Row>
    </Grid>
  );
}

export default EmptyResult;