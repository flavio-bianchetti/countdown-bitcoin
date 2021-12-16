import React from 'react';

function Input({ className, type, name, value, onChange, label, size, min, max, disabled }) {
  return (
    <fieldset>
      <legend>{ label }</legend>
      <input
        className={ className }
        type={ type }
        name={ name }
        value={ value[name] }
        onChange={ onChange }
        size={ size }
        min={ min }
        max={ max }
        disabled={ disabled }
      />
    </fieldset>
  )
}

export default Input;
