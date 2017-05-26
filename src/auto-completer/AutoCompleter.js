import React from 'react';
import './AutoCompleter.css';

const AutoCompleter = props => {
  const items = props.searchData;

  // This regex filters items depending on input value
  const pattern = new RegExp("\\b" + props.inputValue);
  const regexedItems = items.filter(
    item => pattern.test(item.name)
  );

  // It limits displayed number of items 
  const displayLimiter = 8;
  const mappedItems = regexedItems.slice(0, displayLimiter).map(
    item =>
    <div
      className="option-item"
      key={item.id}
      onClick={props.handleItemSelect}
    >
      {item.name}
    </div>
  );

  return (
    <div className='container'>
      {mappedItems}
    </div>
  );
}

export default AutoCompleter;
