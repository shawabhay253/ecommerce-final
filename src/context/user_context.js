import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  const {user,isLoading,loginWithRedirect,isAuthenticated,logout}=useAuth0()
  const [myUser,setmyUser]=useState(null)
  useEffect(()=>{
    setmyUser(user)
  },[user])
  return (
    <UserContext.Provider value={{loginWithRedirect,logout,myUser}}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
