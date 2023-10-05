import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar/Navbar";
import React, { useState, useEffect, useRef } from "react";
import Spacer from "../component/Spacer";
import { H2, P } from "../component/Typography";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../component/Footer";
import aboutUs from "../images/aboutUs.png";
import pacleholder from "../images/placeholder.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png"
export default function Contact() {
  return (
    <>
      <Navbar />
      <HeroSection
        padding={"50px 0px 50px 0px"}
        image={aboutUs}
        page={"Contact"}
      />

      <Spacer height="60" />
      <Spacer height="60" />
      <div>
        <Container>
          <H2 fontWeight="800" color="#09150f" fontSize="45px">
            If you Have Any Query, Don’t Hesitate <br /> Contact with us
          </H2>
          <Spacer height="60" />
          <Row>
            <Col style={{ textAlign: "center" }} md={4}>
              <img
                width={"50"}
                style={{ color: "#06ae5a" }}
                src={pacleholder}
              />
              <div>
                <br />
                <H2 lineHeight="30px" fontSize="24px" fontWeight="800">
                  Address
                </H2>
                <P color="#626664">
                  Hommie Services, Islamabad <br />
                  5/A arcade, 3rd Floor palace road, Pakistan.
                </P>
              </div>
            </Col>
            <Col style={{ textAlign: "center" }} md={4}>
              <img
                width={"50"}
                style={{ color: "#06ae5a" }}
                src={phone}
              />
              <div>
                <br />
                <H2 lineHeight="30px" fontSize="24px" fontWeight="800">
                  Phone
                </H2>
                <P color="#626664">
                  +92 331 7634529 <br />
                  +92 321 2634525
                </P>
              </div>
            </Col>
            <Col style={{ textAlign: "center" }} md={4}>
              <img
                width={"50"}
                style={{ color: "#06ae5a" }}
                src={mail}
              />
              <div>
                <br />
                <H2 lineHeight="30px" fontSize="24px" fontWeight="800">
                  Email
                </H2>
                <P color="#626664">hommie_services@gmail.com</P>
              </div>
            </Col>
          </Row>
          <Spacer height="80" />
        </Container>
      </div>
      <Footer />
    </>
  );
}
