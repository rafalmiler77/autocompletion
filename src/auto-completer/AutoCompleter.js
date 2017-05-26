import React from 'react';
import './AutoCompleter.css';

const AutoCompleter = props => {
  const items = props.searchData;

  // This regex filters items depending on input value
  const pattern = new RegExp("\\b" + props.inputValue, "i");
  const regexedItems = items.filter(
    item => pattern.test(item.name)
  );
  const handleClick = id => {
    console.log('id',id)
    props.handleItemSelect(id)
  }

  // It limits displayed number of items 
  const displayLimiter = 8;
  const mappedItems = regexedItems.slice(0, displayLimiter).map(
    item =>
    <div
      className="option-item"
      key={item.id}
      onClick={()=>handleClick(item.id)}
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
