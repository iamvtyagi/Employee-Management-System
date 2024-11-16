
import React, { useState } from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'

const AdminDashbord = () => {




  return (
    <div className='min-h-screen w-full bg-[#1c1c1c] p-8'>
       <Header/>
       <CreateTask/>
       <AllTask/>
    </div>
  )
}

export default AdminDashbord
