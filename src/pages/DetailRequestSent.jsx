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
      <main class="py-6 bg-surface-secondary">
      <div style={{height:"79vh"}}>
       

        <Container>
        <Spacer height="20" />
          <div class="card shadow border-0 mb-7">
          <div class="card-header">
                  <H2 className="text-center" color="rgb(14, 27, 77)">
                    Request Sent
                  </H2>
                </div>
          
          <table class="table table table-hover table-nowrap">
            <thead class="thead-light">
              <tr>
                <th scope="col" className="serial">#</th>

                <th scope="col" style={{fontSize:"17px"}}>Name</th>
                <th scope="col"style={{fontSize:"17px"}}>Gender</th>
                <th scope="col" style={{fontSize:"17px"}}>Category</th>
                <th scope="col"style={{fontSize:"17px"}}>Service</th>
                <th scope="col"style={{fontSize:"17px"}}>Status</th>
                <th scope="col"style={{fontSize:"17px"}}>Image</th>
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
                        <td>{item.gender ? item.gender : "not given"}</td>
                        <td class="" style={{color:"blue"}}>{item?.heading}</td>
                        <td class="" style={{color:"green"}}>{item?.service}</td>
                        <td style={{color:"red"}}>
                          {item.postApproved ? "Approved" : "Not Approved"}
                        </td>
                        <td>
                          <img
                            src={item.image}
                            alt="profile"
                            style={{
                              width: "35px",
                              height: "35px",
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
          </div>
        </Container>

      </div>
      </main>
    </div>
   

  );
}
