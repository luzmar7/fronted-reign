import React, { useState } from 'react'
import Button from './components/Button/Button.js'
import Combobox from './components/Combobox/Combobox.js';
import Head from './components/Head/Head.js'
import './index.css';
const HackerNewApp = () => {
  const [frameWorks, setFrameWorks] = useState([{ id: '1', nombre: 'Angular'}, { id:'2', nombre: 'React'}, { id: '3', nombre: 'VueJs'}]);
  console.log('FrameWorks', frameWorks )
  return (
    <div >
      <Head title = { 'HACKER NEWS' }/>
      <center>
      <Button text = {'All'} />
      <Button text = {'My faves'}/>
      </center>

      <Combobox lista = { frameWorks }/>
    </div>
  )
}

export default HackerNewApp
