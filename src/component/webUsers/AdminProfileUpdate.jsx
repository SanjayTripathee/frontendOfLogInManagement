import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { bUrl } from '../../constant';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import htmlDateFormat from '../../utils/dateFormat';


const AdminProfileUpdate = () => {
  let [fullName,setFullName] = useState("")        
  let [dob,setDOB] = useState("")          
  let [gender,setGender] = useState("male") 
  
  let navigate = useNavigate()

  let token = localStorage.getItem("myToken")

  let handleSubmit = async (e)=>{
    e.preventDefault();
    let data = {  
      fullName,
      dob,
      gender,
    }
  
    // console.log(data)
    try {
      let result = await axios({
        url:`${bUrl}/web-users/update-profile`,   
        method:"patch",
        data:data,//it save all data in database(whatever we fill in form and click btn i.e Register )
        headers:{
            "Authorization":`Bearer ${token}`
          }
      })
      //console.log(result)//result bhitra ko data ko msg aaucha...
      navigate("/admin/my-profile")
    } catch (error) {
      toast.error(error.response.data.message)  
    }
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

  //to populate(occupy data)
  //first hit api and save it on useState function i.e setFullName(data.fullName)
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
    //   console.log(result)
    //   // console.log(result.data.data)
      let data = result.data.data
      setFullName(data.fullName)
      setDOB(data.dob)
      setGender(data.gender)
      
    } catch (error) {
      
    }
  }


  useEffect(() => {
    getAdminProfile()
  },[])
  return (
    <div>
      <form onSubmit={handleSubmit} >
<div>

<div>
  <label htmlFor="fullName">Full Name:</label>
  <input id='fullName' type="text" value={fullName}
  onChange={(e)=>{
    setFullName(e.target.value)
  }}
  
  />
 </div>     

 <div>
  <label htmlFor="dob">DOB:</label>
  <input id='dob' type="date" value={htmlDateFormat(dob)}
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
  <button type='submit'>Update</button>
</div>   

</form>
    </div>
  )
}

export default AdminProfileUpdate