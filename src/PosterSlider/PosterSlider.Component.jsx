import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {
    const settings = {
        infinite: false,
        autoplay: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoints: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const {posters, title, subtitle, darkTheme} = props;

    return (
        <>
            <div className="flex flex-col items-start my-2">
                <h3
                    className={`text-2xl font-bold px-3 ${
                        darkTheme ? "text-white" : "text-black"
                    }`}
                >
                    {title}
                </h3>
                <p
                    className={`text-sm px-3 ${
                        darkTheme ? "text-white" : "text-gray-600"
                    }`}
                >
                    {subtitle}
                </p>
            </div>
            <Slider {...settings}>
                {posters.map((poster) => (
                    <Poster {...poster} darkTheme={darkTheme} />
                ))}
            </Slider>
        </>
    );
};

export default PosterSlider;
