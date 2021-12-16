import React from 'react'

function Button({ className, name, label, onClick, disabled }) {
  return (
    <button
      type="button"
      className={ className }
      name={ name }
      onClick={ onClick }
      disabled={ disabled }
    >
      { label }
    </button>
  )
}

export default Button
