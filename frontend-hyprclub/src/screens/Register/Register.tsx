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

  //update the data in variable
//   function updateState(e: React.ChangeEvent<HTMLInputElement>) : React.FunctionComponent  {
//     setData((state) => ({ ...state, [e.target.name]: e.target.value }));
//     console.log({ data });
//   }
  const updateState = (e : React.ChangeEvent<HTMLInputElement>)=>{
      setData((state) =>({...state,[e.target.name]:e.target.value}))
      console.log({data})
  }
  const navigate = useNavigate();

  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.userData
  );

  //check whether username is unique or not
  function checkUsername(e: React.ChangeEvent<any>) {}

  //check whether password match or not
  function checkPassword(e: React.ChangeEvent<any>) {}

  //check for valid phone number

  function checkPhoneNumber(e: React.ChangeEvent<any>) {}

  //check for accepting terms and conditions

  // function for handle submit
  const handleSubmit = () => {
    console.log({ data });
  };

  //function for google sign-in

  //function fot facebook sign-in

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
                // onSubmit={(e) => {
                //   handleSubmit();
                // }}
              >
                <div className="d-flex registeInputs">
                  <InputField
                    typeOfInput="text"
                    name = "fname"
                    half={true}
                    lableText={"First Name"}
                    onChange={updateState}
                  />
                  <InputField
                    half={true}
                    name = "lname"
                    typeOfInput="text"
                    lableText={"Last Name"}
                    onChange={updateState}
                  />
                </div>
                <InputField
                  typeOfInput="email"
                  name="email"
                  half={false}
                  lableText={"Email Address:"}
                  onChange={updateState}
                />
                <div className="d-flex registeInputs">
                  <InputField
                    typeOfInput="text"
                    half={true}
                    lableText={"Username"}
                    name="username"
                    onChange={updateState}
                  />
                  <InputField
                    typeOfInput="tel"
                    half={true}
                    lableText={"Mobile Number"}
                    name="phone"
                    onChange={updateState}
                  />
                </div>
                <div className="d-flex registeInputs">
                  <InputField
                    typeOfInput="text"
                    half={true}
                    lableText={"Password"}
                    name="password"
                    onChange={updateState}
                  />
                  <InputField
                    typeOfInput="text"
                    half={true}
                    lableText={"Confirm Password"}
                    name="cpassword"
                    onChange={updateState}
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
                  <ButtonItself btnPurpose={"Sign Up"}  />
                </div>
              </Form>
            </div>
            <SocialLogins login={false} purpose={"Sign Up"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
