import React, { Children, createContext, useEffect, useState } from 'react'


export const userauthcontext = createContext()


function Authcontext({children}) {

    const [role,setrole] = useState("")
    const [authorizeduser,setauthorizeduser] = useState(false)

    useEffect(()=>{
        if(sessionStorage.getItem("existinguser") && sessionStorage.getItem("token")){
            const user = JSON.parse(sessionStorage.getItem("existinguser"))
            setrole(user.role)
            setauthorizeduser(true)
        }
    },[role,authorizeduser])

  return (
    <userauthcontext.Provider value={{role,authorizeduser,setauthorizeduser}}>{children}</userauthcontext.Provider>
  )
}

export default Authcontext