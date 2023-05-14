import { useEffect } from "react";
import Spacer from "../component/Spacer";
import axios from "axios";
import { useState } from "react";
import "./profile.css";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../services/redux/middleWare/getUser";
import { BounceLoader } from "react-spinners";
import { client } from "../services/client";


export default function EditProfile() {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [cnic, setCnic] = useState("");

  const [image, setImage] = useState("");
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.getUser.getUserData);
  console.log("state in edit profile", state);

  // useEffect(()=>{
  //   const localid = localStorage.getItem('id');
  //   console.log("i am your local id",localid)
  //   if(localid){
  //     setId(localid);
  //   }

  //   async function getProfile(){
  //     const res = await axios.get('/api/getProfile')
  //     console.log(res.data.data);
  //     for(let i of res.data.data){
  //       if(i.userId === localid){
  //         setFirstName(i.firstName);
  //         setLastName(i.lastName);
  //         setImage(i.image);
  //       }
  //     }

  //   }
  //   getProfile();

  // })

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
      // setSelectedFile(file);
    };
  };
  useEffect(() => {
    const localid = localStorage.getItem("id");
    if (localid) {
      setId(localid);
      dispatch(getUser(localid));
    }
  }, []);
  async function updateProfile() {
    setLoader(true);
    try{
      const res = await client.put(`updateProfile/${id}`, {
        name: firstName,
        phoneNo: phoneNo,
        image: image,
        cnic: cnic,
      });
      setLoader(false);
      if(res.status===200){
        setLoader(false);
        alert("Profile Updated")
        dispatch(getUser(id));
      }



    }catch(err){
      console.log(err.response)
      // setLoader(false);  
    }
   
  }
  return (
    <>
      <Navbar />
      <div class="wrapper">
      {loader && (
          <div style={{ position: "absolute", top: "50%", left: "50%" }}>
            <BounceLoader size={100} color="#36d7b7" />
          </div>
        )}
        <div class="profile">
          <div class="content">
            <h1>Edit Profile</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "100px",
                }}
                src={
                  image
                    ? image
                    : state.image
                    ? state.image
                    : "data:image/jpeg;base64,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"
                }
              />
            </div>
            {/* <form action=""> */}
            <fieldset style={{ display: "flex", alignItems: "center" }}>
              <div class="grid-35">
                <label for="avatar">Your Photo</label>
              </div>

              <div class="grid-65">
                <input onChange={handleFileChange} type="file" class="btn" />
              </div>
            </fieldset>

            <fieldset
              style={{
                display: "flex",
                alignItems: "center",
                padding: "30px 0px",
              }}
            >
              <div class="grid-35">
                <label for="fname">Name</label>
              </div>
              <div class="grid-65">
                <input
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  id="fname"
                  tabindex="1"
                  placeholder={state.Name ? state.Name : "Enter Name"}
                />
              </div>
            </fieldset>

            <fieldset
              style={{
                display: "flex",
                alignItems: "center",
                padding: "30px 0px",
              }}
            >
              <div class="grid-35">
                <label for="lname">Phone No</label>
              </div>
              <div class="grid-65">
                <input
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                  }}
                  type="text"
                  id="lname"
                  tabindex="2"
                  placeholder={state.PhoneNo ? state.PhoneNo : "Enter Phone no"}
                />
              </div>
            </fieldset>
            <fieldset
              style={{
                display: "flex",
                alignItems: "center",
                padding: "30px 0px",
              }}
            >
              <div class="grid-35">
                <label for="lname">Email</label>
              </div>
              <div class="grid-65">
                <input
                  disabled
                  type="text"
                  id="lname"
                  tabindex="2"
                  placeholder={state.Email}
                />
              </div>
            </fieldset>

            <fieldset
              style={{
                display: "flex",
                alignItems: "center",
                padding: "30px 0px",
              }}
            >
              <div class="grid-35">
                <label for="lname">Cnic</label>
              </div>
              <div class="grid-65">
                <input
                  value={cnic}
                  onChange={(e) => {
                    setCnic(e.target.value);
                  }}
                  type="text"
                  id="lname"
                  tabindex="2"
                  placeholder={state.cnic ? state.cnic : "Enter Cnic"}
                />
              </div>
            </fieldset>

            <fieldset>
              <input type="button" class="Btn cancel" value="Cancel" />
              <input
                onClick={() => {updateProfile()}}
                type="submit"
                class="Btn"
                value="Save Changes"
              />
              {/* <button onClick={()=>{updateProfile()}}  class="Btn" value="Save Changes" >Save Changes</button> */}
            </fieldset>
            {/* </form> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
