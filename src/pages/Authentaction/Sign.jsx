import Navbar from "../../component/Navbar/Navbar";
import { Row, Col, Container } from "react-bootstrap";
import classes from "./auth.module.css";
import { H2, P } from "../../component/Typography";
import React, { useState, useEffect, useRef } from "react";
import Button from "../../component/Button";
import Input from "../../component/Input";
import Footer from "../../component/Footer";
import Slider2 from "../../images/slider2.png";
import logo3 from "../../images/logo3.png";
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { client } from "../../services/client";
import { Link } from 'react-router-dom';

import axios from "axios";

export default function Sign() {
  const [mount, setMount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  async function onSubmit() {
    setLoader(true);
    setError("");
    try {
      const res = await client.post("signin", {
        email: email,
        password: password,
        
      });
      try {
        if (res.status === 200) {
          
          console.log(res.data.data);
          
          
          localStorage.setItem("id", res.data.data._id);
          localStorage.setItem("email", res.data.data.Email);
          localStorage.setItem("isWorker", res.data.data.isWorker);
          localStorage.setItem("isAdmin", res.data.data.isAdmin);
          
          setLoader(false);
          navigate("/");
        }
      } catch (error) {
        // console.log(error);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setLoader(false);
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
                      style={{ borderRadius: "100px" }}
                      width={"100%"}
                      src={Slider2}
                    />
                    <H2 fontWeight="800" fontSize="40px" color="purple">
                      {" "}
                      Services at your doorstep
                    </H2>
                    <P>Register yourself for our services</P>
                    <Button
                      onClick={() => {
                        navigate("/sign-up");
                      }}
                    >
                      <a
                        style={{ color: "white" }}
                        // href={'/Subpages/Authentaction/SignUp'}
                      >
                        Register
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
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    {/* <img width={"140px"} height="80px" src={logo3} style={{marginTop: "12px"}} /> */}
                    <H2 fontSize="28px" style={{ textAlign: "center" }}>
                      Sign In
                    </H2>
                    <P style={{ textAlign: "center" }}>
                      Welcome! Enter your details to Login
                    </P>
                    <br />
                    <Input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type={"email"}
                      placeholder="Enter Your Email"
                    />
                    <Input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type={"password"}
                      placeholder="Enter Your Password"
                    />
                    {error && <p style={{ color: "red" }}>***{error}</p>}
                    <P
                      style={{
                        textAlign: "right",
                        color: "blue",
                        textDecoration: "none",
                      }}
                    >
                      Don't have an account ? <Link to="/sign-up" style={{fontWeight:"bold", color: "blue"}}>Sign Up</Link>
                     
                    </P>
                  
                    <Button
                      onClick={() => {
                        onSubmit();
                      }}
                      style={{
                        width: "90%",
                        borderRadius: "20px",
                        background: "#00d05e",
                        color: "white",
                        marginTop:"12px",
                        marginBottom:"12px",
                        paddingBottom:'10px'
                      }}
                    >
                      Login
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
