import React from 'react';
import RandomQuote from './Components/randomQuote';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RandomQuote />
        </header>
      </div>
    );
  };
};
