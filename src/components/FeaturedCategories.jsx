import Burger from "/burgur.png";
import OrganicKiwi from "/kiwi.png";
import Peach from "/peach.png";
import RedApple from "/apple.png";
import Snack from "/snack.png";
import Vegetables from "/veg.png";
import Strawberry from "/berry.png";
import BlackPlum from "/plum.png";
import Custardapple from "/custard-apple.png";
import CoffeeTea from "/coffee-tea.png";
import Headphone from "/headphone.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import CatBanner1 from '/cat-banner-01.png'
import CatBanner2 from '/cat-banner-02.png'
import CatBanner3 from '/cat-banner-03.png'
import { IoIosArrowRoundForward } from "react-icons/io";

const FeaturedCategories = () => {
    const catSlides = [
        {
            id: 1,
            title: "Cake & Milk",
            qty: "24 items",
            img: Burger,
        },
        {
            id: 2,
            title: "Organic Kiwi",
            qty: "28 items",
            img: OrganicKiwi,
        },
        {
            id: 3,
            title: "Peach",
            qty: "14 items",
            img: Peach,
        },
        {
            id: 4,
            title: "Red Apple",
            qty: "54 items",
            img: RedApple,
        },

        {
            id: 5,
            title: "Snack",
            qty: "56 items",
            img: Snack,
        },
        {
            id: 6,
            title: "Vegetables",
            qty: "72 items",
            img: Vegetables,
        },
        {
            id: 7,
            title: "Strawberry",
            qty: "36 items",
            img: Strawberry,
        },
        {
            id: 8,
            title: "Custard apple",
            qty: "45 items",
            img: Custardapple,
        },
        {
            id: 9,
            title: "Black Plum",
            qty: "123 items",
            img: BlackPlum,
        },
        {
            id: 10,
            title: "Coffees & Teas",
            qty: "18 items",
            img: Burger,
        },
        {
            id: 11,
            title: "Coffee & Tea",
            qty: "30 items",
            img: CoffeeTea,
        },
        {
            id: 12,
            title: "Headphones",
            qty: "12 items",
            img: Headphone,
        },
    ];

    const catBanners = [
        {
            id: 1,
            img: CatBanner1,
            title: 'Everyday Fresh & Clean with Our Products',
        },
        {
            id: 2,
            img: CatBanner2,
            title: 'Make your Breakfast Healthy and Easy',
        },
        {
            id: 3,
            img: CatBanner3,
            title: 'The best Organic Products Online',
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8, // Show more slides on large screens
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow isFeatured={true} />,
        prevArrow: <PrevArrow isFeatured={true} />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6, // More reasonable than 10
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5, // More reasonable than 10
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768, // Adjusted for tablets
                settings: {
                    slidesToShow: 4, // Display 3 items
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3, // Display 2 items on smaller screens
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2, // Display only 1 item on very small screens
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className="mt-[55px] mb-50px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-y-5 gap-x-7 items-baseline">
                        <h2 className="font-bold text-[32px] leading-[38px]">Featured Categories</h2>
                        <div>
                            <ul className="flex gap-x-7 items-center flex-wrap font-semibold">
                                <li className="w-max">Cake & Milk</li>
                                <li className="w-max">Coffees & Teas</li>
                                <li className="w-max">Pet Foods</li>
                                <li className="w-max">Vegetables</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-[43px] mb-[23px] w-full">
                        <Slider {...settings} className="cat-slide pb-5">
                            {catSlides.map((slide) => (
                                <div key={slide.id} className="h-[180px] flex flex-col text-center bg-[#FEEFEA] rounded-[10px] p-4 border border-[#F4F6FA] cursor-pointer hover:drop-shadow-md transition-shadow ease-in-out duration-200 group hover:border-green-200">
                                    <img src={slide.img} alt={slide.title} className="w-full h-[87px] object-contain" />
                                    <h4 className="mb-1 font-bold leading-[20px] group-hover:text-greeny">{slide.title}</h4>
                                    <span className="text-[#7E7E7E] text-sm">{slide.qty}</span>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="hidden sm:flex justify-between gap-5">
                        {catBanners.map((banner, index) => {
                            return (
                                <div key={index} className={`
                                    relative group cursor-pointer w-full
                                    ${index > 1 ? "md:block hidden" : ""}
                                    ${index > 0 ? "lg:block hidden" : ""}
                                `}>
                                    <img src={banner.img} alt={banner.title} className="w-full" />
                                    <div className="absolute top-[15%] md:top-14 lg:top-11 lg:left-11 2xl:top-14 2xl:left-14 md:left-14 left-[15%]">
                                        <h3 className="font-bold text-2xl md:text-xl leading-8 md:leading-6 md:mb-4 mb-5 max-w-[280px] md:max-w-[240px] group-hover:translate-y-[-5px] transform transition-transform ease-in-out duration-300">{banner.title}</h3>
                                        <button className="px-3 py-2 bg-greeny text-white flex items-center gap-x-1 rounded-sm font-bold text-xs leading-[16px] tracking-[0.5px]">Shop Now <IoIosArrowRoundForward /></button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedCategories;
