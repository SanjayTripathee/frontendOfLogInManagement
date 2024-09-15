import React, { useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AdminLogin from "./webUsers/AdminLogin";
import AdminLogout from "./webUsers/AdminLogout";
import AdminProfile from "./webUsers/AdminProfile";
import AdminRegister from "./webUsers/AdminRegister";
import AdminVerify from "./webUsers/AdminVerify";
import AdminProfileUpdate from "./webUsers/AdminProfileUpdate";
import AdminPasswordUpdate from "./webUsers/AdminPasswordUpdate";
import AdminForgetPassword from "./webUsers/AdminForgetPassword";
import AdminResetPassword from "./webUsers/AdminResetPassword";
import ReadAllUser from "./webUsers/ReadAllUser";
import ReadSpeceficUser from "./webUsers/ReadSpeceficUser";
import UpdateSpeceficUser from "./webUsers/UpdateSpeceficUser";
import { GlobalVariableContex } from "../App";

const ReacterRouter = () => {
  let { token, setToken } = useContext(GlobalVariableContex);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet></Outlet>}>
          {/* index on a Route, it means that this route will be rendered when the parent route's path is matched exactly. */}
          <Route index element={<div>Home Page</div>}></Route>

          <Route path="verify-email" element={<AdminVerify />}></Route>
          <Route path="reset-password" element={<AdminResetPassword />}></Route>

          <Route path="admin" element={<Outlet />}>
            <Route index element={<div>This is admin dashBoard</div>}></Route>
            <Route path="register" element={<AdminRegister />}></Route>

            {token ? (
              <>
                <Route
                  path="update-password"
                  element={<AdminPasswordUpdate />}
                ></Route>
                <Route path="read-all-user" element={<ReadAllUser />}></Route>
                <Route path=":id" element={<ReadSpeceficUser />}></Route>
                <Route path="update" element={<Outlet />}>
                  <Route path=":id" element={<UpdateSpeceficUser />}></Route>
                </Route>
                <Route path="logout" element={<AdminLogout />}></Route>
                <Route path="my-profile" element={<AdminProfile />}></Route>
                <Route
                  path="profile-update"
                  element={<AdminProfileUpdate />}
                ></Route>
              </>
            ) : (
              <Route path="login" element={<AdminLogin />}></Route>
            )}
            <Route
              path="forgot-password"
              element={<AdminForgetPassword />}
            ></Route>
          </Route>
        </Route>
        <Route path="*" element={<div>404 Page</div>}></Route>
      </Routes>
    </div>
  );
};

export default ReacterRouter;
