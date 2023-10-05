import clsx from "https://cdn.skypack.dev/clsx@1.1.1";

import { useEffect, useState } from "react";

import { useSpring, animated, config } from "react-spring";
import "./dashboard.css";
import logo3 from "../../images/logo3.png";
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../../services/redux/middleWare/getClient";
import { ContactSupportOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { client } from "../../services/client";
import { getRequest } from "../../services/redux/middleWare/getRequest";
import maidicon from "../../images/maid.png";
import electricianicon from "../../images/electrician.png";
import tutoricon from "../../images/tutor.png";
import securityicon from "../../images/policeman (1).png";
import sguardicon from "../../images/policeman.png";
import workericon from "../../images/worker.png";
import usericon from "../../images/users.png";
import pendingicon from "../../images/file.png";
import approveicon from "../../images/verify (1).png";
import logouticon from "../../images/check-out.png";
import Chief from "../../images/chief.png";
import Sitter from "../../images/sitter.png";

export default function Dashboard() {
  const [showSidebar, onSetShowSidebar] = useState("user");
  const [maid, setMaid] = useState(0);
  const [electrician, setElectrician] = useState(0);
  const [tutor, setTutor] = useState(0);
  const [guard, setGuard] = useState(0);
  const [data, setData] = useState();
  const [count, setCount] = useState();
  const [userData, setUserData] = useState();
  const state = useSelector((state) => state.getRequest.getRequestData);
  console.log("requested dat", state);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClient()).then((res) => {
      console.log("i am in dashboard", res.payload);
      setData(res.payload);
      const dataOk = {};
      for (let i of res.payload) {
        // console.log(i," this is pk")
        if (dataOk[i.heading.replace(" ", "")]) {
          dataOk[i.heading.replace(" ", "")] += 1;
        } else {
          dataOk[i.heading.replace(" ", "")] = 1;
        }
      }
      console.log("im is ith", dataOk);
      setCount(dataOk);
    });
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.get("getUser");
        console.log(res.data.data);
        setUserData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    dispatch(getRequest());
  }, []);

  return (
    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <nav
        style={{ paddingLeft: "50px" }}
        class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
        id="navbarVertical"
      >
        <div class="container-fluid">
          <div style={{ marginBottom: "20px", marginLeft: "42px" }}>
            <img height={"130px"} width={"130px"} src={logo3} />
          </div>

          <div class="collapse navbar-collapse" id="sidebarCollapse">
            <ul class="navbar-nav">
              <li
                onClick={() => {
                  onSetShowSidebar("user");
                }}
                class="nav-item"
              >
                <a class="nav-link" href="#">
                  <i class="">
                    <img
                      src={workericon}
                      alt="worker icon"
                      height={35}
                      width={35}
                    />
                  </i>{" "}
                  Workers
                </a>
              </li>
              <li
                onClick={() => {
                  onSetShowSidebar("register");
                }}
                class="nav-item"
              >
                <a class="nav-link" href="#">
                  <i class="">
                    <img
                      src={usericon}
                      alt="worker icon"
                      height={35}
                      width={35}
                    />
                  </i>{" "}
                  Users
                </a>
              </li>
              <li
                onClick={() => {
                  onSetShowSidebar("req");
                }}
                class="nav-item"
              >
                <a class="nav-link" href="#">
                  <i class="">
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/748/748463.png?w=740&t=st=1684674009~exp=1684674609~hmac=29a902dcad4fa0bf718aec73e747d55678b6175fcb0193a468b85ab697f52543" 
                        alt=""  height={35} width={35}/>   */}
                    <img
                      src={approveicon}
                      alt="worker icon"
                      height={35}
                      width={35}
                    />
                  </i>{" "}
                  Approved Request
                </a>
              </li>
              <li
                onClick={() => {
                  onSetShowSidebar("Pending");
                }}
                class="nav-item"
              >
                <a class="nav-link" href="#">
                  <i class="">
                    <img
                      src={pendingicon}
                      alt="pending req"
                      height={35}
                      width={35}
                    />
                  </i>{" "}
                  Pending Request
                </a>
              </li>
            </ul>

            <hr class="navbar-divider my-5 opacity-20" />

            <div class="mt-auto"></div>

            <ul class="navbar-nav">
              <li
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
                class="nav-item"
              >
                <a
                  class="nav-link"
                  href="#"
                  style={{
                    paddingLeft: "12px",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  <i class="">
                    <img
                      src={logouticon}
                      alt="logging out"
                      height={35}
                      width={35}
                    />
                  </i>{" "}
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showSidebar === "user" && (
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
              <div class="row g-6 mb-6">
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Maid
                          </span>
                          <span class="h3 font-bold mb-0">
                            {count?.Maid ? count?.Maid : "0"}
                          </span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                            <i class="">
                              <img src={maidicon} alt="maid icon" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Electrician
                          </span>
                          <span class="h3 font-bold mb-0">
                            {count?.Electrician ? count?.Electrician : "0"}
                          </span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                            <i class="">
                              <img
                                src={electricianicon}
                                alt="electrician icon"
                              />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Home Tutor
                          </span>
                          <span class="h3 font-bold mb-0">
                            {count?.HomeTutor ? count?.HomeTutor : "0"}
                          </span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                            <i class="">
                              <img src={tutoricon} alt="tutor icon" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3  col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Security Guard
                          </span>
                          <span class="h3 font-bold mb-0">
                            {count?.SecurityGuard ? count?.SecurityGuard : "0"}
                          </span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                            <i class="">
                              <img src={securityicon} alt="guard icon" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 mt-2 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Baby Sitter
                          </span>
                          <span class="h3 font-bold mb-0">
                            {count?.BabySitter ? count?.BabySitter : "0"}
                          </span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                            <i class="">
                              <img src={Chief} alt="guard icon" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 mt-2 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Driver
                          </span>
                          <span class="h3 font-bold mb-0">
                            {count?.Driver ? count?.Driver : "0"}
                          </span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                            <i class="">
                  
                              <img src="https://e7.pngegg.com/pngimages/990/83/png-clipart-taxicab-driver-illustration-taxi-car-driving-chauffeur-bus-taxi-driver-file-driving-hat-thumbnail.png"  alt="guard icon" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 mt-2 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Cook
                          </span>
                          <span class="h3 font-bold mb-0">
                            {count?.Cook ? count?.Cook : "0"}
                          </span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                            <i class="">
                              <img src={Chief} alt="guard icon" />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card shadow border-0 mb-7">
                <div class="card-header">
                  <h5 class="mb-0">Detail Posts</h5>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover table-nowrap">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Cnic</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Maritial Status</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Qualification</th>
                        <th scope="col">Category</th>
                        <th scope="col">Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((item, index) => {
                        return (
                          <tr>
                            <td>
                              <img
                                alt="..."
                                src={item?.image}
                                class="avatar avatar-sm rounded-circle me-2"
                              />
                              <a class="text-heading font-semibold" href="#">
                                {item?.name}
                              </a>
                            </td>
                            <td>{item?.cnic}</td>
                            <td>
                              <img
                                alt="..."
                                src="https://cdn-icons-png.flaticon.com/512/172/172163.png?w=740&t=st=1684671880~exp=1684672480~hmac=bba16cd745777bba2f3d7ba6367b9f09db4256b8603541cf0526304774b1ebf9"
                                class="avatar avatar-xs rounded-circle me-2"
                              />
                              <a class="text-heading font-semibold" href="#">
                                {item?.gender}
                              </a>
                            </td>
                            <td>{item?.maritialStatus}</td>
                            <td>{item?.contact}</td>
                            <td class="">{item?.qualification}</td>
                            <td class="" style={{ color: "blue" }}>
                              {item?.heading}
                            </td>
                            <td class="">{item?.service}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div class="card-footer border-0 py-5">
                  <span
                    class="text-muted text-sm"
                    style={{ fontWeight: "bold", fontSize: "14px" }}
                  >
                    Total Workers Registered are{" "}
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      {data?.length}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
      {showSidebar === "register" && (
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
              {/* <div class="row g-6 mb-6">
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Maid
                          </span>
                          <span class="h3 font-bold mb-0">
                            {count?.Maid ? count?.Maid : "0"}
                          </span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                            <i class="bi bi-credit-card"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Electrician
                          </span>
                          <span class="h3 font-bold mb-0">
                            {count?.Electrician ? count?.Electrician : "0"}
                          </span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                            <i class="bi bi-people"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Home Tutor
                          </span>
                          <span class="h3 font-bold mb-0">
                            {count?.HomeTutor ? count?.HomeTutor : "0"}
                          </span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                            <i class="bi bi-clock-history"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Security Guard
                          </span>
                          <span class="h3 font-bold mb-0">
                            {count?.SecruityGuard ? count?.SecruityGuard : "0"}
                          </span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                            <i class="bi bi-minecart-loaded"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="d-flex justify-content-between">
                <h1>Total Register User</h1>
              </div>
              <div class="card shadow border-0 mb-7">
                <div class="card-header">
                  <h5 class="mb-0">Detail Posts</h5>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover table-nowrap">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Cnic</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData?.map((item, index) => {
                        if (item.isAdmin === false)
                          return (
                            <tr>
                              <td>
                                <img
                                  alt="..."
                                  src={item?.image ? item.image : "notgiven"}
                                  class="avatar avatar-sm rounded-circle me-2"
                                />
                                <a class="text-heading font-semibold" href="#">
                                  {item?.Name ? item.Name : "not given"}
                                </a>
                              </td>
                              <td>{item?.cnic ? item.cnic : "not given"}</td>
                              <td>
                                <a class="text-heading font-semibold" href="#">
                                  {item?.Email}
                                </a>
                              </td>

                              <td>{item?.PhoneNo}</td>
                              <td
                                class=""
                                style={{
                                  fontWeight: "bold",
                                  color: "blue",
                                  justifyContent: "center",
                                }}
                              >
                                {item?.isWorker ? "Worker" : "User"}
                              </td>
                            </tr>
                          );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
      {showSidebar === "req" && (
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
              <div className="d-flex justify-content-between">
                <h1>Total Approved Request</h1>
              </div>
              <div class="card shadow border-0 mb-7">
                <div class="card-header">
                  <h5 class="mb-0"> DETAILS </h5>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover table-nowrap">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        {/* <th scope="col">Cnic</th> */}
                        <th scope="col">Mail</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state?.map((item, index) => {
                        if (item.isApproved)
                          return (
                            <tr>
                              <td>
                                <img
                                  alt="..."
                                  src={
                                    item?.userImage
                                      ? item.userImage
                                      : "notgiven"
                                  }
                                  class="avatar avatar-sm rounded-circle me-2"
                                />
                                <a class="text-heading font-semibold" href="#">
                                  {item?.userName ? item.userName : "not given"}
                                </a>
                              </td>
                              {/* <td>{item?.cnic ? item.cnic : "not given"}</td> */}
                              <td>
                                <a class="text-heading font-semibold" href="#">
                                  {item?.userEmail}
                                </a>
                              </td>

                              <td>{item?.userPhone}</td>
                              <td
                                class=""
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                {item?.isApproved ? "Approved" : "Not Approved"}
                              </td>
                            </tr>
                          );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
      {showSidebar === "Pending" && (
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
              <div className="d-flex justify-content-between">
                <h1>Total Pending Request</h1>
              </div>
              <div class="card shadow border-0 mb-7">
                <div class="card-header">
                  <h5 class="mb-0">DETAILS</h5>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover table-nowrap">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        {/* <th scope="col">Gender</th> */}
                        <th scope="col">Mail</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state?.map((item, index) => {
                        if (!item.isApproved)
                          return (
                            <tr>
                              <td>
                                <img
                                  alt="..."
                                  src={
                                    item?.userImage
                                      ? item.userImage
                                      : "notgiven"
                                  }
                                  class="avatar avatar-sm rounded-circle me-2"
                                />
                                <a class="text-heading font-semibold" href="#">
                                  {item?.userName ? item.userName : "not given"}
                                </a>
                              </td>
                              {/* <td>
                              <img
                                alt="..."
                                src="https://cdn-icons-png.flaticon.com/512/172/172163.png?w=740&t=st=1684671880~exp=1684672480~hmac=bba16cd745777bba2f3d7ba6367b9f09db4256b8603541cf0526304774b1ebf9"
                                class="avatar avatar-xs rounded-circle me-2"
                              />
                              <a class="text-heading font-semibold" href="#">
                                {item?.gender}
                              </a>
                            </td> */}
                              {/* <td>{item?.cnic ? item.cnic : "not given"}</td> */}
                              <td>
                                <a class="text-heading font-semibold" href="#">
                                  {item?.userEmail}
                                </a>
                              </td>

                              <td>{item?.userPhone}</td>
                              <td
                                class=""
                                style={{ color: "blue", fontWeight: "bold" }}
                              >
                                {item?.isApproved ? "Approved" : "Not Approved"}
                              </td>
                            </tr>
                          );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
