import React from 'react'
import './index.css';
const App = () => {

const SubmitHandle=(e)=>{
e.preventDefault()
  console.log("Form Submitted");
}

  return (
    <div className='m-20'>
<form className='flex flex-col gap-[20px]' onSubmit={(e)=>{
SubmitHandle(e)
}}>
  <input className='border-[2px] border-[red] px-[20px] py-[15px] text-[blue] text-[18px]' type="text" placeholder='Enter your name' />
 
  <button className='px-[20px] bg-[blue] text-white py-[20px] ml-[20px] rounded-[20px] w-fit'>Submit</button>
</form>
    </div>
  )
}

export default App