import React, { useState } from 'react';
import { Input, Grid, Button } from 'semantic-ui-react';

const Search = ({ onInputChange, placeholder, onSearch, onContinuousSearch }) => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleInputChange = e => {
    setSearchText(e.target.value);
    onInputChange && onInputChange(e);
    onContinuousSearch && onContinuousSearch(e.target.value, setLoading);
  }

  const handleSearchClick = () => {
    setLoading(true);
    onSearch && onSearch(searchText, setLoading);
  }

  return (
    <>
      <Grid padded>
        <Grid.Column style={{ paddingRight: 0 }} mobile={14} tablet={14} computer={14}>
          <Input fluid loading={loading} value={searchText} onChange={handleInputChange} placeholder={placeholder} />
        </Grid.Column>
        <Grid.Column mobile={2} tablet={2} computer={2}>
          <Button basic icon='search' onClick={handleSearchClick} />
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Search;