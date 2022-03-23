import React from 'react'
import PropTypes from 'prop-types'
import './Combobox.css'

const Combobox = ({ lista }) => {
  console.log('aqui la lista ', lista)
  return (
    <div >
      <img src={require("./image-138.png")}></img>
      <select  className='Rectangle-26-Copy-23'>
        {
          lista.map( item => (

      
            <option key={item.id} value={item.id} >{ item.nombre }</option>
          ))
          
        }

      </select>



      
      
    </div>

    
  )
}

Combobox.propTypes = {
  lista: PropTypes.array.isRequired
}

Combobox.defaultProps = {
  lista: []
}


export default Combobox
