import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Star from "../../assets/star.png";

const data = [
    {
        id: 1,
        title: "Under",
        price: "RS 10000",
        link: "/under-10000",
    },
    {
        id: 2,
        title: "Under",
        price: "RS 20000",
        link: "/under-20000",
    },
    {
        id: 3,
        title: "Under",
        price: "RS 30000",
        link: "/under-30000",
    },
    {
        id: 4,
        title: "Under",
        price: "RS 40000",
        link: "/under-40000",
    },
    {
        id: 5,
        title: "Under",
        price: "RS 50000",
        link: "/under-50000",
    },
    {
        id: 6,
        title: "Under",
        price: "RS 60000",
        link: "/under-60000",
    },
    {
        id: 7,
        title: "Under",
        price: "RS 80000",
        link: "/under-80000",
    },
    {
        id: 8,
        title: "Under",
        price: "RS 100000",
        link: "/under-100000",
    },
];

const ShopByPocket = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="mx-3 mb-10 md:mb-20 mt-10">
            <div className="container">
            <div className="flex justify-center items-center gap-4 mb-20">
            <img src={Star} alt="" className='w-8 h-8 ' />
            <h1 className="text-3xl sm:lg md:2xl">
                Shop By Pocket
            </h1>
            <img src={Star} alt="" className='w-8 h-8' />
        </div>
                <div data-aos="zoom-in" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5 px-2">
                    {data.map((item, index) => (
                        <Link key={index} to={item.link} className="group">
                            <div
                                className="shadow-lg shadow-gray-500 mx-2 sm:mx-3-6 py-2 transition-all duration-200 transform group-hover:scale-125"
                                data-aos="zoom-in"
                            >
                                <h1 className="text-center text-[15px] sm:text-xl md:text-[15px] lg:text-[15px]  text-primary group-hover:text-[20px] transition-all duration-200">
                                    {item.title} 
                                </h1>
                                <p className="text-center text-lg sm:text-xl md:text-[15px] lg:text-[15px] text-primary group-hover:text-[20px] transition-all duration-300">
                                {item.price}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopByPocket;
