import React from 'react'
import './pageLink.css'

interface Link {
    text: string,
    icon: string
}

const PageLink = ({ text, icon}: Link) => {
    return (
        <div className='d-flex pageLink align-items-center'>
            <i className={icon}></i>
            <p>{text}</p>
        </div>
    )
}

export default PageLink
