import React from 'react'
import Factory from '../assets/factory.jpg';

export const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Factory} alt="/" />
            <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALAYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage data analytics Centrally </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora optio corrupti nesciunt atque necessitatibus repellat at illum nemo delectus soluta praesentium ducimus suscipit, fugit vitae, aliquam, ad fuga aspernatur.</p>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>

    </div>
  )
}
