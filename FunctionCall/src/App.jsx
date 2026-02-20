import React from 'react'

const App = () => {
function me(val){
console.log(val);
}
  return (
    <div>
<input onChange={function(elem){
me(elem.target.value)
}} type="text" placeholder='Enter Name' />
    </div>
  )
}

export default App
