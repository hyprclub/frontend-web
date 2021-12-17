/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Form } from 'react-bootstrap';
import ButtonItself from '../../components/loginSignUpBtn/ButtonItself';
import InputField from '../../components/inputField/Input';
import Logo from '../../components/logo/Logo';
import SocialLogins from '../../components/socialLogins/SocialLogins';
import './register.css';

const Register = () => {
    return (
        <div>
            <div className="container registerPage">
                <Logo/>
                <div className='d-flex justify-content-center'>
                    <div className="registerForm">
                        <h1 className="registerHeaderText">Join the Next Big Social Revolution</h1>
                        <p className='subtitleText'>Already have an account? <span className="createAccount"> <a href="#" className='link'>Log in here</a> </span></p>
                            <div className='mb-3'>
                                <Form action='#'>
                                    <div className='d-flex registeInputs'>
                                        <InputField  typeOfInput='text' half={true} lableText={"First Name"}/>
                                        <InputField  half={true} typeOfInput='text' lableText={"Last Name"}/>
                                    </div>
                                        <InputField typeOfInput='email' half={false} lableText={"Email Address:"}/>
                                    <div className='d-flex registeInputs'>
                                        <InputField typeOfInput='text' half={true} lableText={"Username"}/>
                                        <InputField typeOfInput='tel' half={true} lableText={"Mobile Number"}/>
                                    </div>
                                    <div className='d-flex registeInputs'>
                                        <InputField typeOfInput='text' half={true} lableText={"Password"}/>
                                        <InputField typeOfInput='text' half={true} lableText={"Confirm Password"}/>
                                    </div>
                                    <div className='d-flex checkBoxTexts align-items-center'>
                                        <input type="checkbox" /><label className='ms-2' htmlFor="">Yes, I agree to all the <a className='termsLink' href="#">Terms and Conditions</a></label>
                                    </div>
                                    <div className='d-flex checkBoxTexts align-items-center'>
                                        <input type="checkbox" /><label className='ms-2' htmlFor="">I would like to recieve promotional emails from HyprClub</label>
                                </div>
                            <ButtonItself btnPurpose={"Register"}/>

                                </Form>
                            </div>
                            <SocialLogins purpose={"Sign Up"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
