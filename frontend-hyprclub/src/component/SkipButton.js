import React from 'react'
import "./SkipButton.css"

function SkipButton({name, type, onClick}) {
    return (
        <button className="SkipButton" type={type} onClick={onClick}>
            <p>{name}</p>
        </button>
    )
}

export default SkipButton
