import clsx from 'clsx';
import React from 'react'
import { Button } from 'react-bootstrap'
import './postButton.css';

interface Btn{
    btnText: string
    small: boolean
}
const PostButton = ({btnText, small}:Btn) => {
    return (
        <div>
            <Button className='postBtn'> <span className={clsx('btnName', small && "smallText")}>{btnText}</span></Button>
        </div>
    )
}

export default PostButton
