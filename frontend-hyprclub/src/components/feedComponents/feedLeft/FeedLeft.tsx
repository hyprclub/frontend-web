import React from 'react'
import ButtonBorderSolid from '../buttonBorderSolid/ButtonBorderSolid'
import "./feedLeft.css"
import PageLink from './pageLinks/PageLink'

const FeedLeft = () => {
    return (
        <div className='feedLeft'>
            <div className="imgNameAndUserName d-flex flex-column justify-content-center">
                <div className='d-flex justify-content-center'>
                    <div className="imgWithPencil position-relative">
                        <img className='profilePic' src="images/pfImage.png" alt="pf" />
                        <i className="bi position-absolute pencilIcon bi-pencil-fill"></i>
                    </div>
                </div>
                <div className="nameAndUserName">
                    <h1 className='fullName'>Ishika Vikas</h1>
                    <p className="username">@ishikatheexplorer</p>
                </div>
                <div className="justButton d-flex justify-content-center">
                    <ButtonBorderSolid buttonText='Upgrade to Creator Account'/>
                </div>
                <div className="pageLinks">
                    <PageLink icon='bi-bookmark-fill bi' text='Bookmarks'/>
                    <PageLink icon='bi bi-gear-fill' text='Settings'/>
                </div>
            </div>
        </div>
    )
}

export default FeedLeft
