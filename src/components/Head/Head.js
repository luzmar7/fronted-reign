import React from 'react'
import PropTypes from 'prop-types'

import './Head.css';

const Head = ({ title }) => {
  return (
<div className="Rectangle-2-Copy">
  <span >
    { title }
  </span>
</div>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired
}
Head.defaultProps = {
  title : 'Hola mundo'
}



export default Head
