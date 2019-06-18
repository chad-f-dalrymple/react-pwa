import React from 'react';
// import PropTypes from 'prop-types';
import './randomquote.css';

export default class RandomQuote extends React.Component {
  // static propTypes = {
  //   quote: PropTypes.string
  // };

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
      <div className={this.className}>
        <button onClick={this.generateQuote} className={className} />
        <p className="quote"></p>
      </div>
    );
  }
};