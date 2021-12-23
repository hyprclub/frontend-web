import clsx from 'clsx';
import React from 'react';
import './socials.css';

interface Purpose {
    purpose: string,
    login: boolean
}

const SocialLogins = ({login,purpose}: Purpose) => {
    return (
        <div className={clsx(' mt-4 justify-content-center mb-3', login ? 'd-flex flex-column align-items-center' : "d-flex flex-row")}>
            <div className={clsx(" m-1 ", login ? 'col-md-5 register' : "Login")}>
                <img className='me-3 googleImg' src="images/Google.png" alt="google" />
                <p className='socialLoginText'>{purpose} with Google</p>
            </div>
            <div className={clsx(" m-1 ", login ? 'col-md-5 register' : " Login")}>
                <img className='me-3 googleImg fb' src="images/Facebook.png" alt="google" />
                <p className='socialLoginText'>{purpose} with Facebook</p>
            </div>
        </div>
    )
}

export default SocialLogins
