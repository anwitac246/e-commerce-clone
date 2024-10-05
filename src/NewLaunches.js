import React from "react";
import Slider from 'react-slick';

  
export const NewLaunches = () => {
    const newLaunches = [
        {
          id: 1,
          title: "Retinal 0.2% Liposomal Cream",
          price: "Rs. 1499",
          img: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/RetinalMain.png?crop=center&height=960&v=1726575610&width=640",
          desc: "Fine Lines, Wrinkles & Uneven Texture"
        },
        {
          id: 2,
          title: "HOCL Skin Relief Spray 150 ppm",
          price: "Rs. 395",
          img: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/HOCLmain.png?crop=center&height=960&v=1723179268&width=640",
          desc: "Skin irritation"
        },
        {
          id: 3,
          title: "Zinc Oxide + B5 Healing Ointment",
          price: "Rs. 399",
          img: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/BabyOintmentTexture.png?crop=center&height=960&v=1721632255&width=640",
          desc: "Prevents skin irritation & diaper rash"
        },
        {
          id: 4,
          title: "Provitamin D3 Massage Oil",
          price: "Rs. 599",
          img: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/MassageOilNew.png?crop=center&height=960&v=1721398127&width=640",
          desc: "Nourishes and soothes baby's delicate skin"
        },
        
      ];
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3, // Show 3 items at a time
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024, // Tablet and small screens
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 600, // Mobile screens
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        };
        return (
            <div className="new-launches-container">
              <h1 className="section-title">New Launches</h1>
              <Slider {...settings}>
                {newLaunches.map((launch) => (
                  <div key={launch.id} className="launch-item">
                    <img src={launch.img} alt={launch.title} className="launch-img" />
                    <h3 className="launch-title">{launch.title}</h3>
                    <p className="launch-desc">{launch.desc}</p>
                    <p className="launch-price">{launch.price}</p>
                    <button className="launch-btn">Add to Cart</button>
                  </div>
                ))}
              </Slider>
            </div>
          );
};
