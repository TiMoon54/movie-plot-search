import React, { Component } from 'react';
import './App.css';
import MovieOverview from './pages/movie-overview/MovieOverviewContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <main className={'row'}>
          <MovieOverview />
        </main>
      </div>
    );
  }
}

export default App;
