
import React from 'react'
import {Button} from 'react-bootstrap'
import "./UploadButton.css"

function Upload_Button() {
    const ButtonHandler=()=>{
        console.log("your file has been uploaded")
    }
    return (
        <div className="upButton">
            <Button type="submit" onClick={ButtonHandler} className="upldbtn">Upload</Button>
            
        </div>
    )
}

export default Upload_Button
