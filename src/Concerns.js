import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Concerns = () =>{
    const concernsData = [
        {
          id: 1,
          imgSrc: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Acne-min.png?crop=center&height=315&v=1710248322&width=420",
          title: "Acne Control",
        },
        {
          id: 2,
          imgSrc: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Uneven_Tone_or_Pigmentation-min.png?crop=center&height=315&v=1710248322&width=420",
          title: "Uneven Tone",
        },
        {
          id: 3,
          imgSrc: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Oiliness-min.png?crop=center&height=315&v=1710248324&width=420",
          title: "Oiliness",
        },
        {
          id: 4,
          imgSrc: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Fine_Lines_Wrinkles-min.png?crop=center&height=315&v=1710248319&width=420",
          title: "Fine Lines/Wrinkles",
        },
        {
          id: 5,
          imgSrc: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Dehydrated_Skin-min.png?crop=center&height=315&v=1710248323&width=420",
          title: "Dehydration",
        },
        {
          id: 6,
          imgSrc: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Hair_Fall-min.png?crop=center&height=315&v=1710248322&width=420",
          title: "Hair Fall",
        },
        {
            id: 7,
            imgSrc: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Dandruff.jpg?crop=center&height=315&v=1712740881&width=420",
            title: "Dandruff",
        }
      ];
      const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1, 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
      return (
        <div className="concerns-scroll-container">
      <h2 className="section-title">Shop by Concerns</h2>
      
      <div className="concerns-scroll">
      <Slider {...settings} className="concerns-scroll">
        {concernsData.map((concern) => (
          <div key={concern.id} className="concern-item">
            <img src={concern.imgSrc} alt={concern.title} />
            <p>{concern.title}</p>
          </div>
        ))}
      </Slider>
      </div>
     
    </div>
      );
}