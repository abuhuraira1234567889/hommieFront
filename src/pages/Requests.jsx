import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar/Navbar";
import React, { useState, useEffect, useRef } from "react";
import Spacer from "../component/Spacer";
import { H2, P } from "../component/Typography";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../component/Footer";
import Button from "../component/Button";
import { Card } from "../component/Card";
import styled from "styled-components";
import axios from "axios";
import about from "../images/aboutUs.png";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../services/redux/middleWare/getRequest";
import art from "../images/art.jpg";
import adress from "../images/adress.svg";
import mail from "../images/mail.svg";
import Report from "../images/report (2).png";
import { client } from "../services/client";
import { BounceLoader } from "react-spinners";


const CardImages = styled.div`
  position: relative;
`;
const ProfileImage = styled.div`
  position: absolute;
  bottom: -25%;
  left: 36%;
`;

export default function Requests() {
  const [mount, setMount] = useState(false);
  const [approved, setApproved] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.getRequest.getRequestData);
  console.log("i am the state", state);
  const [id, setId] = useState("");
  const [loader, setLoader] = useState(false);


  const [data, setData] = useState([]);
  useEffect(() => {
    const localid = localStorage.getItem("id");

    if (localid) {
      setId(localid);
    }
  }, []);
  async function approve(itemId) {
    setLoader(true);  
    try {
      const res = await client.put(`updateRequest/${itemId}`);
      console.log(res)
      setApproved(true);
      alert("Request Approved");
      window.location.reload();
      setLoader(false);

      console.log(res.data);
    } catch (err) {
      console.log(err);
      setLoader(false);
      alert("Already Approved");
    }
  }
  async function reject(itemId) {
    setLoader(true);
    try {
      const res = await client.delete(`deleteRequest/${itemId}`);
      console.log(res);
      alert("Request Rejected");
      window.location.reload();
      setLoader(false);

      console.log(res.data);
    } catch (err) {
      console.log(err);
      setLoader(false);
      alert("Already Rejected");
    }
  }

  useEffect(() => {
    dispatch(getRequest());
  }, []);

  return (
    <>
      <Navbar />
      <div data-aos="fade-right">
        <HeroSection
          padding={"50px 0px 50px 0px"}
          image={about}
          page={"Requests"}
        />
      </div>

      <Spacer height="40" />
      <div>
      
        <Container style={{position:"relative"}}>
        {loader && (
          <div style={{ position: "absolute", top: "50%", left: "50%" }}>
            <BounceLoader size={100} color="#36d7b7" />
          </div>
        )}
          <H2 className="text-center" fontWeight="800" color="#09150f" fontSize="50px">
            Total Requests For approval
          </H2>
          <Row>
            {!state.length > 0 ? (
              <>
                <Spacer height="100" />

                <P className="text-center" color="red" fontSize="30px">
                  There is No Request to approve
                </P>
                <Spacer height="100" />
              </>
            ) : (
              state.map((item, index) => {
                if (id === item.clientId && item.isApproved===false) {
                  return (
                    <Col style={{marginBottom:"30px"}} data-aos="fade-up" key={index} md={4}>
                      <Card style={{ padding: "0px", marginTop: "20px" }}>
                        <CardImages>
                          <img
                            alt="background"
                            style={{
                              borderRadius: "20px",
                              width: "100%",
                            }}
                            // width='100%'
                            width={2000}
                            height={200}
                            src={art}
                          />

                          <ProfileImage>
                            <img
                              alt="profile"
                              style={{ borderRadius: "50px" }}
                              width={100}
                              height={100}
                              src={item.userImage ? item.userImage : ""}
                            />
                          </ProfileImage>
                        </CardImages>
                        <br />
                        <br />

                        <H2
                          lineHeight="50px"
                          fontWeight="600"
                          fontSize="30px"
                          color="#0e1b4d"
                        >
                          {item.userName}
                        </H2>
                       
                        <br />
                        <Row >
                         
                          <Col style={{ textAlign: "center" }} md={12}>
                            <span>
                              <img
                                alt="Location"
                                style={{ marginRight: "10px" }}
                                width={20}
                                height={20}
                                src={mail}
                              />
                             {item.userEmail}
                              {/* {item.status==="none"?"03*********":item.status==="pending"?"03******":item.contact} */}
                            </span>
                          </Col>
                          <Col style={{ textAlign: "center",marginTop:"20px" }} md={12}>
                            <span>
                              <img
                                alt="Location"
                                style={{ marginRight: "10px" }}
                                width={20}
                                height={20}
                                src={mail}
                              />
                             {item.userPhone}
                              {/* {item.status==="none"?"03*********":item.status==="pending"?"03******":item.contact} */}
                            </span>
                          </Col>
                          <Col style={{ textAlign: "center",marginTop:"20px" }} md={12}>
                            <span>
                             
                            He Wants to work with you. Please Approve the Request for work. You Can also Delete the Request
                              {/* {item.status==="none"?"03*********":item.status==="pending"?"03******":item.contact} */}
                            </span>
                          </Col>
                        </Row>

                        <hr />
                        <Spacer height="6" />

                        <Spacer height="10" />
                        <div className="d-flex">
                          <Button
                            onClick={() => {
                              // setItems(item);
                              // setopen(true);
                              reject(item._id);
                            }}s
                            style={{
                              width: "100%",
                              borderRadius: "0 0px 10px 10px",
                              background:"red"
                            }}
                          >
                            Delete
                          </Button>
                          <Spacer height="10" />

                          <Button
                            onClick={() => {
                              approve(item._id)
                            }}
                            style={{
                              width: "100%",
                              borderRadius: "0 0px 10px 10px",
                            }}
                          >
                           Approve
                          </Button>
                        </div>
                      </Card>
                    </Col>
                  );
                } else {
                  return (
                    <>
                      <Spacer height="100" />

                      <P className="text-center" color="red" fontSize="30px">
                        There is No Request to approve
                      </P>
                      <Spacer height="100" />
                    </>
                  );
                }
              })
            )}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
