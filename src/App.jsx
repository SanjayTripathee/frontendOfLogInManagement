import React, { createContext, useState } from 'react'
import ReactLink from './component/ReactLink'
import ReacterRouter from './component/ReacterRouter'

export let GlobalVariableContex = createContext()
const App = () => {
  let [token,setToken] = useState(localStorage.getItem("myToken"))
  return (  
    <div>
    
      <GlobalVariableContex.Provider value={{token:token , setToken:setToken}}>
         <ReactLink/>
         <ReacterRouter/>
      </GlobalVariableContex.Provider>
    
    </div>
  )
}

export default App    