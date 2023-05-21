import Navbar from "../../component/Navbar/Navbar";
import { Row, Col, Container } from "react-bootstrap";
import classes from "./auth.module.css";
import { H2, P } from "../../component/Typography";
import React, { useState, useEffect, useRef } from "react";
import Button from "../../component/Button";
import Input from "../../component/Input";
import Footer from "../../component/Footer";
import Slider from "../../images/slider.png";
import logo3 from "../../images/logo3.png";
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { Link } from 'react-router-dom';


import axios from "axios";
import { client } from "../../services/client";

export default function SignUp() {
  const [mount, setMount] = useState(false);
  const [isWorker, setisWorker] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  async function onSumbit() {
    setLoader(true);

    setError("");
    if (
      email !== undefined &&
      password !== undefined &&
      confirmPassword !== undefined
    ) {
      if (password == confirmPassword) {
        try {
          const res = await client.post("addProfile", {
            email: email,
            password: password,
            isWorker: isWorker,
          });
          console.log(res);
          if (res.status === 200) {
            navigate("/sign-in");
            setLoader(false);
          }
        } catch (error) {
          setError(error.response.data.message);
          setLoader(false);
        }
      } else {
        console.log("password not match");
        setError("Your confirm password Does not match");
      }
    }
  }
  return (
    <>
      <Navbar />
      <div className={classes.Wrapper}>
        {loader && (
          <div style={{ position: "absolute", top: "50%", left: "50%" }}>
            <BounceLoader size={100} color="#36d7b7" />
          </div>
        )}
        <div style={{ height: "100%" }}>
          <div style={{ height: "100%" }}>
            <Container style={{ height: "100%" }}>
              <Row style={{ height: "600px", padding: "50px" }}>
                <Col
                  className={classes.colLeft}
                  style={{ height: "100%", backgroundColor: "#72A0C1" }}
                  md={6}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      flexDirection: "column",
                      backgroundColor: "lavender",
                      borderRadius: "20px 0 0 20px",
                    }}
                  >
                    <img
                      style={{ borderRadius: "10px" }}
                      width={"70%"}
                      src={Slider}
                    />
                    <H2 fontWeight="800" fontSize="40px" color="purple">
                      {" "}
                      Hommie Services
                    </H2>
                    <P>Register yourself to avail our services</P>
                    <Button
                      onClick={() => {
                        navigate("/sign-in");
                      }}
                    >
                      <a
                        style={{ color: "white" }}
                        // href={'/Subpages/Authentaction/Sign'}
                      >
                        Login
                      </a>
                    </Button>
                  </div>
                </Col>
                <Col
                  className={classes.colRight}
                  style={{
                    height: "100%",
                    background: "white",
                    padding: "0 50px",
                  }}
                  md={6}
                >
                  <div
                    style={{
                      height: "80%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    {/* <img width={"140px"} height="100px" src={logo3} alt="" style={{marginTop: "125px"}}/> */}
                    <H2 fontSize="28px" style={{ textAlign: "center", marginTop: "140px",}}>
                      Register Yourself
                    </H2>
                    <P style={{ textAlign: "center" , marginTop: "2px"}}>
                      Kindly enter your required credentials carefully.
                    </P>
                    <br />
                    <Input 
                     style={{
                      height:"43px"
                 }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type={"email"}
                      placeholder="Enter Your Email"
                    />
                    <Input
                        style={{
                          height:"43px"
                     }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type={"password"}
                      placeholder="Enter Your Password"
                    />
                    <Input
                        style={{
                          height:"43px"
                     }}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                      type={"password"}
                      placeholder="Confirm Password"
                    />
                    {error && <p style={{ color: "red" }}>***{error}</p>}
                    <div style={{ width: "100%" }}>
                      <input
                      
                        onChange={() => {
                          setisWorker(!isWorker);
                        }}
                        style={{ marginRight: "14px", boxShadow:"none" , width:"4%", marginTop:"6px" ,marginLeft:"14px"}}
                        type={"checkbox"}
                      />
                      As a Client
                    </div>
                    <P
                      style={{
                        textAlign: "right",
                        color: "blue",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Already have an account?  <Link to="/sign-in" style={{fontWeight:"bold", color: "blue"}}>Sign In</Link>
                      {/* <strong>Sign In</strong> */}
                    </P>
                      <br />

                    <Button
                      onClick={() => {
                        onSumbit();
                      }}
                      style={{
                        width: "90%",
                        borderRadius: "20px",
                        background: "#00d05e",
                        color: "white",
                        marginBottom: "35px",
                        paddingBottom: "50px"
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
