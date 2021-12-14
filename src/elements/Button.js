import React from 'react'

function Button({ className, name, label, onClick }) {
  return (
    <button
      className={ className }
      name={ name }
      onClick={ onClick }
    >
      { label }
    </button>
  )
}

export default Button
