import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { bUrl } from '../../constant'
import { useNavigate, useParams } from 'react-router-dom'

const ReadSpeceficUser = () => {
  let [user,setuser] = useState({})
  let navigate = useNavigate()
  let token = localStorage.getItem("myToken")

  let params = useParams()


  let getAdminuser = async ()=>{
    try {
      let result = await axios({
        url:`${bUrl}/web-users/${ params.id}`,
        method:"get",
        //get token from local storage.which we have done above and save it at variable token
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      // console.log(result.data.data)
      console.log(result)
      setuser(result.data.data)
    } catch (error) {
      
    }
  }


  useEffect(() => {
    getAdminuser()
  },[])
  return (
    <div>
      <p>FullName = {user.fullName}</p>
      {/* to convert into date wrap with newDate().toLocaleDateString() */}
      <p>Date of Birth = {new Date(user.dob).toLocaleDateString()}</p>
      <p>Email = {user.email}</p>
      <p>Gender = {user.gender}</p>
      <p>Role = {user.role}</p>

      <button onClick={()=>{
        navigate('/admin/user-update')
      }}>Updateuser</button>
    </div>
  )
}

export default ReadSpeceficUser
