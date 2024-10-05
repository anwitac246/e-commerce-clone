
import React from "react";
import Slider from "react-slick";
import ProductItem from "./ProductItem";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const products = [
  {
    id: 1,
    name: "Salicylic Acid + LHA 2% Cleanser",
    price: "Rs. 249",
    img: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/SalicylicCleanserNew.jpg?crop=center&height=540&v=1721379190&width=360",
    desc: "Acne, Breakouts & Oiliness"

  },
  {
    id: 2,
    name: "SPF 50 Sunscreen",
    price: "Rs. 399",
    img: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/SPF50New.jpg?crop=center&height=1260&v=1721379190&width=840",
    desc: "Sun Protection, UV damage/exposure"
  },
  {
    id: 3,
    name: "Salicylic Acid 2% Face Serum",
    price: "Rs. 545",
    img: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/products/SalicylicAcid2_1200-1-min.png?crop=center&height=540&v=1646458899&width=360",
    desc: "Acne, Oily Skin, Blackheads & Irritation"
  },
  {
    id: 4,
    name: "Vitamin C 10% Face Serum",
    price: "Rs. 695",
    img: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/products/VitaminC10_1200-1-min.png?crop=center&height=540&v=1646543848&width=360",
    desc: "Dullness, spots & Loss of Elasticity"
  },
  {
    id: 5,
    name: "Niacinamide 10% Face Serum",
    price: "Rs. 599",
    img: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/Nia10New.png?v=1721398127&width=480",
    desc: "Acne marks, Acne prone & Oily Skin"
  },
  {
    id: 6,
    name: "Vitamin B5 10% Moisturiser",
    price: "Rs. 329",
    img: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/products/B5Moisturizer1200-2-min.png?crop=center&height=540&v=1646580727&width=360",
    desc: "Damaged Barrier, Oily & Dehydrated"
  },
];

const BestSellers = () => {
 
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="best-sellers">
      <h2 className="section-title">Our Best Sellers</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Slider>
    </section>
  );
};

export default BestSellers;
