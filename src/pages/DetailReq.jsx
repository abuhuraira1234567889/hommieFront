import { Container } from "react-bootstrap";
import Navbar from "../component/Navbar/Navbar";
import Spacer from "../component/Spacer";
import { H2 } from "../component/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRequest } from "../services/redux/middleWare/getRequest";

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
      <div style={{ background: "#e2e9e9" }}>
        <Spacer height="50" />
        <H2 className="text-center">Detail Request</H2>
        <Spacer height="30" />

        <Container>
          <table class="table">
            <thead>
              <tr>
                
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone No</th>
                <th scope="col">Status</th>
                <th scope="col">Image</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {state?.map((item, index) => {
                if (item.clientId === id)
                  return (
                    <tr key={index}>
                     
                      <td>{item.userName ? item.userName : "not given"}</td>
                      <td>{item.userEmail}</td>
                      <td>{item.userPhone ? item.userPhone : "not given"}</td>
                      <td>{item.isApproved ? "Approved" : "Not Approved"}</td>
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
              })}
              {/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr> */}
            </tbody>
          </table>
        </Container>
      </div>
    </div>
  );
}