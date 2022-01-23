/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ButtonItself from '../../components/loginSignUpBtn/ButtonItself';
import InputField from '../../components/inputField/Input';
import Logo from '../../components/logo/Logo';
import SocialLogins from '../../components/socialLogins/SocialLogins';
import './login.css';
import { Link } from 'react-router-dom';
import { Key } from 'phosphor-react';

const Login = () => { 

    const [change, setChange] = useState('')
    console.log(change);

    const [forgotPass, setForgotPass] = useState(false);
    
    return (
        <div>
          <Logo/>
            <div className="container loginPage">
                <div className='d-flex justify-content-center'>
                    {!forgotPass && <div className="loginForm">
                        <h1 className="loginHeaderText">Join the Next Big Social Revolution</h1>
                        <p className='subtitleText'>New to HyprClub? <span className="createAccount"> <Link to="/register" className='link'>Create Account</Link> </span></p>
                            <Form action='#'>
                                    <InputField onChange={()=> console.log('ok')} typeOfInput='text' half={false} lableText={"Email Address/ Username"}/>
                                    <InputField typeOfInput='password' half={false} lableText={"Password"}/>
                                    <p className="forgotPassword"><a onClick={() => setForgotPass(true)} className='link'>Forgot Password?</a></p>
                                    <ButtonItself arrow onClick={() => console.log('hii')} btnPurpose={"Login"}/>
                            </Form>
                            <div className='social'>
                             <SocialLogins loginGoogle={() => console.log('log in with google')} loginFacebook={()=> console.log('log in with facebook')} login={true} purpose={"Login"}/>
                            </div>
                    </div>}

                    {forgotPass && <div className="forgotPasswordDiv">
                        <i onClick={()=> setForgotPass(false)} className="leftArr bi bi-arrow-left"></i>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <Key className='key' size={64} weight="bold" />
                                <h3 className='forgotPasstext text-center'>Forgot Password?</h3>
                                <p className='text-center'>Dont worry, it happens! Please enter your registered email and we will send you a link to reset your password.</p>
                                <form className='w-100' action="#">
                                    <InputField required lableText='ENTER EMAIL ID' typeOfInput='email' garyBold placeholder='example@hyprclub.com'/>
                                    <ButtonItself className='my-4 p-2'  full onClick={() => console.log('hii')} btnPurpose={"Reset Password"}/>
                                </form>
                            </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Login;
