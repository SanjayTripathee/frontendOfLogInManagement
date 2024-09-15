import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalVariableContex } from "../App";

const ReactLink = () => {
  let global = useContext(GlobalVariableContex);
  // console.log(global)
  return (
    <div>
      <NavLink to="/admin/register" style={{ margin: "20px" }}>
        Admin Register
      </NavLink>

      {/* if u have token then only show myprofile i.e u must login otherwise dont show and we have save token globaly in global variable using context hooks */}
      {global.token ? (
        <>
          <NavLink to="/admin/my-profile" style={{ margin: "20px" }}>
            MyProfile
          </NavLink>
          <NavLink to="/admin/logout" style={{ margin: "20px" }}>
            Logout
          </NavLink>
          <NavLink to="/admin/update-password" style={{ margin: "20px" }}>
            UpdatePassword
          </NavLink>
          <NavLink to="/admin/read-all-user" style={{ margin: "20px" }}>
            ReadALLUser
          </NavLink>
        </>
      ) : (
       <>
         <NavLink to="/admin/login" style={{ margin: "20px" }}>
          Admin Login
        </NavLink>
       </>
      )}
    </div>
  );
};

export default ReactLink;
