import { Container } from "react-bootstrap";
import Navbar from "../component/Navbar/Navbar";
import Spacer from "../component/Spacer";
import { H2 } from "../component/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getNotification } from "../services/redux/middleWare/getNotification";
import './table.css';

export default function DetailRequestSent() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [id, setId] = useState("");
  const state = useSelector(
    (state) => state.getNotification.getNotificationData
  );
  console.log("i am the state", state);
  useEffect(() => {
    const localid = localStorage.getItem("id");

    if (localid) {
      setId(localid);
      dispatch(getNotification(localid));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bgmain">
        <Spacer height="50" />
        <H2 className="text-center" color="rgb(14, 27, 77)">Request Sent</H2>
        <Spacer height="30" />

        <Container style={{ background: "#e2e9e9" }}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" className="serial">#</th>

                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Status</th>
                <th scope="col">Image</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {state?.length > 0
                ? state?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td style={{color:"green" , fontWeight:"bold"}}>{index + 1}</td>

                        <td>{item.name ? item.name : "not given"}</td>
                        <td >{item.cnic}</td>
                        <td style={{color:"blue"}}>{item.gender ? item.gender : "not given"}</td>
                        <td style={{color:"red"}}>
                          {item.postApproved ? "Approved" : "Not Approved"}
                        </td>
                        <td>
                          <img
                            src={item.image}
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
                  })
                : "No Data Found"}
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
