import React, {useState} from 'react'
import Search from './Search'
import Translate from './Translate'



const App = props => {


  return (
    <div  style={{margin:'0 50px'}}>
      <Search/>
      <br></br>
      <Translate/>
    </div>
  )
}


export default App

