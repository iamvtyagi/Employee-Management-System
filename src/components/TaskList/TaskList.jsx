
import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className=' flex overflow-x-auto items-center justify-start gap-6 flex-nowrap h-[57%] w-full py-5 mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl' >
           <div className='flex justify-between items-center'>
            <h3  className='px-3 py-1 text-sm rounded bg-red-600'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
           <p className='text-base mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est cupiditate ullam dolorum laudantium dolor! Voluptate!
           </p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl' >
           <div className='flex justify-between items-center'>
            <h3 title='priority' className='px-3 py-1 text-sm rounded bg-red-600'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
           <p className='text-base mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est cupiditate ullam dolorum laudantium dolor! Voluptate!
           </p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gray-400 rounded-xl' >
           <div className='flex justify-between items-center'>
            <h3 title='priority' className='px-3 py-1 text-sm rounded bg-red-600'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
           <p className='text-base mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est cupiditate ullam dolorum laudantium dolor! Voluptate!
           </p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl' >
           <div className='flex justify-between items-center'>
            <h3 title='priority' className='px-3 py-1 text-sm rounded bg-red-600'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
           <p className='text-base mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est cupiditate ullam dolorum laudantium dolor! Voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloribus amet, dolorem delectus dolorum repellendus.
           </p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl' >
           <div className='flex justify-between items-center'>
            <h3 title='priority' className='px-3 py-1 text-sm rounded bg-red-600'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
           <p className='text-base mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est cupiditate ullam dolorum laudantium dolor! Voluptate!
           </p>
        </div>
    </div>
    
  )
}

export default TaskList
