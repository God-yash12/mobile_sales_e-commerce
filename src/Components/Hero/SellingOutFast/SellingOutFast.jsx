import React, { useState } from 'react';
import Slider from 'react-slick';
import Card from './SellingOutFastCard';

const SellingOutFast = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max Refurbished',
      image: 'https://macsupportnepal.net/uploads/posts/jjuyugh1701243552.jpg',
      price: 114999,
      originalPrice: 176908,
      emi: 5576,
      discount: 35,
    },
    {
      id: 2,
      name: 'Google Pixel 6a - Refurbished',
      image: 'https://i5.walmartimages.com/seo/Google-Pixel-6-128GB-GB7N6-Factory-Unlocked-8GB-RAM-Smartphone-Sorta-Seafoam_04252aa4-00b0-4844-b803-3eaeb0fc7fc3.be79d2ebfaa3a0278b612c0bb2de2056.jpeg',
      price: 21999,
      originalPrice: 30450,
      emi: 1067,
      discount: 28,
    },
    {
      id: 3,
      name: 'Apple iPhone 12 Pro - Refurbished',
      image: 'https://i5.walmartimages.com/seo/Apple-iPhone-12-Pro-Max-128GB-256GB-512GB-All-Colors-Factory-Unlocked-Cell-Phone-Good-Condition_64dd8b32-38ca-429b-b31f-aa5fc753d710.905f33e803ed9a90aceea6c5caff466b.jpeg',
      price: 41499,
      originalPrice: 119900,
      emi: 2012,
      discount: 65,
    },
    {
      id: 4,
      name: 'Google Pixel 7 - Refurbished',
      image: 'data:image/jpeg;base64,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',
      price: 34999,
      originalPrice: 99700,
      emi: 1697,
      discount: 65,
    },
    {
      id: 5,
      name: 'Google Pixel 4 - NON ACTIVATED (UNBOX)',
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/191020212951-1-underscored-google-pixel-4-review.jpg?q=x_0,y_213,h_1288,w_2289,c_crop/h_653,w_1160/f_webp',
      price: 15499,
      originalPrice: 54990,
      emi: 751,
      discount: 72,
    },
    {
        id: 6,
        name: 'Samsung Galaxy S21 Ultra Refurbished',
        image: 'https://i5.walmartimages.com/seo/Like-New-Samsung-Galaxy-S21-5G-SM-G991U1-128GB-Pink-US-Model-Factory-Unlocked-Cell-Phone_268fd090-9e5d-4287-98f8-4ad4ac93de54.71fd3099cec626bd02fc726424299241.jpeg',
        price: 78999,
        originalPrice: 105999,
        emi: 3876,
        discount: 25,
      },
      {
        id: 7,
        name: 'OnePlus 9 Pro Refurbished',
        image: 'https://m.media-amazon.com/images/I/61smwbhzBML._AC_SL1500_.jpg',
        price: 54999,
        originalPrice: 72999,
        emi: 2709,
        discount: 24,
      },
      {
        id: 8,
        name: 'Sony Xperia 1 II Refurbished',
        image: 'https://m.media-amazon.com/images/I/61oH+GQgRPL._AC_SL1500_.jpg',
        price: 65999,
        originalPrice: 89999,
        emi: 3209,
        discount: 27,
      },
      {
        id: 9,
        name: 'Huawei P40 Pro Refurbished',
        image: 'https://m.media-amazon.com/images/I/61u6jqTncaL._AC_SL1000_.jpg',
        price: 61999,
        originalPrice: 85999,
        emi: 3009,
        discount: 28,
      },
      {
        id: 10,
        name: 'LG Wing Refurbished',
        image: 'https://images-cdn.ubuy.co.in/63eea051d54b991124309673-lg-wing-5g-256-gb-gray-t-mobile.jpg',
        price: 46999,
        originalPrice: 69999,
        emi: 2299,
        discount: 33,
      },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 2950,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 mb-8">
      <div className="flex justify-center items-center gap-3 mb-6 pb-4">
        <img src="/src/assets/star.png" alt="" className="w-8 h-8" />
          <h2 className="text-3xl sm:lg md:2xl font-semibold text-center">Selling Out Fast</h2>
        <img src="/src/assets/star.png" alt="" className="w-8 h-8" />
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <Card product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SellingOutFast;
