import React from 'react';

function Select({ className, name, arrayOptions, onChange }) {
  return (
    <select
      className={ className }
      name={ name }
      onChange={ onChange }
    >
    {
      arrayOptions.map((item, index) => (
        <option
          key={ index }
          value={ item.value }
        >
          { item.description }
        </option>
      ))
    }
    </select>
  )
}

export default Select;
