import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { bUrl } from '../../constant'
import { useNavigate } from 'react-router-dom'


const AdminLogin = () => {
  let navigate = useNavigate()

  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")          
        

  let handleSubmit = async (e)=>{
    e.preventDefault();
    let data = {
      email,
      password,     
    }
    try {
      let result = await axios({
        url:`${bUrl}/web-users/login`,   
        method:"POST",
        data:data,//it save all data in database(whatever we fill in form and click btn i.e Register )
      })
      let myToken = result.data. myToken
      localStorage.setItem("myToken",myToken)
      // console.log(result)//result bhitra ko data ko msg aaucha...
      navigate("/admin")  
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
  <input id='email' type="emil" value={email}  
  onChange={(e)=>{
    setEmail(e.target.value)
  }}
  />
 </div>

 <div>
  <label htmlFor="password">password:</label>
  <input id='password' type="password" value={password}
  onChange={(e)=>{
    setPassword(e.target.value)
  }}
  
  />
 </div>  

</div>    

<div>
  <button style={{margin:"20px", cursor:"pointer"}} type='submit'>Login</button>
  <button style={{cursor:"pointer"}} onClick={()=>navigate("/admin/forgot-password")}>Forget Password</button>
</div>   

</form>
    </div>
  )
}

export default AdminLogin
