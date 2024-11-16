
import React, { useState } from 'react'

const CreateTask = () => {
    const [taskTitle, settaskTitle] = useState('')
    const [date, setdate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')
    const [description, setdescription] = useState('')
  
    // Add submit handler function
    const submitHandler = (e) => {
      e.preventDefault()
      // Add your form submission logic here
      console.log({ taskTitle, date, assignTo, category, description })
    }

  return (
   <>
          <div className='max-w-6xl mx-auto mt-8'>
        <form onSubmit={(e)=>{
           submitHandler(e)
           settaskTitle('')
           setdate('')
           setassignTo('')
           setcategory('')
           setdescription('')
        }} 

        className='flex gap-40 w-full bg-black-50  rounded-lg shadow-lg p-8 '>
          <div className='w-full lg:w-1/2 space-y-6'>
            <div>
              <h3 className='text-gray-700 font-medium mb-2'>Task Title</h3>
              <input 
                value={taskTitle}
                onChange={(e)=>{
                  // console.log(e.target.value)
                  settaskTitle(e.target.value)
                }}
                type="text" 
                placeholder='Make a UI design'
                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-black'
              />
            </div>
            <div>
              <h3 className='text-gray-700 font-medium mb-2'>Date</h3>
              <input 
              value={date}
                onChange={(e)=>{
                  // console.log(e.target.value)
                  setdate(e.target.value)
                }}
                type="date"
                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-black'
              />
            </div>
            <div>
              <h3 className='text-gray-700 font-medium mb-2'>Assign to</h3>
              <input 
                value={assignTo}
                onChange={(e)=>{
                  // console.log(e.target.value)
                  setassignTo(e.target.value)
                }}
                type="text" 
                placeholder='Employee name'
                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-black'
              />
            </div>
            <div>
              <h3 className='text-gray-700 font-medium mb-2'>Category</h3>
              <input 
                value={category}
                onChange={(e)=>{
                  // console.log(e.target.value)
                  setcategory(e.target.value)
                }}
                type="text" 
                placeholder='Design, Dev, etc'
                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-black'
              />
            </div>
          </div>

          <div className='w-full lg:w-1/2 space-y-6'>
            <div>
              <h3 className='text-gray-700 text-2xl mb-2 mt-12'>Description</h3>
              <textarea 
                value={description}
                onChange={(e)=>{
                  // console.log(e.target.value)
                  setdescription(e.target.value)
                }}  
                className='w-full h-48 px-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none text-black'
                placeholder='Enter task description...'
              ></textarea>
            </div>
            <button className='w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3 rounded-md transition duration-200 ease-in-out transform hover:-translate-y-1'>
              Create Task
            </button>
          </div>
        </form>
       </div>
   </>
  )
}

export default CreateTask
