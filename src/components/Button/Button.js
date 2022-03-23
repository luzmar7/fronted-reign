import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
const Button = ({ text }) => {
  return (

    <button className='Rectangle'>
      <span >
        { text }
      </span>
    </button>
  )
}

Button.propType = {
  text: PropTypes.string.isRequired
}

Button.defaultProps = {
  text: 'Button'
}



export default Button
