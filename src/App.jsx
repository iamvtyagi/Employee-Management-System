
import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployDashboard from './components/Dashboard/EmployDashboard'
import AdminDashbord from './components/Dashboard/AdminDashbord'
import CreateTask from './other/CreateTask'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/Authprovider'
import { useContext } from 'react'

const App = () => {

  //  useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  //  },)
  
  
  const [user, setUser] = useState(null)

  const handlelogin = (email,password) => {
      if(email === "admin@gmail.com" && password === "123"){
        setUser("admin")
        console.log(user)
      } else if(email === "employee@gmail.com" && password === "123"){
        setUser("employee")
        console.log(user)
      }
      else{
        alert("invalid")
      }
  }

  const data = useContext(AuthContext)

  
   

  return (
    <>
        {!user ? <Login handlelogin={handlelogin} /> : ""}
        {user === "admin" ? <AdminDashbord /> : <EmployDashboard />}
    </>
  ) 
}

export default App

