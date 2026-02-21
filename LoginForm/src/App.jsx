import React, { useState } from 'react'
import './index.css'
import Google from './assets/google.png'
import github from './assets/github.webp'
const App = () => {

  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const submitHandle=(e)=>{
      e.preventDefault();
      console.log("form submitted");
      console.log(Password);
      console.log(email);
      setEmail('')
      setPassword('')
  }

  return (
    <div className='h-screen  bg-[black] flex items-center justify-center'>
       <div className="flex items-center justify-center bg-cover h-full w-full bg-center bg-[url('https://i.pinimg.com/736x/3c/37/f2/3c37f252a137532052162372e221d04e.jpg')]">
                <div className='h-[450px] w-[350px] bg-[#17151556] rounded-3xl p-6'>
                  <h1 className='text-[20px] text-white font-[500] text-center'>Welcome</h1>
                  <form className='flex flex-col gap-5 mt-12' onSubmit={(e)=>{
                             submitHandle(e);
                  }} >
                    <input className='py-3 px-3.5 w-full outline-none border-none focus:bg-[#b9baba72] bg-[#b9baba72] rounded-3xl text-[white]' type="email" placeholder='Email' value={email} onChange={(e)=>{
                      setEmail(e.target.value);
                    }}/>
                    <input className='py-3 px-3.5 w-full outline-none border-none focus:bg-[#b9baba72] bg-[#b9baba72] rounded-3xl text-[white]' type="password" placeholder='Password' value={Password} onChange={(e)=>{
                      setPassword(e.target.value);
                    }} />
                    <button className='py-3 px-2.5 w-full outline-none border-none bg-[#325d50] rounded-3xl mt-8 text-white active:scale-95'>LOGIN</button>
                  </form>
                      <div className='flex items-center justify-between mt-3 ml-2 mr-2 text-[#ffffffb0] text-[10px]'>
                        <p>Forget Password?</p>
                        <p>Sign up</p>
                      </div>
                      <hr className='border-[#ffffff3d] mt-3' />
                      <p className='text-[#ffffffe7] text-[10px] font-[500] text-center mt-3.5'>OR LOGIN WITH</p>
                           <div className='flex items-center justify-center gap-4 mt-4'>
                            <img className='h-[25px]' src={Google} alt="" />
                            <img className='h-[25px]' src={github} alt="" />
                           </div>
                </div>
       </div>
    </div>
  )
}

export default App
