import React from 'react'
import PostButton from '../../postButton/PostButton'
import './selectPost.css'

const SelectPost = () => {
    return (
        <div>
            <div className="selectPost">
                <div className="profilepicAndInput d-flex ">
                    <img className='pfImage' src="images/pfImage.png" alt="pf" />
                    <div className='inputTextDiv'>
                        <input type="text" className="form-control inputText" placeholder="What’s the hype?" aria-label="Username" aria-describedby="basic-addon1"/>
                        <div className='icons d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <i className="bi bi-image-fill"></i>
                                <img src="images/GIFIcon.png" alt="" />
                                <i className="bi bi-link-45deg"></i>
                            </div>
                            <PostButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectPost
