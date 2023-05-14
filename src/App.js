import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import SignUp from "./pages/Authentaction/SignUp";
import Sign from "./pages/Authentaction/Sign";
import Services from "./pages/Services";
import AllProfile from "./pages/AllProfile";
import Requests from "./pages/Requests";
import Notification from "./pages/Notification";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNotification } from "./services/redux/middleWare/getNotification";
import { getClient } from "./services/redux/middleWare/getClient";
import { getUser } from "./services/redux/middleWare/getUser";
import EditProfile from "./pages/EditProfle";
import EditPost from "./pages/EditPost";
import Users from "./pages/Users";
import Workers from "./pages/Workers";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem("id");

    if (id) {
      dispatch(getNotification(id));
      dispatch(getClient());
      dispatch(getUser(id));
    }
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<Sign />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profiles" element={<AllProfile />} />
          <Route path="/request" element={<Requests />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/edit-profile" element={<EditProfile/>} />
          <Route path="/edit-post" element={<EditPost/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/worker" element={<Workers/>} />





        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
