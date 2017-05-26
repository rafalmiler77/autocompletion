import React, { Component } from 'react';
import './AutoCompleter.css';

const AutoCompleter = props => {

  const items = props.searchData;

  // This regex filters items depending on input value
  const pattern = new RegExp("\\b" + props.inputValue);
  const regexedItems = items.filter(
    // item => item.name === this.state.inputValue,
    item => pattern.test(item.name)
  );

  // It limits displayed number of items 
  const displayLimiter = 8;
  const mappedItems = regexedItems.slice(0, displayLimiter).map(
    item => <p key={item.id}>{item.name}</p>
  );

  return (
    <div>
      {mappedItems}
    </div>
  );
}

export default AutoCompleter;
