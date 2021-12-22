import React from 'react'
import './singlePost.css'

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="imgAndNameAndUserName d-flex align-items-center">
                <img className='profilePic' src="images/koreanImg.png" alt="" />
                <div className='ms-4 d-flex justify-content-between w-100'>
                    <div>
                        <p className='name'>Kim Tae Hyung</p>
                        <p className="username">@kimtaehyung</p>
                    </div>
                        <p className="daysago">2d</p>
                </div>
            </div>

            <div className="caption">
                Spent all of Sat playing basketball, thanks <span className='tagPeople'>@hansohee</span> for taking photos
            </div>

            <div className="photos d-flex">
                <img className='photo photo1' src="images/photo_hero_1.png" alt="" />
                <img className='photo photo2' src="images/photo_hero_2.png" alt="" />
            </div>

            <div className="reactions d-flex align-items-center justify-content-between">
                <div className="icons d-flex ">
                    <img src="images/Fire.png" className='fireIcon' alt="" />
                    <i className="bi bi-bookmark"></i>
                </div>

                <div className="comments d-flex align-items-center">
                    <p className='noOfComments'>3093 comments</p>
                    <div className='commentImages position-relative'>
                        <img className='commentImage position-absolute' src="images/koreanImg.png" alt="" />
                        <img className='commentImage  position-absolute' src="images/photo_hero_2.png" alt="" />
                        <img className='commentImage' src="images/photo_hero_1.png" alt="" />
                    </div>
                </div>
            </div>


            <div className="commentBox position-relative">
                <input type="text" className="form-control inputText" placeholder="Post a Comment" aria-describedby="basic-addon1"/>
                <i className="bi bi-keyboard-fill position-absolute"></i>
            </div>


        </div>
    )
}

export default SinglePost
