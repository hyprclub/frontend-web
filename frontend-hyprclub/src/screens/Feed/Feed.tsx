import React from 'react'
import FeedLeft from '../../components/feedComponents/feedLeft/FeedLeft'
import FeedMiddle from '../../components/feedComponents/feedMiddle/FeedMiddle'
import FeedRight from '../../components/feedComponents/feedRight/FeedRight'
import Header_login from '../../components/header/header_after_login/Header_login'
import './feed.css'

const Feed = () => {
    return (
        <div>
            <Header_login/>
            <div className='feed'>
                {/* <div className=" "> */}
                    <div className="row">
                        <div className="col-md-3">
                            <FeedLeft/>
                        </div>
                        <div className="col-md-6">
                            <FeedMiddle/>
                        </div>
                        <div className="col-md-3">
                            <FeedRight/>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Feed
