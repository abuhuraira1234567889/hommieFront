import Navbar from "../component/Navbar/Navbar";
import HeroSection from "../component/HeroSection";
import React, { useState, useEffect, useRef } from "react";
import { H2, P } from "../component/Typography";
import Spacer from "../component/Spacer";
import { Container, Row, Col, Modal } from "react-bootstrap";
import styled from "styled-components";
import { Card } from "../component/Card";

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
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../services/redux/middleWare/getClient";

const Wrapper = styled.div`
  //background: #f6f8ff;
  background: #f7f7f7;
  padding-bottom: 100px;
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
export default function EditPost() {
  const [id, setId] = useState("");
  const [isWorker, setisWorker] = useState();
  const [open, setOpen] = useState(false);
  const [formHead, setFormHead] = useState("");
  const [existance, setExistance] = useState(false);
  const [existanceModal, setExistanceModal] = useState(false);
  const [error, setError] = useState("");

  const [blank, setBlank] = useState(false);
  const dispatch = useDispatch();
  const [errorPopUp, setErrorPopUp] = useState(false);
  const state = useSelector((state) => state.getClient.getClientData);
  const state2=useSelector((state)=>state.user.editPost)
  console.log(state)
  const [itemss, setItemss] = useState();

  console.log("i am the state of the users", state2.editPost)
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loader, setLoader] = useState(false);
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
  useEffect(() => {
    dispatch(getClient());
  }, []);

  async function NextSection(name) {
    if (isWorker === "true") {
      setLoader(true);
      try {
        const res = await client.get(`checkClient/${id}`);
        console.log(res);
        if (res.status === 200) {
          setExistanceModal(true);
          setLoader(false);
        } else if (res.status === 201) {
          setFormHead(name);
          setLoader(false);
          setOpen(true);
        }
        // setFormHead(name);
        // setLoader(false);
      } catch (error) {
        console.log(error);
      }

      // setOpen(true);
    } else {
      navigate("/profiles");
    }
  }

  async function onSubmit(itemId) {
    setLoader(true);

    

    try {
      const res = await client.put(`updateClient/${itemId}`, {
        name: fullName.fname ? fullName.fname : itemss.name,
        age: fullName.age ? fullName.age : itemss.age,
        gender: fullName.gender ? fullName.gender : itemss.gender,
        contact: fullName.no
          ? parseInt(fullName.no)
          : parseInt(itemss.contact),

        religion: fullName.religion ? fullName.religion : itemss.religion,
        city: fullName.city ? fullName.city : itemss.city,
        adress: fullName.Address ? fullName.Address : itemss.adress,
        maritialStatus: fullName.maritialStatus
          ? fullName.maritialStatus
          : itemss.maritialStatus,
        timing: fullName.timing ? fullName.timing : itemss.timing,
        service: fullName.service ? fullName.service : itemss.service,
        qualification: fullName.qualification
          ? fullName.qualification
          : itemss.qualification,
        skills: fullName.skills ? fullName.skills : itemss.skills,
        language: fullName.language ? fullName.language : itemss.language,
        experince: fullName.experience
          ? fullName.experience
          : itemss.experince,
        image: imageUrl ? imageUrl : itemss.image,
      });
      console.log("i am the response of data",res.data.response);
      if (res.status === 200) {
        alert("Your Post is Updated");
        setLoader(false);
        // navigate("/profiles");
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }
  return (
    <>
      <Navbar />
      <main class="py-2 bg-surface-secondary">
      {state?.map((item, index) => {
        console.log(item._id, state2)
        if (item._id === state2)
          return (
            <div style={{position:"relative"}} key={index} className="mx-3 my-3">
              {loader && (
                <div style={{ position: "absolute", top: "50%", left: "50%" }}>
                  <BounceLoader size={100} color="#36d7b7" />
                </div>
              )}
              <H2
                className="text-center"
                fontWeight="600"
                color="#0e1b4d"
                style={{ paddingTop: "0px", fontSize: "42px" }}
                data-aos="fade-right"
              >
                Update Profile
              </H2>

              <P style={{ textAlign: "center", marginTop:"12px" }}>
                Please enter your details carefully as this information will be
                used to hire you as a worker.
              </P>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100px",
                  }}
                  src={
                    imageUrl
                      ? imageUrl
                      : item.image
                      ? item.image
                      : "data:image/jpeg;base64,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"
                  }
                />
              </div>
              <Row>
                <Col md={4}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Full Name
                  </P>
                  <Input
                    placeholder={fullName.fname ? fullName.fname : item.name}
                    name="fname"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    // placeholder="Full name"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {blank
                      ? fullName.fname === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
                <Col md={4}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>Age</P>
                  <Input
                    placeholder={fullName.age ? fullName.age : item.age}
                    name="age"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    min={0}
                    type={"number"}
                    // placeholder="E.g 23"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {blank
                      ? fullName.age === "" && "***Its should not empty"
                      : ""}
                  </P>
                </Col>
                <Col md={4}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Gender
                  </P>
                  {/* <Input placeholder='Full name' borderRadius='5px' height='40px' /> */}
                  <select
                    //  value={fullName.age?fullName.age:item.age}
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
                    placeholder={fullName.no ? fullName.no : item.contact}
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    type={"number"}
                    // placeholder="E.g. +923313487297"
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
                    disabled
                    placeholder={fullName.cnic ? fullName.cnic : item.cnic}
                    name="cnic"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    type={"number"}
                    // placeholder="E.g. XXXXX-XXXXXXX-X"
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
                    placeholder={
                      fullName.religion ? fullName.religion : item.religion
                    }
                    name="religion"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    // placeholder="E.g. Muslim"
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
                    placeholder={fullName.Address ? fullName.Address : item.adress}
                    name="Address"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    // placeholder="E.g Officer Colony, Wah Cantt"
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

              <Row style={{ marginBottom: "10px" }}>
                <Col style={{ marginBottom: "30px" }} md={5}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Select Your Service
                  </P>
                  <select
                    name="service"
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
                    <option value="" disabled="" selected="">
                      Service Type
                    </option>
                    <option value="Kitchen">Kitchen Service</option>
                    <option value="Cleaning">Cleaning Service</option>
                    <option value="Laundary">Laundary Service</option>
                    <option value="Babysitting">Baby-Sitting</option>
                    <option value="Housechore">House Chore</option>
                    <option value="Cook">Chef/Cook</option>
                    <option value="Other">Other</option>
                  </select>
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
                    placeholder={
                      fullName.qualification
                        ? fullName.qualification
                        : item.qualification
                    }
                    name="qualification"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    // placeholder="E.g. Matric/Intermediate"
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
                <Col style={{ marginBottom: "15px" }} md={5}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Skills
                  </P>
                  <Input
                    placeholder={fullName.skills ? fullName.skills : item.skills}
                    name="skills"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    // placeholder="E.g. Cooking/Cleaning"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {/* {blank
                      ? fullName.skills === "" && "***Its should not empty"
                      : ""} */}
                  </P>
                </Col>
                <Col md={7}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Languages
                  </P>
                  <Input
                    placeholder={
                      fullName.language ? fullName.language : item.language
                    }
                    name="language"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    // placeholder="E.g. Punjabi / Urdu"
                    borderRadius="5px"
                    height="40px"
                  />
                  <P color="red">
                    {/* {blank
                      ? fullName.language === "" && "***Its should not empty"
                      : ""} */}
                  </P>
                </Col>
              </Row>

              <Row style={{ marginBottom: "15px" }}>
                <Col style={{ marginBottom: "15px" }} md={12}>
                  <P style={{ marginBottom: "0px", fontWeight: "bold" }}>
                    Experience (If Any){" "}
                  </P>
                  <Input
                    placeholder={
                      fullName.experience ? fullName.experience : item.experince
                    }
                    name="experience"
                    onChange={(e) => {
                      setFullName({
                        ...fullName,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    // placeholder="E.g. Enter your working details"
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
              <hr />
              <div className="text-center">
                {error && <P color="red">**{error}</P>}
                <Button
                  onClick={() => {
                    setItemss(item)
                    onSubmit(item._id);
                  }}
                >
                  Update Post
                </Button>
              </div>
            </div>
          );
      })}

      {/* </Container> */}
      </main>
      <Footer />
    </>
  );
}
