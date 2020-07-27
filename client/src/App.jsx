import React, { Component } from 'react';
import Home from './components/Home';
import {Route, Switch, Link } from "react-router-dom";
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Link to = "/Movies">Movies </Link>
          <Link to = "/"> Home  </Link>
          <Link to = "/Details">Movie Details  </Link>

        </nav>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/Movies" render={(props) => <Movies {...props} />} />
          <Route exact path="/Details" render={(props) => <MovieDetails {...props} />} />
  
        </Switch>
    
      </div>
    );
  }
}

export default App;
