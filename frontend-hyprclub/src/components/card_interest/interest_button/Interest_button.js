import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import "./Interest_button.css"

function Interest_button({id, name,src,srcClose}) {
    const [view, SetView]=useState(false);
    return (
        <Button id="btn" type="button" onClick={()=>SetView(!view)}  className={id}>
            {view&& <img src={srcClose} alt=""/>}
            <img src={src} alt=""/>
            <span>{name}</span>
        </Button>
    )
}

export default Interest_button
