import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { bUrl } from '../../constant';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';


const AdminForgetPassword = () => {
  let [email,setEmail] = useState("")        
      

  
  let navigate = useNavigate()

  let token = localStorage.getItem("myToken")

  let handleSubmit = async (e)=>{
    e.preventDefault();
    let data = {
     email,
    }
    // console.log(data)
    try {
      let result = await axios({
        url:`${bUrl}/web-users/forgot-password`,   
        method:"post",
        data:data,//it save all data in database(whatever we fill in form and click btn i.e Register )      
      })
      setEmail("")
      toast.success("Link has send to your email to reset password.")
      //console.log(result)//result bhitra ko data ko msg aaucha...
    //   localStorage.removeItem("myToken")
    //   navigate("/admin/login")
    } catch (error) {
      toast.error(error.response.data.message)  
    }
  }
  

return (
 <div>
  <form onSubmit={handleSubmit} >

  <div>

 <div>
  <label htmlFor="email">Email:</label>
  <input id='email' type="email" value={email}
  onChange={(e)=>{
    setEmail(e.target.value)
  }}
  
  />
 </div>  

</div>    

<div>
  <button style={{cursor:"pointer"}} type='submit'>Forget Password</button>
</div>   

</form>
    </div>
  )
}

export default AdminForgetPassword