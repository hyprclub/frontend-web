import React from 'react'
import { Button } from 'react-bootstrap'
import './postButton.css';

const PostButton = () => {
    return (
        <div>
            <Button className='postBtn'> <span className='btnName'>Post</span></Button>
        </div>
    )
}

export default PostButton
