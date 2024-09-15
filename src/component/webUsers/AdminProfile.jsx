import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { bUrl } from '../../constant'
import { useNavigate } from 'react-router-dom'

const AdminProfile = () => {
  let [profile,setProfile] = useState({})
  let navigate = useNavigate()
  let token = localStorage.getItem("myToken")

  let getAdminProfile = async ()=>{
    try {
      let result = await axios({
        url:`${bUrl}/web-users/my-profile`,
        method:"get",
        //get token from local storage.which we have done above and save it at variable token
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      // console.log(result.data.data)
      // console.log(result)
      setProfile(result.data.data)
    } catch (error) {
      
    }
  }


  useEffect(() => {
    getAdminProfile()
  },[])
  return (
    <div>
      <p>FullName = {profile.fullName}</p>
      {/* to convert into date wrap with newDate().toLocaleDateString() */}
      <p>Date of Birth = {new Date(profile.dob).toLocaleDateString()}</p>
      <p>Email = {profile.email}</p>
      <p>Gender = {profile.gender}</p>
      <p>Role = {profile.role}</p>

      <button onClick={()=>{
        navigate('/admin/profile-update')
      }}>UpdateProfile</button>
    </div>
  )
}

export default AdminProfile
