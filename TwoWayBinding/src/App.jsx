import React from 'react'
import './index.css'
import { useState } from 'react';

// Ek tir se do nishan that is the two way binding


const App = () => {

const [title, setTitle] = useState();

  const handle = (e)=>{
e.preventDefault();
console.log("Form Submitted By", title);
setTitle('');
  }

  return (
    <div className='m-20'>
      <form onSubmit={(e)=>{
        handle(e);
      }}>

      <input className='py-[15px] px-[20px] border-[2px] border-white bg-[black] text-white text-[15px] rounded' type="text" placeholder='Enter your name' value={title} onChange={(e)=>{
        setTitle(e.target.value);
      }} />

<button className='px-[20px] bg-[blue] py-[10px] text-white ml-[20px] rounded active:scale-95'>Submit</button>
   </form>
    </div>
  )
}

export default App