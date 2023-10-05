import { Container } from "react-bootstrap";
import Navbar from "../component/Navbar/Navbar";
import Spacer from "../component/Spacer";
import { H2 } from "../component/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRequest } from "../services/redux/middleWare/getRequest";
import "./table.css";

import CloseIcon from "@mui/icons-material/Close";

export default function DetailReq() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [id, setId] = useState("");
  const state = useSelector((state) => state.getRequest.getRequestData);
  //   console.log("i am the state", state);
  useEffect(() => {
    const localid = localStorage.getItem("id");

    if (localid) {
      setId(localid);
    }
  }, []);
  useEffect(() => {
    dispatch(getRequest());
  }, []);
  return (
    <div>
      <Navbar />
      <div >
        <main class="py-6 bg-surface-secondary">
          <div style={{height:"79vh"}}>

            <Container>
              <Spacer height="20" />
              <div class="card shadow border-0 mb-7">

                <div class="card-header">
                  <H2 className="text-center" color="rgb(14, 27, 77)">
                    Detail Request
                  </H2>
                </div>


                <div class="table-responsive">
                  <table class="table table-hover table-nowrap">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col" color="green">
                          #
                        </th>

                        <th scope="col" style={{fontSize:"17px"}}>Name</th>
                        <th scope="col" style={{fontSize:"17px"}}>Email</th>
                        <th scope="col" style={{fontSize:"17px"}}>Phone No</th>
                        <th scope="col" style={{fontSize:"17px"}}>Status</th>
                        <th scope="col" style={{fontSize:"17px"}}>Image</th>
                        {/* <th scope="col">Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {state?.map((item, index) => {
                        if (item.clientId === id) {
                          return (
                            // <tr key={index}>
                            <tr key={index}>
                              <td style={{ color: "green", fontWeight: "bolder" }}>
                                {index}
                              </td>
                              <td>{item.userName ? item.userName : "not given"}</td>
                              <td style={{ color: "blue" }}>{item.userEmail}</td>
                              <td>{item.userPhone ? item.userPhone : "not given"}</td>
                              <td style={{ color: "red" }}>
                                {item.isApproved ? "Approved" : "Not Approved"}
                              </td>
                              <td>
                                <img
                                  src={item.userImage}
                                  alt="profile"
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                  }}
                                />
                              </td>
                            </tr>
                          );
                        } else {
                          return (
                            // <tr key={index}>
                            <tr key={index}>
                              <td style={{ color: "green", fontWeight: "bold" }}>
                                {index}
                              </td>
                              <td>{item.userName ? item.userName : "not given"}</td>
                              <td style={{ color: "blue" }}>{item.userEmail}</td>
                              <td>{item.userPhone ? item.userPhone : "not given"}</td>
                              <td style={{ color: "red" }}>
                                {item.isApproved ? "Approved" : "Not Approved"}
                              </td>
                              <td>
                                <img
                                  src={item.userImage}
                                  alt="profile"
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                  }}
                                />
                              </td>
                            </tr>
                          );
                        }
                      })}

                    </tbody>
                  </table>
                </div>
              </div>
            </Container>
          </div>
        </main>
      </div>
    </div>
  );
}
