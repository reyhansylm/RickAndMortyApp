import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/favorites" component={FavoritePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
