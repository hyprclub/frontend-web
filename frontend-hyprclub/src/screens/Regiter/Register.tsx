/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Form } from "react-bootstrap";
import ButtonItself from "../../components/loginSignUpBtn/ButtonItself";
import InputField from "../../components/inputField/Input";
import Logo from "../../components/logo/Logo";
import SocialLogins from "../../components/socialLogins/SocialLogins";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
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
              <Form action="#">
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
                  half={false}
                  lableText={"Email Address:"}
                />
                <div className="d-flex registeInputs">
                  <InputField
                    typeOfInput="text"
                    half={true}
                    lableText={"Username"}
                  />
                  <InputField
                    typeOfInput="tel"
                    half={true}
                    lableText={"Mobile Number"}
                  />
                </div>
                <div className="d-flex registeInputs">
                  <InputField
                    typeOfInput="text"
                    half={true}
                    lableText={"Password"}
                  />
                  <InputField
                    typeOfInput="text"
                    half={true}
                    lableText={"Confirm Password"}
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
                    I would like to recieve promotional emails from HyprClub
                  </label>
                </div>
                <div className="mt-3">
                  <Link to="/follow">
                    <ButtonItself arrow btnPurpose={"Sign Up"} />
                  </Link>
                </div>
              </Form>
            </div>
            <SocialLogins registerGoogle={() => console.log('register with google')} registerFacebook={()=> console.log('register with facebook')} login={false} purpose={"Sign Up"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
