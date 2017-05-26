import React from 'react';
import './AutoCompleter.css';

const AutoCompleter = props => {
  const items = props.searchData;

  // This regex filters items depending on input value, case-insesitive matching
  const pattern = new RegExp("\\b" + props.inputValue, "i");
  const regexedItems = items.filter(
    item => pattern.test(item.name)
  );
  // fires when item is clicked; args: id of a person, type: number
  const handleClick = id => {
    props.handleItemSelect(id)
  }
  const handleMouseEnter = id => {
    props.showSurname(id)
  }

  // It limits displayed number of items and maps them to html markup 
  const displayLimiter = 8;
  const mappedItems = regexedItems.slice(0, displayLimiter).map(
    item =>
    <div
      className="option-item"
      key={item.id}
      onClick={()=>handleClick(item.id)}
      onMouseEnter={() => handleMouseEnter(item.id)}
    >
        {item.name} {props.surnameValue === item.surname ? item.surname : null}
    </div>
  );
// if search doesn't bring any results, nothing is displayed
  if (mappedItems.length !== 0){
    return (
      <div className='container'>
        {mappedItems}
      </div>
    );
  } else {
    return null
  }
  
}

export default AutoCompleter;
