import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Convince = () => {
    const reasons = [
        {
            image: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/transparency.png?crop=center&height=64&v=1709367756&width=64",
            title: "Transparency",
            desc: "Full disclosure of the ingredients used & their concentration"
        },
        {
            image: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/medical-research-256_1.png?v=1708782298&width=192",
            title: "Efficacy",
            desc: "Formulations developed in our in-house laboratories"
        },
        {
            image: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/download.png?crop=center&height=64&v=1709206575&width=64",
            title: "Affordable",
            desc: "Skincare, accessible to all"
        },
        {
            image: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/globe.png?v=1709367803&width=192",
            title: "Only the best",
            desc: "Ingredients sourced from across the world"
        }
    ];

    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, 
        responsive: [
          
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 248,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

    return (
        <div className='convince'>
            <h1>The future of personal care is here</h1>
            <p>Embrace Minimalist, where each element is chosen for its scientific merit, offering you authentic, effective skincare solutions.</p>

            <br /><br /><br />
             
            
                <div className="convince-card">
                    <Slider {...settings}>
                        {reasons.map((reason) => (
                            <div key={reason.title} className="card">
                                <img src={reason.image} alt={reason.title} />
                                <h2>{reason.title}</h2>
                                <p>{reason.desc}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            
                
            
        </div>
    );
};
