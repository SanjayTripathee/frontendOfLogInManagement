import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bUrl } from '../../constant';


const AdminResetPassword = () => {
  let [password,setPassword] = useState("")        
       

  
  let navigate = useNavigate()

  let token = localStorage.getItem("myToken")

  let handleSubmit = async (e)=>{
    e.preventDefault();
    let data = {
      password,
    }
    // console.log(data)
    try {
      let result = await axios({
        url:`${bUrl}/web-users/reset-password`,   
        method:"patch",
        data:data,//it save all data in database(whatever we fill in form and click btn i.e Register )
        headers:{
            "Authorization":`Bearer ${token}`
          }
      })
      //console.log(result)//result bhitra ko data ko msg aaucha...
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
  <label htmlFor="password">Password:</label>
  <input id='password' type="password" value={password}
  onChange={(e)=>{
    setPassword(e.target.value)
  }}
  
  />
 </div>     

</div>    

<div>
  <button style={{cursor:"pointer"}} type='submit'>ResetPassword</button>
</div>   

</form>
    </div>
  )
}

export default AdminResetPassword