import { ArrowLeft, ArrowRight } from "phosphor-react";
import React from "react";
import Slider from "react-slick";
import styles from "./Collection.module.css";
 

const Collection = ({ item }: any) => {
    const NextArrow = ({ onClick }: any) => {
        return (
            <div className={styles.nextArrow} onClick={onClick}>
                <ArrowRight size={15} id={styles.arrowRight} />
            </div>
        );
    };

    const PrevArrow = ({ onClick }: any) => {
        return (
            <div className={styles.prevArrow} onClick={onClick}>
                <ArrowLeft size={15} id={styles.arrowLeft} />
            </div>
        );
    };
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true,
        adaptiveWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 836,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <>
            <div className={styles.section}>
                <Slider {...settings} >
                    {item.map((x: any, index: number) => (
                        <div className={styles.item} key={index}>
                            <div className={styles.circle} style={{ backgroundColor: x.color }} >
                                {x.icon}
                            </div>
                            <div className={styles.body}>
                                <span className={styles.Heading}>{x.title}</span>
                            </div>
                        </div>                        
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Collection;