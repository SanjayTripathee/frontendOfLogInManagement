// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { bUrl } from "../../constant";
// import { useNavigate } from "react-router-dom";

// const AdminProfile = () => {
//   let [profile, setProfile] = useState({});
//   let navigate = useNavigate();
//   let token = localStorage.getItem("myToken");

//   let getAdminProfile = async () => {
//     try {
//       let result = await axios({
//         url: `${bUrl}/web-users/my-profile`,
//         method: "get",
//         //get token from local storage.which we have done above and save it at variable token
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       // console.log(result.data.data)
//       // console.log(result)
//       setProfile(result.data.data);
//     } catch (error) {}
//   };

//   useEffect(() => {
//     getAdminProfile();
//   }, []);
//   return (
//     <div>
//       <p>FullName = {profile.fullName}</p>
//       {/* to convert into date wrap with newDate().toLocaleDateString() */}
//       <p>Date of Birth = {new Date(profile.dob).toLocaleDateString()}</p>
//       <p>Email = {profile.email}</p>
//       <p>Gender = {profile.gender}</p>
//       <p>Role = {profile.role}</p>

//       <button
//         onClick={() => {
//           navigate("/admin/profile-update");
//         }}
//       >
//         UpdateProfile
//       </button>
//     </div>
//   );
// };

// export default AdminProfile;


import axios from "axios";
import React, { useEffect, useState } from "react";
import { bUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import '../cssFolder/profile.css'

const AdminProfile = () => {
  let [profile, setProfile] = useState({});
  let navigate = useNavigate();
  let token = localStorage.getItem("myToken");

  let getAdminProfile = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/web-users/my-profile`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAdminProfile();
  }, []);

  return (
    <div className="admin-profile-page">
      <div className="profile-container">
        <p className="profile-item">Full Name: {profile.fullName}</p>
        <p className="profile-item">
          Date of Birth: {new Date(profile.dob).toLocaleDateString()}
        </p>
        <p className="profile-item">Email: {profile.email}</p>
        <p className="profile-item">Gender: {profile.gender}</p>
        <p className="profile-item">Role: {profile.role}</p>

        <button
          className="update-profile-button"
          onClick={() => {
            navigate("/admin/profile-update");
          }}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
