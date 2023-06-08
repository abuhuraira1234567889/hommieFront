import Navbar from "../component/Navbar/Navbar";
import HeroSection from "../component/HeroSection";
import React, { useState, useEffect, useRef } from "react";
import { H2, P } from "../component/Typography";
import Spacer from "../component/Spacer";
import { Container, Row, Col, Modal } from "react-bootstrap";
import styled from "styled-components";
import { Card } from "../component/Card";
import Chief from "../images/chief.png";
import Sitter from "../images/sitter.png";

import Footer from "../component/Footer";

import ModalView from "../component/ModalView";
import Button from "../component/Button";
import Input from "../component/Input";
import axios from "axios";
import slider2 from "../images/slider2.png";
import right from "../images/right.png";
import teaching from "../images/teaching.png";
import { useNavigate } from "react-router-dom";
import { client } from "../services/client";
import { BounceLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { setCatagory } from "../services/redux/reducer/stateReducer";

const Wrapper = styled.div`
  //background: #f6f8ff;
  background: #f7f7f7;
  padding-bottom: 80px;
  padding-bottom: 80px;
`;
const BottomButton = styled.div`
  background: #19c133;

  border-radius: 50px;
  width: 44px;
  padding: 10px 10px 10px 10px;
  position: absolute;
  bottom: -5%;
  left: 45%;
`;
export default function Services() {
  const [id, setId] = useState("");
  const [isWorker, setisWorker] = useState();
  const [open, setOpen] = useState(false);
  const [formHead, setFormHead] = useState("");
  const [existance, setExistance] = useState(false);
  const [existanceModal, setExistanceModal] = useState(false);
  const [error, setError] = useState("");
  const [blank, setBlank] = useState(false);
  const [errorPopUp, setErrorPopUp] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loader, setLoader] = useState(false);
  const [servicesTab, setServicesTab] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setImageUrl(reader.result);
      setSelectedFile(file);
    };
  };

  const initialvalues = {
    fname: "",
    age: "",
    gender: "",
    no: "",
    cnic: "",
    religion: "",
    city: "",
    Address: "",
    maritialStatus: "",
    timing: "",
    service: "",
    qualification: "",
    skills: "",
    language: "",
    experience: "",
    photo: "",
  };
  const [fullName, setFullName] = useState(initialvalues);
  console.log(fullName);
  useEffect(() => {
    const localid = localStorage.getItem("id");
    const loaclclient = localStorage.getItem("isWorker");
    console.log(localid, loaclclient);
    if (localid && loaclclient) {
      setId(localid);
      setisWorker(loaclclient);
    }
  }, []);

  async function NextSection(name) {
    if (isWorker === "true") {
      setOpen(true);
      setFormHead(name);
    } else {
      console.log(name);
      dispatch(setCatagory(name));
      navigate("/profiles");
    }
  }

  async function onSubmit() {
    if (
      fullName.fname === "" &&
      fullName.age === "" &&
      fullName.gender === "" &&
      fullName.no === "" &&
      fullName.cnic === "" &&
      fullName.religion === "" &&
      fullName.city === "" &&
      fullName.Address === "" &&
      fullName.maritialStatus === "" &&
      fullName.timing === "" &&
      fullName.service === "" &&
      fullName.qualification === "" &&
      fullName.skills === "" &&
      fullName.language === ""
    ) {
      setBlank(true);
    } else {
      setErrorPopUp(true);
      setError("Plese Wait We Are Adding Your Request");
      try {
        const res = await client.post("addClient", {
          userId: id,
          name: fullName.fname,
          age: fullName.age,
          gender: fullName.gender,
          contact: parseInt(fullName.no),
          cnic: parseInt(fullName.cnic),
          religion: fullName.religion,
          city: fullName.city,
          adress: fullName.Address,
          maritialStatus: fullName.maritialStatus,
          timing: fullName.timing,
          service: fullName.service,
          qualification: fullName.qualification,
          skills: fullName.skills,
          language: fullName.language,
          experince: fullName.experience,
          image: imageUrl,
          heading: formHead,
        });
        console.log(res.data.response);
        if (res.status === 200) {
          setError(
            "Congratulation On board ... You are successfully registered"
          );

          setOpen(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <>
      <ModalView
        height={"300px"}
        width={"600px"}
        show={errorPopUp}
        setshow={setErrorPopUp}
      >
        <H2 style={{ fontSize: "40px" }} className="text-center">
          {" "}
          Successful
        </H2>
        <P className="text-center">{error}</P>
        <Button
          style={{ width: "100%", fontSize: "20px" }}
          onClick={() => {
            navigate("/Services");
          }}
        >
          OK
        </Button>
      </ModalView>
      {!existance && (
        <ModalView show={open} setshow={setOpen}>
          <H2
            className="text-center"
            fontWeight="600"
            color="#0e1b4d"
            style={{ paddingTop: "0px", fontSize: "42px" }}
            data-aos="fade-right"
          >
            Register as a {formHead}
          </H2>
          {/* <Container
          style={{
            background: '#c5d4d7',
            padding: '60px',
            marginTop: '20px',
            borderRadius: '12px',
          }}
          data-aos='fade-up'
        > */}
          <P className="text-center">
            Please enter your {servicesTab?"Personal details":"Experience Detail"} carefully as this information
            will be used to hire you as a worker.
          </P>
          {servicesTab && (
            <>
              <Row>
                <Col md={12}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Full Name
                  </P>
                  <Input
                    name="fname"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    placeholder="Full name"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {blank
                      ? fullName.fname === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
                <Col md={6}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>Age</P>
                  <Input
                    name="age"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    min={0}
                    type={"number"}
                    placeholder="E.g 23"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {blank
                      ? fullName.age === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
                <Col md={6}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Gender
                  </P>
                  {/* <Input placeholder='Full name' borderRadius='5px' height='40px' /> */}
                  <select
                    name="gender"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "1px solid grey",
                      marginTop: "9px",
                      borderRadius: "5px",
                      paddingLeft: "8px",
                    }}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <P color="red">
                    {" "}
                    {blank
                      ? fullName.gender === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={4}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Contact Number
                  </P>
                  <Input
                    name="no"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    type={"number"}
                    placeholder="E.g. 03313487297"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {blank
                      ? fullName.no === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
                <Col md={4}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    CNIC
                  </P>
                  <Input
                    name="cnic"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    type={"number"}
                    placeholder="E.g. XXXXXXXXXXXXX"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {blank
                      ? fullName.cnic === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
                <Col md={4}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Religion
                  </P>
                  <Input
                    name="religion"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    placeholder="E.g. Muslim"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {blank
                      ? fullName.religion === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
              </Row>
              <br />

              <Row>
                <Col style={{ marginBottom: "30px" }} md={5}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    City
                  </P>
                  <select
                    name="city"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "1px solid grey",
                      marginTop: "9px",
                      borderRadius: "5px",
                      paddingLeft: "8px",
                    }}
                  >
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Taxila">Taxila</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Faislabad">Faislabad</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Sargodha">Sargodha</option>
                    <option value="Bahawalpur">Bahawalpur</option>
                    <option value="Abottabad">Abbotabad</option>
                  </select>
                  <P color="red">
                    {blank
                      ? fullName.city === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>

                <Col style={{ marginBottom: "30px" }} md={7}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Address
                  </P>
                  <Input
                    name="Address"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    placeholder="E.g Officer Colony, Wah Cantt"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {blank
                      ? fullName.Address === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
              </Row>
              <Row style={{ marginBottom: "15px" }}>
                <Col md={5} style={{ marginBottom: "30px" }}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Marital Status
                  </P>
                  <select
                    name="maritialStatus"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "1px solid grey",
                      marginTop: "9px",
                      borderRadius: "5px",
                      paddingLeft: "8px",
                    }}
                  >
                    <option value="Married">Married</option>
                    <option value="UnMarried">UnMarried</option>
                    <option value="Divorced">Divorced</option>
                  </select>
                  <P color="red">
                    {blank
                      ? fullName.maritialStatus === "" &&
                        "***Its should not empty"
                      : ""}
                  </P>
                </Col>

                <Col md={7} style={{ marginBottom: "10px" }}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Timing
                  </P>
                  <select
                    name="timing"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "1px solid grey",
                      marginTop: "9px",
                      borderRadius: "5px",
                      paddingLeft: "8px",
                    }}
                  >
                    <option value="FullTime">Full Time Job (24 hrs)</option>
                    <option value="PartTime">Part Time Job ( 2-3 hrs)</option>
                    <option value="DayTime">Day Time Job</option>
                  </select>
                  <P color="red">
                    {blank
                      ? fullName.timing === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
              </Row>
            </>
          )}
          {!servicesTab && (
            <>
              <Row style={{ marginBottom: "10px" }}>
                <Col style={{ marginBottom: "30px" }} md={5}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    {formHead === "Home Tutor"
                      ? "Subject"
                      : "Select Your Service"}
                  </P>
                  {formHead === "Security Guard" ? (
                    <select
                    multiple
                      name="service"
                      onChange={(e) => {
                        setFullName({
                          ...fullName,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      style={{
                        width: "100%",
                        height: "100px",
                        border: "1px solid grey",
                        marginTop: "9px",
                        borderRadius: "5px",
                        paddingLeft: "8px",
                      }}
                    >
                      <option value="" disabled="" selected="">
                        Service Type
                      </option>
                      <option value="Office">For Office </option>
                      <option value="School">For School</option>
                      <option value="Home">For Home</option>
                      <option value="hospital">For hospital</option>
                      <option value="University">For University</option>
                    </select>
                  ) : formHead === "Home Tutor" ? (
                    <select
                    multiple
                      name="service"
                      onChange={(e) => {
                        setFullName({
                          ...fullName,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      style={{
                        width: "100%",
                        height: "100px",
                        border: "1px solid grey",
                        marginTop: "9px",
                        borderRadius: "5px",
                        paddingLeft: "8px",
                      }}
                    >
                      <option value="" disabled="" selected="">
                        Subject
                      </option>
                      <option value="Math">Math</option>
                      <option value="English">English</option>
                      <option value="Physics">Physics</option>
                      <option value="Biology">Biology</option>
                    </select>
                  ) : formHead === "Electrician" ? (
                    <select
                    multiple
                      name="service"
                      onChange={(e) => {
                        setFullName({
                          ...fullName,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      style={{
                        width: "100%",
                        height: "100px",
                        border: "1px solid grey",
                        marginTop: "9px",
                        borderRadius: "5px",
                        paddingLeft: "8px",
                      }}
                    >
                      <option value="" disabled="" selected="">
                        Service Type
                      </option>
                      <option value="Generator Install">
                        Generator Install
                      </option>
                      <option value="Ups Install">Ups Install</option>
                      <option value="Electrical wiring">
                        Electrical wiring
                      </option>
                    </select>
                  ) : formHead==="Cook/Chief"? (
                    <select
                    multiple
                      name="service"
                      onChange={(e) => {
                        setFullName({
                          ...fullName,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      style={{
                        width: "100%",
                        height: "100px",
                        border: "1px solid grey",
                        marginTop: "9px",
                        borderRadius: "5px",
                        paddingLeft: "8px",
                      }}
                    >
                      <option value="" disabled="" selected="">
                        Service Type
                      </option>
                      <option value="Kitchen">Kitchen Service</option>
                      <option value="Resturant">Resturant Services</option>
                      <option value="Cooking">Cooking Food</option>
                      <option value="Food">Food For Home</option>
                      
                    </select>

                  ): formHead ==="Baby Sitter"?
                  <select
                  multiple
                  name="service"
                  onChange={(e) => {
                    setFullName({
                      ...fullName,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  style={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid grey",
                    marginTop: "9px",
                    borderRadius: "5px",
                    paddingLeft: "8px",
                  }}
                >
                  <option value="" disabled="" selected="">
                    Service Type
                  </option>
                  <option value="Baby Sitter for Home">Baby Sitter for Home</option>
                  <option value="Baby Sitter For Office">Baby Sitter For Office</option>
                </select>
                :
                <select

                multiple
                  name="service"
                  onChange={(e) => {
                    setFullName({
                      ...fullName,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  style={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid grey",
                    marginTop: "9px",
                    borderRadius: "5px",
                    paddingLeft: "8px",
                  }}
                >
                  <option value="" disabled="" selected="">
                    Service Type
                  </option>
                  <option value="Baby Sitter for Home">For Office</option>
                  <option value="Baby Sitter For Office">For Personal Use</option>
                  <option value="Baby Sitter For Office">For Family</option>
                  <option value="Baby Sitter For Office">For Hospital</option>


                  
                </select>
                  
                  }
                  <P color="red">
                    {blank
                      ? fullName.service === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
                <Col md={7}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    {" "}
                    Qualification
                  </P>
                  <Input
                    name="qualification"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    placeholder="E.g. Matric/Intermediate"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {blank
                      ? fullName.qualification === "" &&
                        "***Its should not empty"
                      : ""}
                  </P>
                </Col>
              </Row>
              <Row style={{ marginBottom: "15px" }}>
                <Col style={{ marginBottom: "15px" }} md={12}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Skills
                  </P>
                  <Input
                    name="skills"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    placeholder="Enter your Skill"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {blank
                      ? fullName.skills === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
                <Col md={12}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Languages
                  </P>
                  <Input
                    name="language"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    placeholder="E.g. Punjabi / Urdu"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {blank
                      ? fullName.language === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
              </Row>

              <Row style={{ marginBottom: "15px" }}>
                <Col style={{ marginBottom: "15px" }} md={12}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Experience (If Any){" "}
                  </P>
                  <Input
                    name="experience"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    placeholder="E.g. Enter your working details"
                    borderRadius="5px"
                    height="40px"
                  />

                  <small id="experiencehelp" className="form-text text-danger">
                    If you are experienced please mention your all experiences
                    with work area and details as much as possible.
                  </small>
                </Col>
              </Row>

              <br />
              <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                Upload Your Recent Photo
              </P>

              <Input
                onChange={handleFileChange}
                style={{ border: "none", paddingBottom: "45px" }}
                type={"file"}
                placeholder="E.g.10000"
                borderRadius="5px"
                height="40px"
              />
            </>
          )}
          <hr />
          {servicesTab ? (
            <div className="text-center">
              {error && <P color="red">**{error}</P>}
              <Button
                onClick={() => {
                  setServicesTab(false);
                }}
              >
                Next
              </Button>
            </div>
          ) : (
            <div className="text-center">
              {error && <P color="red">**{error}</P>}
              <Button
                onClick={() => {
                  onSubmit();
                }}
              >
                Submit
              </Button>
            </div>
          )}
          {/* </Container> */}
        </ModalView>
      )}
      <ModalView
        height={"300px"}
        width={"600px"}
        show={existanceModal}
        setshow={setExistanceModal}
      >
        <div style={{ textAlign: "center" }}>
          <H2 style={{ fontSize: "40px" }}>Already Register</H2>
          <P>Your Already Added One post.So you are enable to add more </P>
        </div>
      </ModalView>
      <Navbar />
      <HeroSection
        padding={"50px 0px 50px 0px"}
        image={slider2}
        page={"Services"}
        work={true}
      />{" "}
      <Wrapper style={{ position: "relative" }}>
        <Spacer height="20" />
        <Spacer height="20" />
        <div style={{ textAlign: "center" }}>
          <P color="#19C133">What we Do</P>
          <H2 fontSize="55px" fontWeight="800">
            Our Services
          </H2>
          <Spacer />
        </div>
        {loader && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: "999999",
            }}
          >
            <BounceLoader size={100} color="#36d7b7" />
          </div>
        )}

        <Container>
          <Row data-aos="fade-up">
            <Col md={6}>
              <Card
                style={{ height: "400px" }}
                onClick={() => {
                  if (id) {
                    NextSection("Maid");
                  }
                }}
                // onClick={() => {
                //   client === 'false' && existance === false
                //     ? (setOpen(true), setFormHead('Maid'))
                //     : client === 'false' && existance === true
                //     ? setExistanceModal(true)
                //     : router.push({
                //         pathname: '/AllProfile',
                //       });
                // }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card
                    style={{
                      borderRadius: "100px",
                      padding: "20px 20px 20px 8px",
                      width: "100px",
                    }}
                  >
                    <img
                      width={"100px"}
                      src="https://cdn-icons-png.flaticon.com/512/2548/2548007.png"
                    />
                  </Card>
                </div>
                <br />
                <H2 fontWeight="600" lineHeight="50px" fontSize="22px">
                  Maid
                </H2>

                <P>
                  {" "}
                  We offer Maids of different types like for Cleaning, Laundary,
                  Kitchen, Baby-sitting, Cooking. Which will help you in
                  maintaining your home.
                </P>
                {id ? (
                  <BottomButton>
                    <img width={"20px"} src={right} />
                  </BottomButton>
                ) : (
                  ""
                )}
              </Card>
            </Col>
            <Col md={6}>
              <Card
                style={{ height: "400px" }}
                onClick={() => {
                  if (id) {
                    NextSection("Home Tutor");
                  }
                }}
                // onClick={() => {
                //   client === 'false' && existance === false
                //     ? (setOpen(true), setFormHead('Home Tutor'))
                //     : client === 'false' && existance === true
                //     ? setExistanceModal(true)
                //     : router.push({
                //         pathname: '/AllProfile',
                //       });
                // }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card
                    style={{
                      borderRadius: "100px",
                      padding: "20px 20px 20px 8px",
                      width: "100px",
                    }}
                  >
                    <img width={"90px"} src={teaching} />
                  </Card>
                </div>
                <br />
                <H2 fontWeight="600" lineHeight="50px" fontSize="22px">
                  Home Tutor
                </H2>

                <P>
                  {" "}
                  We offer Home Tutors which helps in improving student
                  education , academic performances and will dicuss student
                  progress with parents.
                </P>
                {id ? (
                  <BottomButton>
                    <img width={"20px"} src={right} />
                  </BottomButton>
                ) : (
                  ""
                )}
              </Card>
            </Col>
            <Col style={{ marginTop: "50px" }} md={6}>
              <Card
                style={{ height: "400px" }}
                onClick={() => {
                  if (id) {
                    NextSection("Security Guard");
                  }
                }}
                
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card
                    style={{
                      borderRadius: "100px",
                      padding: "20px 20px 20px 8px",
                      width: "100px",
                    }}
                  >
                    <img
                      width={"90px"}
                      src="https://cdn-icons-png.flaticon.com/512/2548/2548895.png"
                    />
                  </Card>
                </div>
                <br />
                <H2 fontWeight="600" lineHeight="50px" fontSize="22px">
                  Security Guard
                </H2>

                <P>
                  {" "}
                  We offer Security Guards which will help in monitoring
                  surveillance equipment and inspecting buildings and equipment.
                </P>
                {id ? (
                  <BottomButton>
                    <img width={"20px"} src={right} />
                  </BottomButton>
                ) : (
                  ""
                )}
              </Card>
            </Col>

            <Col style={{ marginTop: "50px" }} md={6}>
              <Card
                style={{ height: "400px" }}
                onClick={() => {
                  if (id) {
                    NextSection("Electrician");
                  }
                }}
                // onClick={() => {
                //   client === 'false' && existance === false
                //     ? (setOpen(true), setFormHead('Electrician'))
                //     : client === 'false' && existance === true
                //     ? setExistanceModal(true)
                //     : router.push({
                //         pathname: '/AllProfile',
                //       });
                // }}
                // // onClick={() => {
                //   client === 'false'
                //     ? (setOpen(true), setFormHead('Electrician Service'))
                //     : router.push({
                //         pathname: '/AllProfile',
                //         query: { name: 'Electrician Service' },
                //       });
                // }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card
                    style={{
                      borderRadius: "100px",
                      padding: "20px 20px 20px 8px",
                      width: "100px",
                    }}
                  >
                    <img
                      width={"90px"}
                      src="https://cdn-icons-png.flaticon.com/512/4202/4202922.png"
                    />
                  </Card>
                </div>
                <br />
                <H2 fontWeight="600" lineHeight="50px" fontSize="22px">
                  Electrician
                </H2>

                <P>
                  {" "}
                  We offer Electricians which helps in installing and repairing
                  electrical wiring, circuit breakers, systems and fixtures in
                  building.
                </P>
                {id ? (
                  <BottomButton>
                    <img width={"20px"} src={right} />
                  </BottomButton>
                ) : (
                  ""
                )}
              </Card>
            </Col>
            <Col style={{ marginTop: "50px" }} md={6}>
              <Card
                style={{ height: "400px" }}
                onClick={() => {
                  if (id) {
                    NextSection("Cook");
                  }
                }}
                
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card
                    style={{
                      borderRadius: "100px",
                      padding: "20px 20px 20px 8px",
                      width: "100px",
                    }}
                  >
                    <img
                      width={"90px"}
                      src={Chief}
                    />
                  </Card>
                </div>
                <br />
                <H2 fontWeight="600" lineHeight="50px" fontSize="22px">
                  Cook/Chief
                </H2>

                <P>
                  {" "}
                  We offer Chief Services which will help You to cook food and will help you in maintaining your kitchen.
                </P>
                {id ? (
                  <BottomButton>
                    <img width={"20px"} src={right} />
                  </BottomButton>
                ) : (
                  ""
                )}
              </Card>
            </Col>

            <Col style={{ marginTop: "50px" }} md={6}>
              <Card
                style={{ height: "400px" }}
                onClick={() => {
                  if (id) {
                    NextSection("Baby Sitter");
                  }
                }}
                // onClick={() => {
                //   client === 'false' && existance === false
                //     ? (setOpen(true), setFormHead('Electrician'))
                //     : client === 'false' && existance === true
                //     ? setExistanceModal(true)
                //     : router.push({
                //         pathname: '/AllProfile',
                //       });
                // }}
                // // onClick={() => {
                //   client === 'false'
                //     ? (setOpen(true), setFormHead('Electrician Service'))
                //     : router.push({
                //         pathname: '/AllProfile',
                //         query: { name: 'Electrician Service' },
                //       });
                // }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card
                    style={{
                      borderRadius: "100px",
                      padding: "20px 20px 20px 8px",
                      width: "100px",
                    }}
                  >
                    <img
                      width={"90px"}
                      src={Sitter}
                    />
                  </Card>
                </div>
                <br />
                <H2 fontWeight="600" lineHeight="50px" fontSize="22px">
                  Baby Sitter
                </H2>

                <P>
                  {" "}
                  We offer Baby Sitting Services which helps you to take care of your baby and will help you in maintaining your home.
                </P>
                {id ? (
                  <BottomButton>
                    <img width={"20px"} src={right} />
                  </BottomButton>
                ) : (
                  ""
                )}
              </Card>
            </Col>
            <Col style={{ marginTop: "50px" }} md={6}>
              <Card
                style={{ height: "400px" }}
                onClick={() => {
                  if (id) {
                    NextSection("Driver");
                  }
                }}
                // onClick={() => {
                //   client === 'false' && existance === false
                //     ? (setOpen(true), setFormHead('Electrician'))
                //     : client === 'false' && existance === true
                //     ? setExistanceModal(true)
                //     : router.push({
                //         pathname: '/AllProfile',
                //       });
                // }}
                // // onClick={() => {
                //   client === 'false'
                //     ? (setOpen(true), setFormHead('Electrician Service'))
                //     : router.push({
                //         pathname: '/AllProfile',
                //         query: { name: 'Electrician Service' },
                //       });
                // }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card
                    style={{
                      borderRadius: "100px",
                      padding: "20px 20px 20px 8px",
                      width: "100px",
                    }}
                  >
                    <img
                      width={"90px"}
                      src={"https://e7.pngegg.com/pngimages/990/83/png-clipart-taxicab-driver-illustration-taxi-car-driving-chauffeur-bus-taxi-driver-file-driving-hat-thumbnail.png"}
                    />
                  </Card>
                </div>
                <br />
                <H2 fontWeight="600" lineHeight="50px" fontSize="22px">
                 Driver
                </H2>

                <P>
                  {" "}
                  We offer Driving Services which helps you to drive your car and will help you to traval.
                </P>
                {id ? (
                  <BottomButton>
                    <img width={"20px"} src={right} />
                  </BottomButton>
                ) : (
                  ""
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}
