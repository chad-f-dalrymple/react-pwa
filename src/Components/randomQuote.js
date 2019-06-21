import React from 'react';
import './randomquote.scss';

export default class RandomQuote extends React.Component {

  generateQuote() {
    fetch('https://api.kanye.rest').then(response => {
      return response.json();
    }).then(response => {
      response = response.quote;
      console.log(response);
      document.querySelector('.quote').innerHTML = response;
    })
  };

  render() {
    const className = [
      "quote-generator"
    ];

    return (
      <div className="quote-wrapper">
        <button onClick={this.generateQuote} className={className}>Generate Quote</button>
        <span>
          <p className="quote"></p>
        </span>
      </div>
    );
  }
};