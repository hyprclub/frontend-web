import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Continue from '../continueBtn/Continue';
import "./CardInterest.css"
import SkipButton from '../skipbutton/SkipButton';
import BackButton from  '../backButton/BackButton'
import { Button } from 'react-bootstrap';


function Card_interest() {
    const  card___content=[
        {
            id:1,
            name:"Comedy",
            src:"./images/laughteremoji.png",
            srcclose:"./images/close.png"

        },
        {
            id:2,
            name:"Graphic Design",
            
            src:"./images/graphic_design.png",
            srcclose:"./images/close.png"

        },
        {
            id:3,
            name:"Music",
            src:"./images/music.png",
            srcclose:"./images/close.png"

        },
        {
            id:4,
            name:"Photography",
            src:"./images/photography.png",
            srcclose:"./images/close.png"

        },
        {
            id:5,
            name:"YouTube",
            src:"./images/youtube.png",
            srcclose:"./images/close.png"

        },
        {
            id:6,
            name:"Beauty",
            src:"./images/beauty.png",
            srcclose:"./images/close.png"

        },
        {
            id:7,
            name:"Gaming",
            src:"./images/gaming.png",
            srcclose:"./images/close.png"

        },
        {
            id:8,
            name:"Cryptocurrency",
            src:"./images/cryptocurrency.png",
            srcclose:"./images/close.png"

        },
        {
            id:9,
            name:"Technology",
            src:"./images/technology.png",
            srcclose:"./images/close.png"

        },
        {
            id:10,
            name:"Art",
            src:"./images/art.png",
            srcclose:"./images/close.png"


        },
        {
            id:11,
            name:"Sports",
            src:"./images/sport.png",
            srcclose:"./images/close.png"

        }
       

    ];

    let [selected, setSelected] = useState([])


    const click = (id) => {

        if (!selected.includes(id)) {
            if(selected.length < 5)
                setSelected([...selected, id])
          } else {
             setSelected(selected.filter((index) => index !== id))
          }
    }

    console.log(selected);

   
    return (
        <div className="card_body">
            <div id="back1">
            <Link to="#">
                <i className="bi arrowLeft bi-arrow-left"></i>
            </Link>
            </div>
            <div className="card_title">
             <h2>Tell Us About Your Interests</h2>
            </div>
            <div className="card_subtitle">
                <p>Let's get to know you a little more so we can tune your feed just right. <b>Choose any 5 interests:</b></p>
                </div>
            <div className="card_content">
               
                {card___content.map(data=>{
                    let sel = ''
                    if(selected.includes(data.id)){
                        sel = "borderBlack"
                    }

                    
                    return <Button onClick={() => click(data.id)} key={data.id} id="btn" type="button"  className={sel === "borderBlack" ? "borderBlack" : "buttonWhole"}>
                                { (sel === 'borderBlack') && <img src={data.srcclose} alt=""/>}
                                <img src={data.src} alt=""/>
                                <span>{data.name}</span>
                            </Button>

                })}
            </div>
            <div className="Card_continuebutton">

            <Continue />
            </div>
            <div className="Card_skipbutton">

            <SkipButton />
            </div>
            
        </div>
    )
}

export default Card_interest
