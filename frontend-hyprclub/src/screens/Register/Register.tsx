/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Form } from "react-bootstrap";
import ButtonItself from "../../components/loginSignUpBtn/ButtonItself";
import InputField from "../../components/inputField/Input";
import Logo from "../../components/logo/Logo";
import SocialLogins from "../../components/socialLogins/SocialLogins";
import "./register.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  useSelector,
  useDispatch,
  RootStateOrAny,
  DefaultRootState,
} from "react-redux";
import { useNavigate } from "react-router";

const Register = () => {
  const [data, setData] = useState({
    fname: "",
    lname:"",
    email: "",
    password: "",
    cpassword: "",
    username: "",
    phone: ""
  });
  const [checked, setChecked] = useState(true);

  const updateState = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  }
  const navigate = useNavigate();

  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.userData
  );

  //check whether username is unique or not
  
  const checkUsername = () =>{

  }
  //check whether password match or not

  const checkPassword = () =>{

  }

  //check for valid phone number

  const checkPhoneNumber = () => {

  }

  //check for accepting terms and conditions

  const checkTerms = () =>{
    
  }

  // function for handle submit
  const handleSubmit = () => {
    console.log({ data });
  };

  //function for google sign-in

  const googleSignIn = async () => {

  }

  //function for facebook sign-in
  const facebookSignIn = async () => {

  }


  useEffect(() => {
    const run = async () => {
      if (loggedIn && uid) {
        navigate("/market");
      } else {
      }
    };
    run();
  }, [loggedIn, uid, navigate]);

  return (
    <div>
      <Logo />
      <div className="container-sm registerPage">
        <div className="d-flex justify-content-center">
          <div className="registerForm">
            <h1 className="registerHeaderText">
              Join the Next Big Social Revolution
            </h1>
            <p className="subtitleText">
              Already have an account?{" "}
              <span className="createAccount">
                {" "}
                <Link to="/login" className="link">
                  Login
                </Link>{" "}
              </span>
            </p>
            <div className="mb-3">
              <Form
                onSubmit={(e) => {
                  handleSubmit();
                }}
              >
                <div className="d-flex registeInputs">
                  <InputField
                    typeOfInput="text"
                    half={false}
                    lableText={"Name"}
                  />
                  {/* <InputField  half={true} typeOfInput='text' lableText={"Last Name"}/> */}
                </div>
                <InputField
                  typeOfInput="email"
                  name="email"
                  half={false}
                  lableText={"Email Address:"}
                  onChange={(e : React.ChangeEvent<any>) =>{
                    updateState(e)
                  }}
                />
                <div className="d-flex registeInputs">
                 
                  <InputField
                    typeOfInput="text"
                    half={true}
                    value={data.username}
                    lableText={"Username"}
                    name="username"
                    onChange={(e : React.ChangeEvent<any>) =>{
                      updateState(e)
                    }}
                   
                  />
                  <InputField
                    typeOfInput="tel"
                    half={true}
                    lableText={"Mobile Number"}
                    name="phone"
                    onChange={(e : React.ChangeEvent<any>) =>{
                      updateState(e)
                    }}
                  />
                </div>
                <div className="d-flex registeInputs">
                  <InputField
                    typeOfInput="text"
                    half={true}
                    lableText={"Password"}
                    name="password"
                    onChange={(e : React.ChangeEvent<any>) =>{
                      updateState(e)
                    }}
                  />
                  <InputField
                    typeOfInput="password"
                    half={true}
                    lableText={"Confirm Password"}
                    name="cpassword"
                    onChange={(e : React.ChangeEvent<any>) =>{
                      updateState(e)
                    }}
                  />
                </div>
                
                <div className="d-flex checkBoxTexts align-items-center">
                  <input id="terms" name="terms" type="checkbox" />
                  <label className="ms-2" htmlFor="terms">
                    Yes, I agree to all the{" "}
                    <a className="termsLink" href="#">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
                <div className="d-flex checkBoxTexts align-items-center">
                  <input name="newsletter" id="newsletter" type="checkbox" />
                  <label className="ms-2" htmlFor="newsletter">
                    I would like to receive promotional emails from HyprClub
                  </label>
                </div>
                <div className="mt-3">
                  <ButtonItself btnPurpose={"Sign Up"} />
                </div>
              </Form>
            </div>
            <SocialLogins registerGoogle={() => googleSignIn()} registerFacebook={()=> facebookSignIn()} login={false} purpose={"Sign Up"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
