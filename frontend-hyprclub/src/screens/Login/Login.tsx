/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ButtonItself from '../../components/loginSignUpBtn/ButtonItself';
import InputField from '../../components/inputField/Input';
import Logo from '../../components/logo/Logo';
import SocialLogins from '../../components/socialLogins/SocialLogins';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => { 

    const [change, setChange] = useState('')
    console.log(change);
    
    return (
        <div>
          <Logo/>
            <div className="container loginPage">
                <div className='d-flex justify-content-center'>
                    <div className="loginForm">
                        <h1 className="loginHeaderText">Join the Next Big Social Revolution</h1>
                        <p className='subtitleText'>New to HyprClub? <span className="createAccount"> <Link to="/register" className='link'>Create Account</Link> </span></p>
                            <Form action='#'>
                                    <InputField onChange={()=> console.log('ok')} typeOfInput='text' half={false} lableText={"Email Address/ Username"}/>
                                    <InputField typeOfInput='password' half={false} lableText={"Password"}/>
                                    <p className="forgotPassword"><a href="#" className='link'>Forgot Password?</a></p>
                                <ButtonItself onClick={() => console.log('hii')} btnPurpose={"Login"}/>
                            </Form>
                            <div className='social'>
                             <SocialLogins loginGoogle={() => console.log('log in with google')} loginFacebook={()=> console.log('log in with facebook')} login={true} purpose={"Login"}/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
