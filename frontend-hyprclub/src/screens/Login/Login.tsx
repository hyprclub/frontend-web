/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Form } from 'react-bootstrap';
import ButtonItself from '../../components/loginSignUpBtn/ButtonItself';
import InputField from '../../components/inputField/Input';
import Logo from '../../components/logo/Logo';
import SocialLogins from '../../components/socialLogins/SocialLogins';
import './login.css';

const Login = () => {
    return (
        <div>
            <div className="container loginPage">
                <Logo/>
                <div className='d-flex justify-content-center'>
                    <div className="loginForm">
                        <h1 className="loginHeaderText">Join the Next Big Social Revolution</h1>
                        <p className='subtitleText'>New to HyprClub? <span className="createAccount"> <a href="#" className='link'>Create Account</a> </span></p>
                            <Form action='#'>
                                    <InputField typeOfInput='text' half={false} lableText={"Email/ Username"}/>
                                    <InputField typeOfInput='text' half={false} lableText={"Password"}/>
                                    <p className="forgotPassword"><a href="#" className='link'>Forgot Password?</a></p>
                                <ButtonItself btnPurpose={"Login"}/>
                            </Form>
                                <SocialLogins login={true} purpose={"Login"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
