import React, { createContext, useState } from 'react'

export const userprofileupdatecontext = createContext()
export const adminprofileupdatecontext = createContext()

function Contextshare({children}) {

    const [userprofileupdatestatus,setuserprofileupdatestatus] = useState({})
    const [adminprofileupdatestatus,setadminprofileupdatestatus] = useState({})

  return (
    <userprofileupdatecontext.Provider value={{userprofileupdatestatus,setuserprofileupdatestatus}}><adminprofileupdatecontext.Provider value={{adminprofileupdatestatus,setadminprofileupdatestatus}}>{children}</adminprofileupdatecontext.Provider></userprofileupdatecontext.Provider>
  )
}

export default Contextshare