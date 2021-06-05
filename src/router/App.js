import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Views
import Navbar from '../components/Navbar';
import Weather from '../pages/Weather';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';
// global styles
import '../styles/global.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Weather} />
        <Route exact path='/favorites' component={Favorites} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App;
