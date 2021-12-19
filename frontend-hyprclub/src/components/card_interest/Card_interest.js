import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Continue from '../continueBtn/Continue';
import "./Card_interest.css"

import SkipButton from '../skipbutton/SkipButton';
import BackButton from  '../backButton/BackButton'


function Card_interest() {
    const  card___content=[
        {
            id:"one",
            name:"Comedy",
            src:"./images/laughteremoji.png",
            srcclose:"./images/close.png"

        },
        {
            id:"two",
            name:"Graphic Design",
            
            src:"./images/graphic_design.png",
            srcclose:"./images/close.png"

        },
        {
            id:"three",
            name:"Music",
            src:"./images/music.png",
            srcclose:"./images/close.png"

        },
        {
            id:"four",
            name:"Photography",
            src:"./images/photography.png",
            srcclose:"./images/close.png"

        },
        {
            id:"five",
            name:"YouTube",
            src:"./images/youtube.png",
            srcclose:"./images/close.png"

        },
        {
            id:"six",
            name:"Beauty",
            src:"./images/beauty.png",
            srcclose:"./images/close.png"

        },
        {
            id:"seven",
            name:"Gaming",
            src:"./images/gaming.png",
            srcclose:"./images/close.png"

        },
        {
            id:"eight",
            name:"Cryptocurrency",
            src:"./images/cryptocurrency.png",
            srcclose:"./images/close.png"

        },
        {
            id:"nine",
            name:"Technology",
            src:"./images/technology.png",
            srcclose:"./images/close.png"

        },
        {
            id:"ten",
            name:"Art",
            src:"./images/art.png",
            srcclose:"./images/close.png"


        },
        {
            id:"eleven",
            name:"Sports",
            src:"./images/sport.png",
            srcclose:"./images/close.png"

        }
       

    ];
    const [view, setView]=useState(false)
    return (
        <div className="card_body">
            <div id="back1">
            <BackButton />
            </div>
            <div className="card_title">
             <h2>Tell Us About Your Interests</h2>
            </div>
            <div className="card_subtitle">
                <p>Let's get to know you a little more so we can tune your feed just right. <b>Choose any 5 interests:</b></p>
                </div>
            <div className="card_content">
                {card___content.map((data, index)=>(

                    <button  key={index} className={data.id} type="button" onClick={()=>(setView(!view))} >
                        {view && <img src={data.srcclose}/>}

                        <img  src={data.src} alt=""/ >
                            <span>{data.name}</span>
                            </button>
                      

                ))}
            </div>
            <div className="continuebutton">

            <Continue />
            </div>
            <div className="skipbutton">

            <SkipButton />
            </div>
            
        </div>
    )
}

export default Card_interest
