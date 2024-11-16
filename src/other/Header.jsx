
import React from 'react'

const Header = () => {
  return (
    <div className='text-2xl flex items-end justify-between font-medium'>
      <h1>hello <br /> <span className='text-3xl font-semibold' >vansh 👋</span> </h1>
    <button className='bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header
