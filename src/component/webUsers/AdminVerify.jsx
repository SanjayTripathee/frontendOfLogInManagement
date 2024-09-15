import axios from 'axios'
import React, { useEffect } from 'react'
import { bUrl } from '../../constant'
import { useNavigate, useSearchParams } from 'react-router-dom'

const AdminVerify = () => {
  /* to get query of our url and get token from it*/
  let [query] = useSearchParams()
  let token = query.get("token")

  let navigate = useNavigate()
  let verifyEmail = ()=>{
    try {
      let result = axios({
        url:`${bUrl}/web-users/verify-email`,
        method:"patch",
        //to send token.syntax is
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      navigate("/admin/login")  
    } catch (error) {
      
    }
  }
 //in useEffect we hit api and verify email
  useEffect(()=>{
    verifyEmail()
  },[])
  return (
    <div>AdminVerify</div>
  )
}

export default AdminVerify  

