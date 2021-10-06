import React from 'react'
import Poster from '../Poster/Poster.component';
import Slider from 'react-slick';

 const Premier = () => {

    
        const settings = {
            infinity: false,
            autoplay: false,
            slidesToShow: 5,
            slidesToScroll: 2,
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
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  InitialSlide: 1,
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
          const PremierImages =[
              {
                  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-hjlghlgrkh-portrait.jpg",
                  alt:"zack",
                  titile:"zacl",
                  subtitle:"english",
              },
              {
                  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-hjlghlgrkh-portrait.jpg",
                  alt:"zack",
                  titile:"zacl",
                  subtitle:"english",
              },
              {
                  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-hjlghlgrkh-portrait.jpg",
                  alt:"zack",
                  titile:"zacl",
                  subtitle:"english",
              },
              {
                  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-hjlghlgrkh-portrait.jpg",
                  alt:"zack",
                  titile:"zacl",
                  subtitle:"english",
              },
              {
                  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-hjlghlgrkh-portrait.jpg",
                  alt:"zack",
                  titile:"zacl",
                  subtitle:"english",
              },
              {
                  src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-hjlghlgrkh-portrait.jpg",
                  alt:"zack",
                  titile:"zacl",
                  subtitle:"english",
              },
          ];
    
    return (
        <>
        <div className="flex flex-col items start">
            <h3 className="text-white text-xl">Premiers</h3>
            <p className="text-white text-sm">Brand new release every friday</p>
        </div>
        <Slider { ...settings}>
            {PremierImages.map((image)=>(
                <Poster{ ...image} isdark/>
            ))}
        </Slider>
        </>
    );
};
export default Premier;
