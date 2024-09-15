import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { bUrl } from "../../constant";

const ReadAllUser = () => {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  //  console.log(users)
  const getData = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/web-users`,
        method: "GET",
        //it take token and visit to read all user if token match it will show all user data
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("myToken")}` 
          }
      });
    //   console.log(result)
      setUsers(result.data.data);   
    } catch (error) {}
  };   

  useEffect(() => {
    getData();
  }, []);
  // console.log(users);
  let handleView = (id) => {  
    return (e) => {
      navigate(`/admin/${id}`);   
    };
  };

  let handleDelete = (id) => {
    return async (e) => {
      Swal.fire({
        title: "Are you sure you want to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          try {   
        let result = await axios({
          url: `${bUrl}/web-users/${id}`,   
          method: "Delete",
          headers:{
            "Authorization":`Bearer ${localStorage.getItem("myToken")}` 
          }
        });
        getData()// we call it because it will show all data in frontend of database when delete data (it is inValidation)  
        toast.success(result.data.message);//toast show popup msg
      } catch (error) {
        toast.error(error.response.data.message);
      }
        }
      });
      
    };
  };


  let handleUpdate = (id)=>(e)=>{  navigate(`/admin/update/${id}`);}
  return (
   <div>
{users.map((item, i) => {
  return (
    <div  key={i} style={{border:"1.2px solid black",margin:"10px", padding:"10px"}}> 
      <p>FullName:{item.fullName}</p>
      <p>Email:{item.email}</p>
      <p>Date of Birth:{item.dob}</p>
      <p>Gender:{item.gender}</p>
      <p>Role:{item.role}</p>

      <div>
        <button onClick={handleView(item._id)}>
          View
        </button>
        <button onClick={handleDelete(item._id)}>
          Delete
        </button>
        <button onClick={handleUpdate(item._id)}>
          Update

        </button>
      </div>
    </div>
  );
})}
</div> 
  );  
};

export default ReadAllUser;  



