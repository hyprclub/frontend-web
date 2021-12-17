import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import './follow.css'

const Follow = () => {
    const [following, setFollowing] = useState(false);

    return (
        <div>
            <Button onClick={()=> setFollowing(!following)} className={following? "following" : "follow"}> <span className='btnName'> {following ? "Following" : "Follow"}</span></Button>
        </div>
    )
}

export default Follow
