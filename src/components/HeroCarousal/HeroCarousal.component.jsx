import React from "react";
import HeroSlider from "react-slick"


//Arrow components
import { NextArrow,PrevArrow } from "./Arrows.component";


const HeroCarousal = () => {
    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed:500,
        infinite: true,
        centerPadding: "300px",
        nextArrow:<NextArrow/>,
        prevArrow:<NextArrow/>,
    }
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<NextArrow/>,
    };
    const images = [
        "https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1618824834718-92f8469a4dd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=812&q=80",
        "https://images.unsplash.com/photo-1633371824243-d84b605958f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    ]
    return (
        <>

            <div className="lg:hidden">
                <HeroSlider{...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full h-64 ms:h-64 py-3 ">
                                <img src={image} alt="testing" className="w-full rounded-md h-full" />
                            </div>
                        )
                        )
                    }

                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider{...settingsLg}>
                    {
                        images.map((image) => (
                            <div className="w-full h-96 py-3 px-2">
                                <img src={image} alt="testing" className="w-full rounded-md h-full" />
                            </div>
                        )
                        )
                    }

                </HeroSlider>
            </div>










        </>
    );
};

export default HeroCarousal;



