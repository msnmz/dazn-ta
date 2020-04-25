import React, { useState, useEffect, useContext } from 'react';
import { Header, Container, Message } from 'semantic-ui-react';

import Search from '../components/Search';
import EmptyResult from '../components/EmptyResult';
import ActorList from '../components/ActorList';
import { getAllPeople } from '../utils/api';
import PersonContext from '../context/person-context';

const Index = () => {
  const peopleContext = useContext(PersonContext);
  const [searchResults, setSearchResults] = useState(peopleContext.results);
  const [filteredActors, setFilteredActors] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchClick = (searchText, setLoading) => {
    if (searchResults.people && searchText.length >= 3) {
      setLoading(true);
      setFilteredActors(searchResults.people.filter(p => p.name.toLowerCase().startsWith(searchText.toLowerCase())))
      setLoading(false);
    } else {
      setFilteredActors([]);
    }
  }

  useEffect(() => {
    if (!searchResults.films) {
      getAllPeople(setSearchResults, setError, setLoading);
    }
  }, [searchResults.films]);

  useEffect(() => {
    peopleContext.setResults(searchResults);
  }, [peopleContext, searchResults])

  return (
    <Container>
      <Header as='h1' style={{ paddingTop: 20, paddingLeft: 20, marginBottom: 0 }}>STAR WARS</Header>
      <Search placeholder='Search for movie actors' onSearch={handleSearchClick} onContinuousSearch={handleSearchClick} />
      {
        loading &&
        <Message info content='All actors are being fetched... Please be patient!' />
      }
      {
        error &&
        <Message error content={error} />
      }
      {!searchResults.people &&
        <EmptyResult />
      }
      {
        searchResults.people &&
        <ActorList actors={filteredActors.length > 0 ? filteredActors : searchResults.people} />
      }
    </Container>
  );
}

export default Index;