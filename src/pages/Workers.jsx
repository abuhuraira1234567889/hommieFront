import Navbar from "../component/Navbar/Navbar";
import React, { useState, useEffect, useRef, use } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { Card } from "../component/Card";

import { H2, P } from "../component/Typography";
import Button from "../component/Button";
import Spacer from "../component/Spacer";
// import HeroSection from "@/components/HeroSection";
import Footer from "../component/Footer";

import ModalView from "../component/ModalView";
import ReactStars from "react-rating-stars-component";
import Input from "../component/Input";
import Download from "../images/download.png";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../services/redux/middleWare/getClient";
import art from "../images/art.jpg";
import adress from "../images/adress.svg";
import mail from "../images/mail.svg";
import Report from "../images/report (2).png";
import { client } from "../services/client";
// import { getClient } from "@/services/middleWare/getClient";

const Wrapper = styled.div`
  background-color: #f7f7f7;

  padding-bottom: 100px;
`;
const CardImages = styled.div`
  position: relative;
`;
const ProfileImage = styled.div`
  position: absolute;
  bottom: -25%;
  left: 36%;
`;
const BottomCard = styled.div`
  // background-color: #f7f7f7;
  // padding-top: 20px;
  // padding-bottom: 20px;
  // border-top: 1px solid black;
`;
// const data = [
//   {
//     bg: "/assets/art.jpg",
//     profilepic: "/assets/service-9.jpg",
//     name: "Aliza ",
//     des: "I am from Islamabad. I am Muslim. I can do Full time job as a house Cleaner. I have worked as a maid for about 3 years ",
//     loc: "Islamabad",
//     mail: "abc@gmail.com",
//     foll: "3400",
//     foll2: "5400",
//   },
//   {
//     bg: "/assets/art.jpg",
//     profilepic: "/assets/service-9.jpg",
//     name: "Muhammad Ali",
//     des: "I am from Islamabad. I am Muslim. I can do Part time job as a Chef. I have worked as a chef for about 5 years",
//     loc: "Islamabad",
//     mail: "abc@gmail.com",
//     foll: "3400",
//     foll2: "5400",
//   },
//   {
//     bg: "/assets/art.jpg",
//     profilepic: "/assets/service-9.jpg",
//     name: "Ahmed",
//     des: "I am from Lahore.I am Muslim. I can do job for 2 hours only as a laundary maid. And I have worked as a maid for about 3 years",
//     loc: "Lahore",
//     mail: "abc@gmail.com",
//     foll: "3400",
//     foll2: "5400",
//   },
//   {
//     bg: "/assets/art.jpg",
//     profilepic: "/assets/service-9.jpg",
//     name: "Maheen Tariq",
//     des: "I am from Wah Cantt.I am Muslim. I can do Part time job as a baby-sitter.And I have worked as a baby-sitter for  about 2 years",
//     loc: "Wah Cantt",
//     mail: "xyz@gmail.com",
//     foll: "3400",
//     foll2: "5400",
//   },
//   {
//     bg: "/assets/art.jpg",
//     profilepic: "/assets/service-9.jpg",
//     name: "Abdullah Ali",
//     des: "I am from Rawalpindi. I am Christian. I can do Full time job for house chores. I have worked as a maid for about 6 years",
//     loc: "Rawalpindi",
//     mail: "xyz@gmail.com",
//     foll: "3400",
//     foll2: "5400",
//   },
// ];

export default function Workers() {
  const dispatch = useDispatch();
  const [mount, setMount] = useState(false);
  const [open, setopen] = useState(false);
  const [report, setReport] = useState(false);
  const [reportArr, setReportArr] = useState(0);
  const [data, setData] = useState();
  const [idlog, setId] = useState();
  const [loding, setLoding] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [items, setItems] = useState();
  const [loader, setLoader] = useState(false);
  const state = useSelector((state) => state.getClient.getClientData);
  console.log(state, "this is state");

  const reportdata = [
    [
      "Disappointed with his/her work ",
      "Distrustful",
      "Dishonest",
      "Always late",
      "Other",
    ],
    ["Behavior with family is not good", "Always Distracted", "Unreliable"],
  ];
  console.log(reportdata.length, "i am array data");
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  async function Search() {
    const filteredData = data.filter((item) =>
      item.city.toLowerCase().includes(filterValue.toLowerCase())
    );
    setData(filteredData);
  }

  useEffect(() => {
    const id = localStorage.getItem("id");
    setId(id);
  }, []);

  useEffect(() => {
    dispatch(getClient());
  }, []);

  return (
    <>
      <ModalView show={open} setshow={setopen} title="Profile Detail ">
        <Row>
          <Col md={4}>
            <Card
              style={{
                padding: "10px 10px 10px 10px",
                borderRadius: "5px",
                background: "transparent",
              }}
            >
              <img
                alt="profile pic"
                style={{ borderRadius: "100px" }}
                width={200}
                height={200}
                src={items?.image}
              />
              <Spacer height="20" />
              <h5 style={{ color: "black" }}>{items?.name} </h5>
              <p style={{ color: "black" }} class="text-muted mb-1">
                {items?.experince}
              </p>
              <p style={{ color: "black" }} class="text-muted mb-4">
                {items?.city}
              </p>
              <div
                style={{ alignItems: "center" }}
                className="d-flex justify-content-center mb-2"
              >
                <img
                  width="20px"
                  height="20px"
                  style={{ marginRight: "10px" }}
                  src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png"
                />
                <p style={{ marginBottom: "0px", color: "black" }}>3*******</p>
              </div>
            </Card>
          </Col>
          <Col md={8}>
            <Card
              style={{
                padding: "20px",
                borderRadius: "5px",
                background: "transparent",
              }}
            >
              <Row>
                <Col md={3}>
                  <p style={{ color: "black" }} class="mb-0">
                    Full Name
                  </p>
                </Col>
                <Col md={9}>
                  <p style={{ color: "black" }} class="text-muted mb-0">
                    {items?.name}
                  </p>
                </Col>
              </Row>

              <hr style={{ color: "black" }} />
              <Row>
                <Col md={3}>
                  <p style={{ color: "black" }} class="mb-0">
                    Phone
                  </p>
                </Col>
                <Col md={9}>
                  <p style={{ color: "black" }} class="text-muted mb-0">
                    {items?.contact}
                  </p>
                </Col>
              </Row>
              <hr style={{ color: "black" }} />
              <Row>
                <Col md={3}>
                  <p style={{ color: "black" }} class="mb-0">
                    Mobile
                  </p>
                </Col>
                <Col md={9}>
                  <p style={{ color: "black" }} class="text-muted mb-0">
                    {items?.contact}
                  </p>
                </Col>
              </Row>
              <hr style={{ color: "black" }} />
              <Row>
                <Col md={3}>
                  <p style={{ color: "black" }} class="mb-0">
                    Qualification
                  </p>
                </Col>
                <Col md={9}>
                  <p style={{ color: "black" }} class="text-muted mb-0">
                    {items?.qualification}
                  </p>
                </Col>
              </Row>
              <hr style={{ color: "black" }} />
              <Row>
                <Col md={3}>
                  <p style={{ color: "black" }} class="mb-0">
                    Age
                  </p>
                </Col>
                <Col md={9}>
                  <p style={{ color: "black" }} class="text-muted mb-0">
                    {items?.age}
                  </p>
                </Col>
              </Row>
              <hr style={{ color: "black" }} />
              <Row>
                <Col md={3}>
                  <p style={{ color: "black" }} class="mb-0">
                    CNIC
                  </p>
                </Col>
                <Col md={9}>
                  <p style={{ color: "black" }} class="text-muted mb-0">
                    {items?.cnic}
                  </p>
                </Col>
              </Row>
              <hr style={{ color: "black" }} />
              <Row>
                <Col md={3}>
                  <p style={{ color: "black" }} class="mb-0">
                    Gender
                  </p>
                </Col>
                <Col md={9}>
                  <p style={{ color: "black" }} class="text-muted mb-0">
                    {items?.gender}
                  </p>
                </Col>
              </Row>
              <hr style={{ color: "black" }} />
              <Row>
                <Col md={3}>
                  <p style={{ color: "black" }} class="mb-0">
                    Maritial Status
                  </p>
                </Col>
                <Col md={9}>
                  <p style={{ color: "black" }} class="text-muted mb-0">
                    {items?.maritialStatus}
                  </p>
                </Col>
              </Row>
              <hr style={{ color: "black" }} />
              <Row>
                <Col md={3}>
                  <p style={{ color: "black" }} class="mb-0">
                    Service
                  </p>
                </Col>
                <Col md={9}>
                  <p style={{ color: "black" }} class="text-muted mb-0">
                    {items?.service}
                  </p>
                </Col>
              </Row>
              <hr style={{ color: "black" }} />
              <Row>
                <Col md={3}>
                  <p style={{ color: "black" }} class="mb-0">
                    Experience
                  </p>
                </Col>
                <Col md={9}>
                  <p style={{ color: "black" }} class="text-muted mb-0">
                    {items?.experince}
                  </p>
                </Col>
              </Row>
              <hr style={{ color: "black" }} />
              <Row>
                <Col md={3}>
                  <p style={{ color: "black" }} class="mb-0">
                    Job Timming
                  </p>
                </Col>
                <Col md={9}>
                  <p style={{ color: "black" }} class="text-muted mb-0">
                    {items?.timing}
                  </p>
                </Col>
              </Row>
              <hr style={{ color: "black" }} />
              <Row>
                <Col md={3}>
                  <p style={{ color: "black" }} class="mb-0">
                    Language
                  </p>
                </Col>
                <Col md={9}>
                  <p style={{ color: "black" }} class="text-muted mb-0">
                    {items?.language}
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </ModalView>
      <ModalView
        width={"500px"}
        height={"auto"}
        show={report}
        setshow={setReport}
        title="Report Account"
      >
        <div>
          <P style={{ marginLeft: "3px", color: "darkblue", fontSize: "16px" }}>
            Why are you reporting this account ?
          </P>
        </div>
        {reportdata.length > reportArr
          ? reportdata[reportArr].map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ fontSize: "18px", marginBottom: "10px" }}
                  className="d-flex"
                >
                  <input
                    style={{
                      marginRight: "20px",
                      padding: "10px",
                      width: "19px",
                    }}
                    name="A"
                    type="radio"
                  />
                  {item}
                </div>
              );
            })
          : setReportArr(0)}
        <Button
          // onClick={() => {
          //   setReportArr(reportArr + 1),
          //     reportdata.length - 1 === reportArr ? setReport(false) : "",
          //     reportdata.length - 1 === reportArr ? setReport(0) : "";
          // }}
          style={{ float: "right" }}
        >
          {reportdata.length - 1 === reportArr ? "Submit" : "Next"}
        </Button>
      </ModalView>
      <div>
        <Navbar />

        <Wrapper>
          {/* <input placeholder='enter search' /> */}
          {loader && (
            <div style={{ position: "absolute", top: "50%", left: "50%" }}>
              <BounceLoader size={100} color="#36d7b7" />
            </div>
          )}
          <Container>
            <div className="d-flex justify-content-end align-items-center">
              <div>
                {/* <input style={{ marginRight: '10px' }} type={'checkbox'} /> */}
              </div>
            </div>
          </Container>
          <Spacer height="30" />
          <H2 fontWeight="600" fontSize="40px" className="text-center">
            {/* {router.query.name} */}
          </H2>
          <Spacer height="50" />
          <Container>
            <br />
            <Row>
              {state ? (
                state?.map((item, index) => {
                  return (
                    <Col data-aos="fade-up" key={index} md={4}>
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
                              src={item.image}
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
                          {item.name}
                        </H2>
                        <P
                          style={{ paddingLeft: "25px", paddingRight: "25px" }}
                        >
                          {item.experince}
                        </P>
                        <br />
                        <Row>
                          <Col style={{ textAlign: "right" }} md={6}>
                            <span style={{ marginRight: "20px" }}>
                              <img
                                alt="Location"
                                style={{ marginRight: "10px" }}
                                width={25}
                                height={25}
                                src={adress}
                              />
                              {item.city}
                            </span>
                          </Col>
                          <Col style={{ textAlign: "left" }} md={6}>
                            <span>
                              <img
                                alt="Location"
                                style={{ marginRight: "10px" }}
                                width={20}
                                height={20}
                                src={mail}
                              />
                              {item.contact}
                            </span>
                          </Col>
                        </Row>

                        <hr />

                        <div className="d-flex">
                          <Button
                            onClick={() => {
                              setItems(item);
                              setopen(true);
                            }}
                            style={{
                              width: "100%",
                              borderRadius: "0 0px 10px 10px",
                            }}
                          >
                            View Profile
                          </Button>

                          {/* <Button
                            onClick={() => {
                              requestHandler(item._id, item.userId);
                            }}
                            style={{
                              width: "100%",
                              borderRadius: "0 0px 10px 10px",
                            }}
                          >
                            Request
                          </Button> */}
                        </div>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <div
                  style={{
                    height: "30vh",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  <BounceLoader size={100} color="#36d7b7" />
                </div>
              )}
            </Row>
          </Container>
        </Wrapper>
        <Footer />
      </div>
    </>
  );
}
