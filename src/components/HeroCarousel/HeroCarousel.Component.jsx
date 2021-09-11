import React, { useState } from "react";
import HeroSlider from "react-slick";
// import { NextArrow, PrevArrow } from "./Arrows.Component";

function NextArrow(props) {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style }}
                onClick={props.onClick}
            />
        </>
    );
}

function PrevArrow(props) {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style }}
                onClick={props.onClick}
            />
        </>
    );
}

const HeroCarousel = () => {
    const [images, setImages] = useState([
        "https://in.bmscdn.com/promotions/cms/creatives/1630997301576_moviethailavi_incinemasthisfridayknowmore_webshowcase_1240x300_7sep.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1630909571292_shangchiunderthestars_pvrdrive_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1630951639039_chokhihavelitheurbanvillageexperience_webshowcase_1240x300_6sep.jpg",
    ]);

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "6%",
        slidesToShow: 1,
        dots: true,
        infinite: true,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        dots: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="md:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => {
                        return (
                            <div className="w-full h-56 md:h-80 px-1 py-3">
                                <img
                                    src={image}
                                    alt="HeroBanner"
                                    className="w-full h-full rounded-md object-center"
                                />
                            </div>
                        );
                    })}
                </HeroSlider>
            </div>

            <div className="hidden md:block">
                <HeroSlider {...settingsLG}>
                    {images.map((image) => {
                        return (
                            <div className="w-full h-96 px-2 py-3">
                                <img
                                    src={image}
                                    alt="HeroBanner"
                                    className="w-full h-full rounded-md object-center"
                                />
                            </div>
                        );
                    })}
                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousel;
