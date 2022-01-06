import React, { useState } from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Popular.module.css";
import Add from "./Add/Add";
import Dropdown from "../Dropdown/Dropdown"
import DropdownEmpty from "../DropdownEmpty/DropdownEmpty"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "phosphor-react";

const items = [
  {
    name: "Edd Harris",
    sign: "/images/content/cup.svg",
    number: "1",
    url: "/profile",
    color: "#3772FF",
    avatar: "/images/content/avatar-5.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Odell Hane",
    sign: "/images/content/donut.svg",
    number: "2",
    url: "/profile",
    color: "#9757D7",
    avatar: "/images/content/avatar-6.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Marlee Kuphal",
    sign: "/images/content/lightning.svg",
    number: "3",
    url: "/profile",
    color: "#45B26B",
    avatar: "/images/content/avatar-7.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Payton Kunde",
    sign: "/images/content/donut.svg",
    number: "4",
    url: "/profile",
    color: "#23262F",
    avatar: "/images/content/avatar-8.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Payton Buckridge",
    sign: "/images/content/donut.svg",
    number: "5",
    url: "/profile",
    color: "#777E90",
    avatar: "/images/content/avatar-9.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Edd Harris",
    sign: "/images/content/cup.svg",
    number: "1",
    url: "/profile",
    color: "#3772FF",
    avatar: "/images/content/avatar-5.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Odell Hane",
    sign: "/images/content/donut.svg",
    number: "2",
    url: "/profile",
    color: "#9757D7",
    avatar: "/images/content/avatar-6.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Marlee Kuphal",
    sign: "/images/content/lightning.svg",
    number: "3",
    url: "/profile",
    color: "#45B26B",
    avatar: "/images/content/avatar-7.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
];


const dateOptions = ["Today", "Morning", "Dinner", "Evening"];
const directionOptions = ["Sellers", "Buyers"];

const Popular = () => {
  
  const NextArrow = ({ onClick }) => {
    return (
      <div className={styles.nextArrow} onClick={onClick}>
        <ArrowRight size={20} id={styles.arrowRight} />
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <div className={styles.prevArrow} onClick={onClick}>
         <ArrowLeft size={20} id={styles.arrowLeft} />
      </div>
    );
  };
  const settings = {
    infinite: false,
    speed: 500,
    dots:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  const [date, setDate] = useState(dateOptions[0]);
  const [direction, setDirection] = useState(directionOptions[0]);

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.stage}> Check Out Our NFT Creators</div>
        <div className={styles.top}>
            
          <div className={styles.box}>
            <DropdownEmpty
              className={styles.dropdown}
              value={direction}
              setValue={setDirection}
              options={directionOptions}
            />
          </div>
          <div className={styles.field}>
            <div className={styles.label}>timeframe</div>
            <Dropdown
              className={styles.dropdown}
              value={date}
              setValue={setDate}
              options={dateOptions}
            />
          </div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="popular-slider" {...settings}>
            {items.map((x, index) => (
              <div className={styles.slide} key={index}>
                <div className={styles.item}>
                  <div className={styles.head}>
                    <div
                      className={styles.rating}
                      style={{ backgroundColor: x.color }}
                    >
                      <div className={styles.icon}>
                        <img src={x.sign} alt="Rating" />
                      </div>
                      <div className={styles.number}>#{x.number}</div>
                    </div>
                    <div className={styles.control}>
                      <Add className={styles.button} />
                      <Link className={styles.button} to={x.url}>
                      <ArrowUpRight size={24} id={styles.arrowUpRight} />
                      </Link>
                    </div>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.avatar}>
                      <img src={x.avatar} alt="Avatar" />
                      <div className={styles.reward}>
                        <img src={x.reward} alt="Reward" />
                      </div>
                    </div>
                    <div className={styles.name}>{x.name}</div>
                    <div
                      className={styles.price}
                      dangerouslySetInnerHTML={{ __html: x.price }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Popular;
