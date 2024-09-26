import axios from 'axios'
import React, { useState } from 'react'
import { bUrl } from '../../constant';
import { toast } from 'react-toastify'
import '../cssFolder/adminRegister.css'


const AdminRegister = () => {
  let [fullName,setFullName] = useState("")
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")          
  let [dob,setDOB] = useState("")          
  let [gender,setGender] = useState("male")          

  let handleSubmit = async (e)=>{
    e.preventDefault();
    let data = {
      fullName,
      email,
      password,
      dob,
      gender,
    }
    data = {
      ...data,
      role:"admin",//giving default value for role and isVerifyedEmail
      isVerifyedEmail:true,
    }
    // console.log(data)
    try {
      let result = await axios({
        url:`${bUrl}/web-users`,   
        method:"POST",
        data:data,//it save all data in database(whatever we fill in form and click btn i.e Register )
      })
      //console.log(result)//result bhitra ko data ko msg aaucha...
      // console.log(result.data.message)
      toast.success("A link has been send to your email. please click the given link and verify your account.")   
    } catch (error) {
      toast.error(error.response.data.message)  
    }
    setFullName("")
    setEmail("")
    setPassword("")
    setDOB("")
    setGender("male")
  }
  
  let genderOption = [
    {
      value: "male", //item.value
      label: "Male", //item.label
    },
    {
      value: "femail",
      label: "Femail",
    },
    {
      value: "other",
      label: "Other",
    },
  ];
  return (
    <div>
      <form onSubmit={handleSubmit} >
<div className='input'>

<div>
  <label htmlFor="fullName">Full Name:</label>
  <input id='fullName' type="text" value={fullName}
  onChange={(e)=>{
    setFullName(e.target.value)
  }}
  
  />
 </div>  

 <div>
  <label htmlFor="email">Email:</label>
  <input style={{width:"100%"}} id='email' type="emil" value={email}  
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

 <div>
  <label htmlFor="dob">DOB:</label>
  <input id='dob' type="date" value={dob}
  onChange={(e)=>{
    setDOB(e.target.value)
  }}
  
  />
 </div>  
   
 <div>
  <label>Gender</label>
    {genderOption.map((item,i)=>{
        return (    
            <div key={i}>
        <label htmlFor={item.value}>{item.label}</label>    
        <input type="radio" 
        id={item.value} 
        value={item.value} 
        checked={gender===item.value}
        onChange={(e)=>{
            setGender(e.target.value)
        }} />
          </div>
        )
    })}
  </div>

</div>    

<div>
  <button className='btn' type='submit'>Register</button>
</div>   

</form>
    </div>
  )
}

export default AdminRegister