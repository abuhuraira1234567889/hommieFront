/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "react-bootstrap";
import Button from "../Button";
import classes from "./Navbar.module.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo3 from "../../images/logo3.png";
export default function Navbar() {
  const [id, setId] = useState("");
  const [lid, setLid] = useState("");
  const [client, setClient] = useState();
  const [isAdmin, setIsAdmin] = useState();

  const [existance, setExistance] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const localid = localStorage.getItem("id");
    const loaclclient = localStorage.getItem("isWorker");
    const localadmin = localStorage.getItem("isAdmin");
    if (localid && loaclclient) {
      setLid(localid);
      setClient(loaclclient);
      setIsAdmin(localadmin);
    }
  }, []);

  //   const localid = localStorage.getItem('id');
  //   const loaclclient = localStorage.getItem('client');
  //   if (localid && loaclclient) {
  //     setLid(localid);
  //     setClient(loaclclient);
  //   }
  //   async function getClient() {
  //     const res = await axios.get('/api/getClient');
  //     const datas = res.data.data;
  //     console.log("i am response",datas);
  //     // console.log(datas.includes(localid));
  //     console.log(localid);
  //     for (let i of res.data.data) {
  //       console.log(i.userID);
  //       if (i.userID === localid) {
  //         console.log('yes i am exist');
  //         setExistance(true);
  //       }
  //     }
  //   }
  //   getClient();
  // });
  function logout() {
    localStorage.clear();
   
    navigate("/");
  }
  return (
    <>
      <div className={classes.NavWrapper}>
        {/* <Container> */}
        <div className={classes.MainNav}>
          <div className={classes.LeftSide}>
            <div className={classes.NavLogo}>
              <img height={"60px"} src={logo3} />
            </div>
            {isAdmin === "true" ? (
              <ul className={classes.ull}>
                <li
                  onClick={() => {
                    navigate("/users");
                  }}
                  className={classes.lii}
                >
                  {/* <a href={'/'}> */}
                  <a className={classes.name}>Users</a>
                  {/* </a> */}
                </li>
                <li
                  onClick={() => {
                    navigate("/worker");
                  }}
                  className={classes.lii}
                >
                  {/* <a href={'/'}> */}
                  <a className={classes.name}>Workers</a>
                  {/* </a> */}
                </li>
               
              </ul>
            ) : (
              <ul className={classes.ull}>
                <li
                  onClick={() => {
                    navigate("/");
                  }}
                  className={classes.lii}
                >
                  {/* <a href={'/'}> */}
                  <a className={classes.name}>Home</a>
                  {/* </a> */}
                </li>
                <li
                  onClick={() => {
                    navigate("/about");
                  }}
                  className={classes.lii}
                >
                  <a className={classes.name}>About Us</a>
                </li>
                <li
                  onClick={() => {
                    navigate("/Services");
                  }}
                  className={classes.lii}
                >
                  <a className={classes.name}>Services</a>
                </li>
                <li
                  onClick={() => {
                    navigate("/contact");
                  }}
                  className={classes.lii}
                >
                  <a className={classes.name}>Contact</a>
                </li>
                {client === "false" ? (
                  <li
                    onClick={() => {
                      navigate("/notification");
                    }}
                    className={classes.lii}
                  >
                    <a className={classes.name}>Requests</a>
                  </li>
                ) : (
                  <li
                    onClick={() => {
                      navigate("/request");
                    }}
                    className={classes.lii}
                  >
                    <a className={classes.name}>Notification</a>
                  </li>
                )}

                <li
                  onClick={() => navigate("/edit-profile")}
                  className={classes.lii}
                >
                  <a className={classes.name}>Edit Profile</a>
                </li>
                {client === "true" ? (
                  <li
                    onClick={() => navigate("/edit-post")}
                    className={classes.lii}
                  >
                    <a className={classes.name}>Edit Post</a>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            )}
          </div>
          <div>
            {lid ? (
              <Button onClick={() => logout()}>
                <a style={{ color: "white" }}> Logout</a>
              </Button>
            ) : (
              <Button
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                <a style={{ color: "white" }}> Register</a>
              </Button>
            )}
          </div>
        </div>
        {/* </Container> */}
      </div>
    </>
  );
}
