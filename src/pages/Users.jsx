import Navbar from "../component/Navbar/Navbar";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { Card } from "../component/Card";

import { H2, P } from "../component/Typography";
import Button from "../component/Button";
import Spacer from "../component/Spacer";

import Footer from "../component/Footer";

import ModalView from "../component/ModalView";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import art from "../images/art.jpg";
import adress from "../images/adress.svg";
import mail from "../images/mail.svg";
import Report from "../images/report (2).png";
import { client } from "../services/client";
const Wrapper = styled.div`
  background-color: #f7f7f7;
  padding-top: 70px;
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
export default function Users() {
  const dispatch = useDispatch();

  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.get("getUser");
        console.log(res);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Users</h1>
      <Row style={{ padding: "0", margin: "0",marginBottom:"30px" }}>
        {data
          ? data?.map((item, index) => {
              if (item.isAdmin === false)
                return (
                  <Col  data-aos="fade-up" key={index} md={3}>
                    <Card style={{ padding: "0px", marginTop: "20px", boxShadow: "0 5px 83px 40px rgb(40 40 40 / 8%)" }}>
                  <Col  data-aos="fade-up" key={index} md={3}>
                    <Card style={{ padding: "0px", marginTop: "20px", boxShadow: "0 5px 83px 40px rgb(40 40 40 / 8%)" }}>
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
                            src={
                              item.image
                                ? item.image
                                : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHcAdwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgMEAQYFB//EADEQAAIBAgQDBgYCAwEAAAAAAAABAgMRBBIhMUFRYRMUMnGBkQUiIzNSoWKxQkNyBv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9xAAAAAAAAAAAAAAAAAAAAAAAAAAAFdSrGG+r5FP1Kr6foC91YLeSOdtT5/ohHD85ex3u8P5e4E41IS2kiZQ8Ov8AGXuV3qUnxt12A1grp1FPo+RYAAAAAAAAAK61TJHrwLDK/q1rcAO0qed5p7f2aLJLkkQnNU47eSKZV3JNWSuBf2tP80O1h+aMYA2qpBuykmcqSjGLzexmgkvmk7JbdQ71Hmk7RW7Airp5o6JGulUzxvx4iCjKmlHwsoj9KrYDUAAAAAAACNR2hJ9CnCrxP0LK/wBqXkQw3gl5gRxXjXkUnxcbicfR+JV1nqTw9XHUqcLR+zpTbX/Mk5a8H56FXq98s8RX733pRWGt8nY5rXtbbJ82a++nQD0MYwpRzVPFwR3tYuLcopR4X4mT4pKpDFYDK5KEsRlmlxWSbt7pHn8PiviM5UaU6ta0MYqk6mX/AFSqZVDbnn9IoD02tRtt2gv0RlK+iVorZHzMLjMY/itSVSlUXw6u5UKLdrKUFo7brM1U1emkDL8MxdaWOw0J1a9SrUjJYmEpWVKVm7ZMuiTVk09b8dwPS4b7fqRxKs4s+H/5PEzr/exCqVXSvKPepTle6veDilH0bPu4rwx8wLYO8IvoSIUftRJgAAAAAEZq8GuaKcK9XH1NBlmnSqqS2A7ivGvIhFfLmk7RXDmXVckoKUtuHUqUZVZbWS/QHbSqzu9FzLJUm7LNaKIzpSeiyqK2RHsJ80B2rNZckNuJTdlvd584nVh5cWgLMM70/UrxLvJR5FyUaUOiKKadWpmfDUDTBWilyR0AAAAAAAEKkFONn6EwBhksryz0sa6eXKsmx2cFNaozunUpu8btdANQMyxEl4kjveP4P3A0EZSUVeTsUPESl4Uv7OKlUqO8tF1ATlKrNJLTgaKcFCNkIQUFZEgAAAAAAAAAAAAADjinukznZw/FexIAcSS2SR0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
                            }
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
                        {item.Name ? item.Name : "Not Updated"}
                      </H2>

                      <br />
                      <Row>
                        <Col style={{ textAlign: "center" }} md={12}>
                          <span style={{ marginRight: "20px" }}>
                            <img
                              alt="Location"
                              style={{ marginRight: "10px" }}
                              width={25}
                              height={25}
                              src={adress}
                            />
                            {item.PhoneNo ? item.PhoneNo : "Not Given"}
                          </span>
                        </Col>
                        <Col style={{ textAlign: "center" }} md={12}>
                          <span>
                            <img
                              alt="Location"
                              style={{ marginRight: "10px" }}
                              width={20}
                              height={20}
                              src={mail}
                            />
                            {item.Email}
                            {/* {item.status==="none"?"03*********":item.status==="pending"?"03******":item.contact} */}
                          </span>
                        </Col>
                        <Col style={{ textAlign: "center" }} md={12}>
                          <span>
                            {item.isWorker ? "Worker" : "Customer"}
                            {/* {item.status==="none"?"03*********":item.status==="pending"?"03******":item.contact} */}
                          </span>
                        </Col>
                      </Row>

                      <hr />
                      <Spacer height="6" />

                     
                    </Card>
                  </Col>
                );
            })
          : "loading..."}
      </Row>

      <Footer />
    </>
  );
}
