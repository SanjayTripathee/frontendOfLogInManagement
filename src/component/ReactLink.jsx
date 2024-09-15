import React from 'react'
import { NavLink } from 'react-router-dom'

const ReactLink = () => {
  return (
    <div>
        <NavLink to="/admin/register" style={{margin:"20px"}}>Admin Register</NavLink>
        <NavLink to="/admin/login" style={{margin:"20px"}}>Admin Login</NavLink>
        <NavLink to="/admin/my-profile" style={{margin:"20px"}}>MyProfile</NavLink>
        <NavLink to="/admin/logout" style={{margin:"20px"}}>Logout</NavLink>
        <NavLink to="/admin/update-password" style={{margin:"20px"}}>UpdatePassword</NavLink>
        <NavLink to="/admin/read-all-user" style={{margin:"20px"}}>ReadALLUser</NavLink>
    </div>
  )
}

export default ReactLink

