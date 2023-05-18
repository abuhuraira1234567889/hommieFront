import React, { useState, useEffect, useRef } from "react";
import Spacer from "../../component/Spacer";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./home.module.css";
import { H2, P } from "../../component/Typography";
import Button from "../../component/Button";
import Footer from "../../component/Footer";
import Carasoule from "../../component/Carasoule";
import Navbar from "../../component/Navbar/Navbar";
import signUp from "../../images/sign-up.png";
import user from "../../images/user.png";
import hiring from "../../images/hiring.png";
import contact from "../../images/contact.png";
import c3 from "../../images/c3.png";
import maidService from "../../images/maid-service.jpg";
import homeTutor from "../../images/home-tutor.jpg";
import electrician from "../../images/electrician.jpg";
import securityGuard from "../../images/security-guard.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [client, setClient] = useState();

  // useEffect(() => {
  //   const localid = localStorage.getItem("id");"/assets/security-guard.jpg"
  //   const loaclclient = localStorage.getItem("client");
  //   if (localid && loaclclient) {
  //     setId(localid);
  //     setClient(loaclclient);
  //   }
  // }, []);

  return (
    <>
      <Navbar />
      <div className={classes.HomeWrapper}>
        <Carasoule />

        <Spacer height="40" />
        <Spacer height="40" />
        <Row>
          <Col style={{ textAlign: "center" }} md={12}>
            <h5 className={classes.weWork}>  How We Works </h5>
            <h2 className={classes.Excellent}>
              Excellent Technique For <br />
              Client & Worker
            </h2>
          </Col>
        </Row>
        <Container>
          <Spacer height="50" />
          <Row>
            <Col
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              md={3}
            >
              <img src={signUp} />
              <Spacer height="20" />
              <h4 className={classes.book}>Register</h4>
              <p className={classes.bookPara}>
                Register yourself either as a worker or as a client.
              </p>
            </Col>
            <Col
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              md={3}
            >
              <img src={user} />
              <Spacer height="20" />

              <h4 className={classes.book}>Sign In</h4>
              <p className={classes.bookPara}>
                Simply by entering required credentials.
              </p>
            </Col>
            <Col
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              md={3}
            >
              <img src={hiring} />
              <Spacer height="20" />

              <h4 className={classes.book}>Hire A Worker</h4>
              <p className={classes.bookPara}>
                Hire worker easily according to your need by viewing their
                profile.
              </p>
            </Col>
            <Col
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              md={3}
            >
              <img src={contact} />
              <Spacer height="20" />

              <h4 className={classes.book}>Contact</h4>
              <p className={classes.bookPara}>
                Easily get connected with worker without facing any difficulty.
              </p>
            </Col>
          </Row>
          <Spacer height="40" />
          <Spacer height="40" />
        </Container>
        <div className={classes.bright}>
          <Container>
            <Row>
              <Col
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                md={6}
              >
                <img style={{ width: "80%" , marginRight: "90px"}} src={c3}></img>
                <img style={{ width: "80%" , marginRight: "90px"}} src={c3}></img>
              </Col>
              <Col style={{ position: "relative" }} md={6}>
                <H2 fontWeight="800" fontSize="18px" color="#06ae5a">
                  About The Hommie
                </H2>
                <H2 fontWeight="800" fontSize="50px" color="#102579">
                <H2 fontWeight="800" fontSize="50px" color="#102579">
                  Connecting Both Worker <br />
                  And Client
                </H2>
                <P fontSize="20px" color="#66686b">
                  A platform where one can register as a worker and get easily
                  connected with client.Nowadays, no one can deny need of a
                  service provider.So, our aim is to help both client and
                  service provider by connecting them with one another.
                </P>
              </Col>
            </Row>
          </Container>
        </div>
        <Spacer height="40" />
        <Row>
          <Col style={{ textAlign: "center" }} md={12}>
            <h5 className={classes.weWork}>  Our Services </h5>
            <h2 className={classes.Excellent}>
              Quality Services Making <br />
              you Much Happy
            </h2>
          </Col>
        </Row>
        <Spacer height="60" />
        <Container>
          <Row>
            <Col
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 5px 20px 15px rgb(5 7 80 / 6%)",
                boxShadow: "0 5px 20px 15px rgb(5 7 80 / 6%)",
                width: "49%",
              }}
              md={6}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <img width={200} src={maidService} />
                </div>
                <div style={{ marginLeft: "20px" }}>
                  <H2 fontSize="24px" fontWeight="800">
                    Maid
                  </H2>
                  <P fontSize="16px" color="#66686b">
                    Maids are responsible for keeping residences and commercial
                    establishments clean and tidy. Different types of maid are
                    available like Cleaning Maid, Kitchen Maid, Baby-Sitter,
                    Cook/Chef, Laundary Maid.
                  </P>
                  {client === "false" ? (
                    ""
                  ) : (
                    <Button
                    onClick={() => {
                      navigate("/sign-up");
                    }}
                    >
                      Book Now
                    </Button>
                  )}
                </div>
              </div>
            </Col>
            <Col
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 5px 20px 15px rgb(5 7 80 / 6%)",
                marginLeft: "10px",
                width: "49%",
              }}
              md={6}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <img width={200} src={homeTutor} />
                </div>
                <div style={{ marginLeft: "20px" }}>
                  <H2 fontSize="24px" fontWeight="800">
                    Home Tutor
                  </H2>
                  <P fontSize="16px" color="#66686b">
                    Home Tutors help students to improve in understanding their
                    work and improve their educational and academic
                    performances. Evaluate students' progress and discuss the
                    results with students and their parents.
                  </P>
                  {client === "false" ? (
                    ""
                  ) : (
                    <Button
                    onClick={() => {
                      navigate("/sign-up");
                    }}
                    >
                      Book Now
                    </Button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Spacer height="20" />
          <Row>
            <Col
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 5px 20px 15px rgb(5 7 80 / 6%)",
                boxShadow: "0 5px 20px 15px rgb(5 7 80 / 6%)",
                width: "49%",
              }}
              md={6}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <img width={200} src={securityGuard} />
                </div>
                <div style={{ marginLeft: "20px" }}>
                  <H2 fontSize="24px" fontWeight="800">
                    Security Guard
                  </H2>
                  <P fontSize="16px" color="#66686b">
                    Security Guards duties often include securing premises and
                    personnel by patrolling property, monitoring surveillance
                    equipment and inspecting buildings and equipment.
                  </P>
                  {client === "false" ? (
                    ""
                  ) : (
                    <Button
                    onClick={() => {
                      navigate("/sign-up");
                    }}
                    >
                      Book Now
                    </Button>
                  )}
                </div>
              </div>
            </Col>
            <Col
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 5px 20px 15px rgb(5 7 80 / 6%)",
                marginLeft: "10px",
                width: "49%",
              }}
              md={6}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <img width={200} src={electrician} />
                </div>
                <div style={{ marginLeft: "20px" }}>
                  <H2 fontSize="24px" fontWeight="800">
                    Electrician
                  </H2>
                  <P fontSize="16px" color="#66686b">
                    Electrcian helps in installing and repairing electrical
                    wiring, systems and fixtures in building. Installs circuit
                    breakers and other electrical hardware and connects wiring
                    to them.
                  </P>
                  {client === "false" ? (
                    ""
                  ) : (
                    <Button
                    onClick={() => {
                      navigate("/sign-up");
                    }}
                    >
                      Book Now
                    </Button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Spacer height="50" />
        </Container>

        {/* <Spacer height='100' /> */}
        <div style={{ background: "#f7f7f7" }}>
          <div>
            {/* <Row>
              <Col style={{ textAlign: 'center' }} md={12}>
                <h5 className={classes.weWork}> _ _ Customer Feedback _ _</h5>
                <h2 className={classes.Excellent}>
                  Quality Cleaning Making <br />
                  you Much Happy
                </h2>
              </Col>
            </Row> */}

            {/* <Container>
              <Row>
                <Col
                  style={{
                    background: 'lightgrey',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 5px 20px 0 rgb(5 7 80 / 6%)',
                  }}
                  md={4}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ marginLeft: '20px' }}>
                      <img
                        height={'100px'}
                        width={'100px'}
                        style={{ borderRadius: '60px' }}
                        src='/assets/service-9.jpg'
                      />
                      <H2 fontSize='24px' fontWeight='800'>
                        John Do
                      </H2>
                      <P fontSize='16px' color='#66686b'>
                        Buscipit tincidunt duis antino gravidia nam tellusy
                        nascetur neque vulpuits aenean is scelerisque ultrces
                        muscle mass and matter order commo.
                      </P>
                    </div>
                  </div>
                </Col>
                <Col
                  style={{
                    background: 'lightgrey',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 5px 20px 0 rgb(5 7 80 / 6%)',
                    marginLeft: '10px',
                  }}
                  md={4}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ marginLeft: '20px' }}>
                      <img
                        height={'100px'}
                        width={'100px'}
                        style={{ borderRadius: '60px' }}
                        src='/assets/service-9.jpg'
                      />
                      <H2 fontSize='24px' fontWeight='800'>
                        House Cleaning
                      </H2>
                      <P fontSize='16px' color='#66686b'>
                        Buscipit tincidunt duis antino gravidia nam tellusy
                        nascetur neque vulpuits aenean is scelerisque ultrces
                        muscle mass and matter order commo.
                      </P>
                    </div>
                  </div>
                </Col>
                <Col
                  style={{
                    background: 'lightgrey',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 5px 20px 0 rgb(5 7 80 / 6%)',
                    marginLeft: '10px',
                    width: '31%',
                  }}
                  md={4}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ marginLeft: '20px' }}>
                      <img
                        height={'100px'}
                        width={'100px'}
                        style={{ borderRadius: '60px' }}
                        src='/assets/service-9.jpg'
                      />
                      <H2 fontSize='24px' fontWeight='800'>
                        House Cleaning
                      </H2>
                      <P fontSize='16px' color='#66686b'>
                        Buscipit tincidunt duis antino gravidia nam tellusy
                        nascetur neque vulpuits aenean is scelerisque ultrces
                        muscle mass and matter order commo.
                      </P>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
