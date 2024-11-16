import React, { createContext } from 'react'

 export const AuthContext = createContext() 

const Authprovider = ({children}) => {

  return (
    <div>
      <AuthContext.Provider value={"vansh"}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default Authprovider
