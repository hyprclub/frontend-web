import React from 'react'
import { useState } from 'react'
import ButtonBorderSolid from '../buttonBorderSolid/ButtonBorderSolid'
import SideProfile from '../sideProfile/SideProfile'
import "./feedLeft.css"
import PageLink from './pageLinks/PageLink'

const FeedLeft = () => {
    
    return (
        <div className=''>
            <div className="imgNameAndUserName d-flex flex-column justify-content-center feedLeft">
                {/* <div className='d-flex justify-content-center'>
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
                </div> */}
                <div className="pageLinks">
                    <div>
                        <div className='singlePageLinkDiv '>
                            <div className="singlePageLink borderRight">
                                <PageLink icon='bi bi-house-door-fill' text='Home'/>
                            </div>
                        </div>
                        <hr />
                    </div>


                    <div>
                        <div className='singlePageLinkDiv'>
                            <div className="singlePageLink">
                                <PageLink icon='bi bi-envelope-open-fill' text='Messages'/>
                            </div>
                        </div>
                        <hr />
                    </div>

                    

                    <div>
                        <div className='singlePageLinkDiv'>
                            <div className="singlePageLink">
                                <PageLink icon='bi bi-compass' text='Explore'/>
                            </div>
                        </div>
                        <hr />
                    </div>


                    <div>
                        <div className='singlePageLinkDiv'>
                            <div className="singlePageLink">
                                <PageLink icon='bi bi-shop' text='Marketplace'/>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <div className='singlePageLinkDiv'>
                            <div className="singlePageLink">
                                <PageLink icon='bi bi-gear-fill' text='Settings'/>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <SideProfile/>
        </div>
    )
}

export default FeedLeft
