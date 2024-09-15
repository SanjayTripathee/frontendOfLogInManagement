import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalVariableContex } from '../../App'

const AdminLogout = () => {
  let global = useContext(GlobalVariableContex)
    let navigate = useNavigate()
    
    useEffect(()=>{
      localStorage.removeItem("myToken")
      global.setToken(null)
        navigate('/')
    },[])  
  return (
    <div>AdminLogout</div>
  )
}

export default AdminLogout