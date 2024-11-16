

import React, { useState } from 'react'

const Login = ({handlelogin}) => {


  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

function submitHandler(e){
  e.preventDefault()
  console.log('submitted')
}

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='rounded-xl border-2  border-emerald-600 px-12 py-28'>
                <form onSubmit={(e)=>{
                  submitHandler(e)
                  handlelogin(email,password)
                  // console.log("email :",email)
                  setemail('')
                  // console.log("password :",password)
                  setemail('')
                  setpassword('')
                }}
                 className='flex flex-col items-center justify-center' action="">
                    <input value={email}
                     onChange={(e)=>{
                      // console.log(e.target.value)
                      setemail(e.target.value)
                    } }

                     required className='outline-none bg-transparent  border-2 border-emerald-600 rounded-full px-5 text-xl py-4 placeholder:text-gray-400' type="email" placeholder='Enter your Email' />
                    <input 
                       value={password}
                       onChange={(e)=>{
                          setpassword(e.target.value)
                          // console.log(e.target.value)
                       }}
                    required className='outline-none bg-transparent  border-2 border-emerald-600 rounded-full px-5 text-xl py-4 mt-3 placeholder:text-gray-400' type="password" placeholder='Enter Password' />
                    <button className='mt-5 outline-none text-white bg-emerald-600 rounded-full px-8 border-none text-xl py-5 placeholder:text-white'>Log in</button>
                </form>
        </div>
    </div>
  )
}

export default Login
