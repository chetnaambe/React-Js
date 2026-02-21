import React, { useState } from 'react'
import './index.css'

const App = () => {

const submitHandler= (e)=>{
  e.preventDefault();
  
const copyTask = [...task];
copyTask.push({title,details})
setTask(copyTask)

  setTitle('')
  setDetails('')
}

const [title, setTitle] = useState('');
const [details, setDetails] = useState('');
const [task, setTask] = useState([]);


  return (
    <div className='h-screen lg:flex bg-black text-white'>


      <form className='flex items-start gap-4 lg:w-1/2 flex-col p-10' onSubmit={(e)=>{
       submitHandler(e);
      }}>

<h1 className='text-3xl font-bold'>Add Notes</h1>

{/* Pehla input for heading */}
          <input
        type="text" 
        placeholder='Enter A notes Head'
        className='px-5 py-2 w-full font-medium border-2 rounded outline-none'
        value={title}
        onChange={(e)=>{
       setTitle(e.target.value)
        }}
        />

{/* Detailed Input */}
       <textarea 
       type="text"
        placeholder='Enter a notes'
        className='px-5 py-2 w-full h-32 font-medium flex items-start flex-row border-2 rounded outline-none'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value);
        }}
        />

        <button className='bg-white w-full text-black px-5 font-medium py-2 rounded outline-none'>Add Notes</button>
        
   


      </form>

<div className='lg:w-1/2 p-10 lg:border-l-2'>
<h1 className='text-3xl font-bold'>Recent Notes</h1>
<div className='flex flex-wrap items-start gap-5 h-full mt-5 overflow-auto'>
  
{task.map(function(elem ,idx){
return <div key={idx} className="h-52 w-40 rounded-2xl text-black p-4 bg-white">
  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
  <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
</div>
})}
    

</div>



    </div>
    </div>
  )
}

export default App

