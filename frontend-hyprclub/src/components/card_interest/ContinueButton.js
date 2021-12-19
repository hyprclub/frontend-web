import React from 'react'
import"./ContinueButton.css"

function ContinueButton({name,type,onClick}) {
    return (
        <button className="continue" onClick={onClick} type={type}>
            <p> {name} </p>
        </button>
    )
}

export default ContinueButton