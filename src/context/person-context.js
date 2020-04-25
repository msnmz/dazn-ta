import React, { createContext } from 'react';

const personContext = createContext({
  results: {},
  setResults: () => null
});

export default personContext;