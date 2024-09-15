import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { bUrl } from '../../constant';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';


const AdminPasswordUpdate = () => {
  let [oldPassword,setOldPassword] = useState("")        
  let [newPassword,setNewPassword] = useState("")        

  
  let navigate = useNavigate()

  let token = localStorage.getItem("myToken")

  let handleSubmit = async (e)=>{
    e.preventDefault();
    let data = {
      oldPassword,
      newPassword,
    }
    // console.log(data)
    try {
      let result = await axios({
        url:`${bUrl}/web-users/update-password`,   
        method:"patch",
        data:data,//it save all data in database(whatever we fill in form and click btn i.e Register )
        headers:{
            "Authorization":`Bearer ${token}`
          }
      })
      //console.log(result)//result bhitra ko data ko msg aaucha...
      localStorage.removeItem("myToken")
      navigate("/admin/login")
    } catch (error) {
      toast.error(error.response.data.message)  
    }
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit} >
<div>

<div>
  <label htmlFor="oldPassword">OldPassword:</label>
  <input id='oldPassword' type="password" value={oldPassword}
  onChange={(e)=>{
    setOldPassword(e.target.value)
  }}
  
  />
 </div>     

 <div>
  <label htmlFor="newPassword">NewPassword:</label>
  <input id='newPassword' type="password" value={newPassword}
  onChange={(e)=>{
    setNewPassword(e.target.value)
  }}
  
  />
 </div>  

</div>    

<div>
  <button type='submit'>UpdatePassword</button>
</div>   

</form>
    </div>
  )
}

export default AdminPasswordUpdate