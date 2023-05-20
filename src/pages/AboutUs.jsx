import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar/Navbar";
import React, { useState, useEffect, useRef } from "react";
import { H2, P } from "../component/Typography";
import { Container } from "react-bootstrap";
import Footer from "../component/Footer";
import Spacer from "../component/Spacer";
import about4 from "../images/about4.png";
import aboutimg from "../images/about-img.jpg";
export default function AboutUs() {
  return (
    <>
      <Navbar />

      <HeroSection image={about4} page={"About"} />

      <Spacer height="20" />
      <H2 fontSize="30px" fontWeight="800" style={{ textAlign: "center" }}>
        About Us
      </H2>
      <Container style={{ width: "70%" }}>
        <P style={{ textAlign: "center", fontSize:"18px" }}>
          We will basically provide a platform where client can contact with
          service providers according to their need. In Pakistan, there may be
          no one denying the significance of a house maid or any other service
          provider. Doing all family chores like cleaning, dusting, cooking,
          washing, and so on is a very challenging project. Nowadays people have
          skills but they face difficulty to find job our aim is to help both
          client and service provider by connecting them with one another.
        </P>
        <Spacer />
        <div style={{ textAlign: "center" }}>
          <img width={"350px"} src={aboutimg} />
          <Spacer />
          <P style={{ textAlign: "center", fontSize:"18px" }}>In this way need of both users will be fulfilled.</P>
        </div>
      </Container>
      <Spacer height="40" />
      <Footer />
    </>
  );
}
