import React from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(20);

function Change(){
  setA(50)
}

  return (


    <div>
      <h1>{a}</h1>
      <button onClick={Change}>Clicked Here</button>
    </div>
  )
}

export default App
