import React from 'react'
import {BedDouble} from 'lucide-react'
import {Bath} from 'lucide-react'
import {LandPlot} from 'lucide-react'
const Card = (props) => {
  return (
    <div className='h-[300px] w-[220px]  bg-cover bg-center rounded-[15px] flex items-end text-white overflow-hidden'
     style={{ backgroundImage: `url(${props.image})` }}
    >
<div className='bg-[#00000058] w-full p-2 flex flex-col gap-1.5'>
    <h1 className='text-[20px] font-[500]'>{props.name}</h1>
    <p className='opacity-60 text-[12px]'>{props.address}</p>
    <div className='flex justify-between'>

      <div className='flex items-center justify-between'> 
        <BedDouble size={14} className='opacity-60' />
        <p className='opacity-70 text-[12px] ml-0.5'>Bed: {props.beds}</p>
      </div>

       <div className='flex items-center gap-0.5'> 
        <Bath size={14} className='opacity-60'  /> 
        <p className='opacity-70 text-[12px]'>Bath: {props.baths}</p></div>


       <div className='flex items-center gap-0.5'> 
        <LandPlot size={14} className='opacity-60'  />
         <p className='opacity-70 text-[12px]'>Sqft: {props.sqft}</p></div>
    </div>
    <div className='flex gap-2'>
    <button className='px-3.5 py-1.5 bg-[#ffffff74] rounded-[25px] font-[500]'>$620</button>
    <button className='px-7.5 py-1.5 bg-white text-black font-[500] rounded-4xl text-[12px]'>Reserve Now</button>
</div>
</div>


    </div>
  )
}

export default Card