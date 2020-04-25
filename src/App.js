import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './pages/Index';
import Movie from './pages/Movie';
import PersonContext from './context/person-context';
import './App.css';

function App() {
  const [result, setResult] = useState({});

  const setResults = useCallback((results) => {
    setResult(results);
  }, []);

  return (
    <PersonContext.Provider value={{ results: result, setResults }}>
      <Router>
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/:title' component={Movie} />
        </Switch>
      </Router>
    </PersonContext.Provider >
  );
}

export default App;
