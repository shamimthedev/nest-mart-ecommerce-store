import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import Rating from '@mui/material/Rating';
import { useEffect, useRef, useState } from "react";
import PrevArrow from "../components/PrevArrow";
import NextArrow from "../components/NextArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown, MdOutlineCompareArrows } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import ReviewAuthor01 from '/review-author-01.png'
import ReviewAuthor02 from '/review-author-02.png'
import ReviewAuthor03 from '/review-author-03.png'
import Product from "../components/Product";
import { productsData } from "../data/DB";
import Breadcrumb from "../components/Breadcrumb";
import { addToCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const [value, setValue] = useState(2);
  const [activeSize, setActiveSize] = useState(0)
  const [activeTab, setActiveTab] = useState(0)
  const productSlider = useRef()
  const productMainSlider = useRef()
  const dispatch = useDispatch();

  const [productSliderImgSize, setProductSliderImgSize] = useState([1500, 1500])
  const [productGalleryImgSize, setProductGalleryImgSize] = useState([150, 150])

  const isActive = (index) => {
    setActiveSize(index)
  }

  const goto = (index) => {
    productSlider.current.slickGoTo(index)
    productMainSlider.current.slickGoTo(index)
  }

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow isSingleProduct={true} />,
    prevArrow: <PrevArrow isSingleProduct={true} />,
    responsive: [
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: 5, // More reasonable than 10
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4, // More reasonable than 10
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // More reasonable than 10
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // More reasonable than 10
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };


  const { slug } = useParams(); // Get slug from URL

  // Find the product with the matching slug
  const product = productsData.find((item) => item.slug === slug);

  // Scroll to top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [quantity, setQuantity] = useState(1);

  // If product not found
  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <>
      <section className="">
        {/* Breadcrumb  */}
        <div className="">
          <Breadcrumb />
        </div>

        <div className="container">
          <div className="flex gap-6 overflow-hidden">

            {/* Product Details */}
            <div className="flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 mb-[50px]">

                {/* Product Image  */}
                <div className="">
                  <div className="w-[380px] sm:min-w-[380px] sm:max-w-[520px] mb-[30px] overflow-hidden border border-[#ECECEC] rounded-[15px] flex items-center justify-center">
                    <Slider {...settings2} className="overflow-hidden" ref={productMainSlider}>
                      <div className="w-full">
                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${productSliderImgSize[0], productSliderImgSize[1]})`} alt="" className="w-full h-full p-5 rounded-[15px] cursor-grab" />
                      </div>
                      <div className="w-full">
                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${productSliderImgSize[0], productSliderImgSize[1]})`} alt="" className="w-full h-full p-5 rounded-[15px] cursor-grab" />
                      </div>
                      <div className="w-full">
                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${productSliderImgSize[0], productSliderImgSize[1]})`} alt="" className="w-full h-full p-5 rounded-[15px] cursor-grab" />
                      </div>
                      <div className="w-full">
                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${productSliderImgSize[0], productSliderImgSize[1]})`} alt="" className="w-full h-full p-5 rounded-[15px] cursor-grab" />
                      </div>
                      <div className="w-full">
                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${productSliderImgSize[0], productSliderImgSize[1]})`} alt="" className="w-full h-full p-5 rounded-[15px] cursor-grab" />
                      </div>
                      <div className="w-full">
                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${productSliderImgSize[0], productSliderImgSize[1]})`} alt="" className="w-full h-full p-5 rounded-[15px] cursor-grab" />
                      </div>
                    </Slider>
                  </div>
                  <div className="overflow-hidden w-[380px] sm:min-w-[380px] sm:max-w-[520px]">
                    <Slider {...settings} className="product-slide" ref={productSlider}>
                      <div className="cursor-pointer overflow-hidden rounded-[17px] border border-transparent outline-none item">
                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${productGalleryImgSize[0], productGalleryImgSize[1]})`} alt="" className="w-[118px]" onClick={() => goto(0)} />
                      </div>
                      <div className="cursor-pointer overflow-hidden rounded-[17px] border border-transparent outline-none item">
                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${productGalleryImgSize[0], productGalleryImgSize[1]})`} alt="" className="w-[118px]" onClick={() => goto(1)} />
                      </div>
                      <div className="cursor-pointer overflow-hidden rounded-[17px] border border-transparent outline-none item">
                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${productGalleryImgSize[0], productGalleryImgSize[1]})`} alt="" className="w-[118px]" onClick={() => goto(2)} />
                      </div>
                      <div className="cursor-pointer overflow-hidden rounded-[17px] border border-transparent outline-none item">
                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${productGalleryImgSize[0], productGalleryImgSize[1]})`} alt="" className="w-[118px]" onClick={() => goto(3)} />
                      </div>
                      <div className="cursor-pointer overflow-hidden rounded-[17px] border border-transparent outline-none item">
                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${productGalleryImgSize[0], productGalleryImgSize[1]})`} alt="" className="w-[118px]" onClick={() => goto(4)} />
                      </div>
                      <div className="cursor-pointer overflow-hidden rounded-[17px] border border-transparent outline-none item">
                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${productGalleryImgSize[0], productGalleryImgSize[1]})`} alt="" className="w-[118px]" onClick={() => goto(5)} />
                      </div>
                    </Slider>
                  </div>
                </div>

                {/* Product Info */}
                <div className=" font-bold">
                  <button className="text-[#F74B81] text-sm leading-[14px] bg-[#FDE0E9] rounded-[5px] px-3 py-[6px] mb-[19px]">Sale Off</button>
                  <h1 className="mb-[19px] text-3xl 2xl:text-[40px] leading-9 2xl:leading-12 max-w-[448px]">Seeds of Change Organic Quinoa, Brown</h1>
                  <div className="mb-[34px] flex items-center gap-x-2">
                    <Rating name="read-only" value={value} readOnly />
                    <span className='text-[#B6B6B6] text-sm leading-6 font-lato'>(32 reviews)</span>
                  </div>
                  <div className="mb-[31px] flex gap-x-[15px] items-baseline relative">
                    <span className='text-[58px] leading-[58px] text-greeny '>$38</span>
                    <span className='text-[28px] leading-7 text-[#ADADAD] line-through'>$52</span>
                    <span className="font-semibold text-xs leading-[12px] text-[#FDC040] absolute left-[115px] top-3">26% Off</span>
                  </div>
                  <p className="mb-9 max-w-[466px] font-lato font-normal text-[17px] leading-6 text-[#7E7E7E] text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
                    odio minus dolore impedit fuga eum eligendi.</p>
                  <div className="mb-[34px] flex items-center gap-x-[10px] font-lato text-sm leading-6 text-[#7E7E7E]">
                    <span className="font-semibold">Size / Weight:</span>
                    <ul className="flex items-center">
                      <li className="leading-8 font-normal"><Link className={`px-3 py-2 rounded-[5px] tag ${activeSize === 0 ? 'bg-greeny text-white' : ""}`} onClick={() => isActive(0)}>50g</Link></li>
                      <li className="leading-8 font-normal"><Link className={`px-3 py-2 rounded-[5px] tag ${activeSize === 1 ? 'bg-greeny text-white' : ""}`} onClick={() => isActive(1)}>60g</Link></li>
                      <li className="leading-8 font-normal"><Link className={`px-3 py-2 rounded-[5px] tag ${activeSize === 2 ? 'bg-greeny text-white' : ""}`} onClick={() => isActive(2)}>80g</Link></li>
                      <li className="leading-8 font-normal"><Link className={`px-3 py-2 rounded-[5px] tag ${activeSize === 3 ? 'bg-greeny text-white' : ""}`} onClick={() => isActive(3)}>100g</Link></li>
                      <li className="leading-8 font-normal"><Link className={`px-3 py-2 rounded-[5px] tag ${activeSize === 4 ? 'bg-greeny text-white' : ""}`} onClick={() => isActive(4)}>150g</Link></li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-x-[9px]">
                    <div className="h-[50px] w-[90px] relative font-lato font-normal">
                      <input type="number" value={quantity} className="border-[2px] border-greeny rounded-[5px] outline-none w-full h-full px-7" />
                      <MdKeyboardArrowUp onClick={handleIncrease} className="absolute top-1 right-2 text-greeny cursor-pointer" />
                      <MdKeyboardArrowDown
                        onClick={handleDecrease}
                        className="absolute bottom-1 right-2 text-greeny cursor-pointer" />
                    </div>
                    <button className="h-[50px] w-[160px] flex items-center justify-center gap-x-[10px] text-white bg-greeny rounded-[5px] font-black leading-[50px] tracking-[0.5px] cursor-pointer" onClick={handleAddToCart}>
                      <IoCartOutline className="text-lg" />
                      Add to cart
                    </button>
                    <div className="hidden border border-[#F1F1F1] rounded-[5px] h-[50px] w-[50px] sm:flex items-center justify-center text-lg cursor-pointer text-[#333333]">
                      <IoMdHeartEmpty />
                    </div>
                    <div className="hidden border border-[#F1F1F1] rounded-[5px] h-[50px] w-[50px] sm:flex items-center justify-center text-lg cursor-pointer text-[#333333]">
                      <MdOutlineCompareArrows />
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Tab */}
              <div className="border border-[#ECECEC] rounded-[15px] px-3 py-4 xl:px-[51px] xl:py-41px]">
                <div className="">
                  <ul className="flex flex-wrap gap-3 mt-7 mb-[42px]">
                    <li className="px-[25px] py-3 border border-[#ECECEC] rounded-[30px] text-[17px] leading-[17px] font-bold transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm hover:text-greeny cursor-pointer"><button className={`cursor-pointer ${activeTab === 0 ? 'text-greeny' : ''}`} onClick={() => setActiveTab(0)}>Description</button></li>
                    <li className="px-[25px] py-3 border border-[#ECECEC] rounded-[30px] text-[17px] leading-[17px] font-bold transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm hover:text-greeny cursor-pointer"><button className={`cursor-pointer ${activeTab === 1 ? 'text-greeny' : ''}`} onClick={() => setActiveTab(1)}>Additional info</button></li>
                    <li className="px-[25px] py-3 border border-[#ECECEC] rounded-[30px] text-[17px] leading-[17px] font-bold transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm hover:text-greeny cursor-pointer"><button className={`cursor-pointer ${activeTab === 2 ? 'text-greeny' : ''}`} onClick={() => setActiveTab(2)}>Reviews (3)</button></li>
                  </ul>
                </div>

                {/* Description Tab Content  */}
                {
                  activeTab == 0 && (
                    <div className="">
                      <div className="mb-[33px] text-[#7E7E7E] font-lato leading-6">
                        <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced
                          goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
                        <br />
                        <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and
                          wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch
                          mastodon goodness gnashed a jellyfish and one however because.</p>
                      </div>
                      <div className="">
                        <h4 className="font-bold text-2xl leading-7 mb-4">Packaging & Delivery</h4>
                        <hr className="border-[#ECECEC] my-5" />
                        <div className="mb-[33px] text-[#7E7E7E] font-lato leading-6">
                          <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one
                            assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much
                            held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                          <br />
                          <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and
                            next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less
                            across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                        </div>
                      </div>
                      <div className="">
                        <h4 className="font-bold text-2xl leading-7 mb-4">Suggested Use</h4>
                        <hr className="border-[#ECECEC] my-5" />
                        <div className="mb-[33px] text-[#7E7E7E] font-lato leading-6">
                          <p>Refrigeration not necessary.</p>
                          <br />
                          <p>Stir before serving</p>
                        </div>
                      </div>
                      <div className="">
                        <h4 className="font-bold text-2xl leading-7 mb-4">Other Ingredients</h4>
                        <hr className="border-[#ECECEC] my-5" />
                        <div className="mb-[33px] text-[#7E7E7E] font-lato leading-6">
                          <p>Organic raw pecans, organic raw cashews.</p>
                          <br />
                          <p>This butter was produced using a LTG (Low Temperature Grinding) process</p>
                          <br />
                          <p>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>
                        </div>
                      </div>
                      <div className="mb-[41px]">
                        <h4 className="font-bold text-2xl leading-7 mb-4">Warnings</h4>
                        <hr className="border-[#ECECEC] my-5" />
                        <div className="text-[#7E7E7E] font-lato leading-6">
                          <p>Oil separation occurs naturally. May contain pieces of shell.</p>
                        </div>
                      </div>
                    </div>
                  )
                }

                {/* Additional info Tab Content  */}
                {
                  activeTab === 1 && (
                    <div className="">
                      <table className="mb-14 table-fixed border-spacing-2 border border-[#ECECEC] font-lato leading-6 text-[#7E7E7E] font-normal">
                        <tbody>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Stand Up</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Folded (w/o wheels)</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>32.5″L x 18.5″W x 16.5″H</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Folded (w/ wheels)</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>32.5″L x 24″W x 18.5″H</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Door Pass Through</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>24</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Frame</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>Aluminum</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Weight (w/o wheels)</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>20 LBS</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Weight Capacity</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>60 LBS</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Width</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>24″</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Handle height (ground to handle)</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>37-45″</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Wheels</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>12″ air / wide track slick tread</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Seat back height</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>21.5″</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Head room (inside canopy)</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>25″</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Color</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>Black, Blue, Red, White</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Size</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">
                              <p>M, S</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                  )
                }

                {/* Reviews Tab Content  */}
                {
                  activeTab === 2 && (
                    <div className="flex flex-col lg:flex-row justify-between">
                      {/* Q&A  */}
                      <div className="w-full xl:w-[60%]">
                        <h4 className="font-bold text-lg leading-7 mb-6">Customer questions & answers</h4>

                        {/* Review Card */}
                        <div className="mb-[30px] p-4 border border-[#ECECEC] rounded-[15px] transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm">
                          <div className="flex gap-x-5">
                            <div className="w-[20%]">
                              <img src={ReviewAuthor01} alt="" />
                              <span className="text-center block mt-2 text-greeny font-semibold">Sienna</span>
                            </div>
                            <div className="flex-1 group">
                              <div className="mb-4 flex items-center justify-between text-[#7E7E7E] text-sm font-lato leading-6">
                                <p className="text-xs">December 4, 2024 at 3:12 pm</p>
                                <Rating name="size-small" defaultValue={5} size="small" />
                              </div>
                              <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <span className="hidden text-greeny group-hover:inline-block"><Link to='#'>Reply</Link></span></p>
                            </div>
                          </div>
                        </div>
                        {/* Review Card */}
                        <div className="mb-[30px] p-4 border border-[#ECECEC] rounded-[15px] transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm">
                          <div className="flex gap-x-5">
                            <div className="w-[20%]">
                              <img src={ReviewAuthor02} alt="" />
                              <span className="text-center block mt-2 text-greeny font-semibold">Sienna</span>
                            </div>
                            <div className="flex-1 group">
                              <div className="mb-4 flex items-center justify-between text-[#7E7E7E] text-sm font-lato leading-6">
                                <p className="text-xs">December 4, 2024 at 3:12 pm</p>
                                <Rating name="size-small" defaultValue={5} size="small" />
                              </div>
                              <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <span className="hidden text-greeny group-hover:inline-block"><Link to='#'>Reply</Link></span></p>
                            </div>
                          </div>
                        </div>
                        {/* Review Card */}
                        <div className="p-4 border border-[#ECECEC] rounded-[15px] transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm">
                          <div className="flex gap-x-5">
                            <div className="w-[20%]">
                              <img src={ReviewAuthor03} alt="" />
                              <span className="text-center block mt-2 text-greeny font-semibold">Sienna</span>
                            </div>
                            <div className="flex-1 group">
                              <div className="mb-4 flex items-center justify-between text-[#7E7E7E] text-sm font-lato leading-6">
                                <p className="text-xs">December 4, 2024 at 3:12 pm</p>
                                <Rating name="size-small" defaultValue={5} size="small" />
                              </div>
                              <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <span className="hidden text-greeny group-hover:inline-block"><Link to='#'>Reply</Link></span></p>
                            </div>
                          </div>
                        </div>

                        {/* Write Review Box  */}
                        <div className="my-[75px]">
                          <form action="#">
                            <h3 className="font-bold leading-7 text-2xl mb-2">Add a review</h3>
                            <Rating name="size-small" defaultValue={0} size="small" />
                            <div className="mt-6 mb-4">
                              <textarea className="w-full h-[180px] p-4 border border-[#ECECEC] outline-none rounded-[10px]" name="comment" id="comment" placeholder="Write comment"></textarea>
                            </div>
                            <div className="mb-4 flex justify-between">
                              <input className="w-[48%] h-[60px] p-4 border border-[#ECECEC] outline-none rounded-[10px]" type="text" placeholder="Name" />
                              <input className="w-[48%] h-[60px] p-4 border border-[#ECECEC] outline-none rounded-[10px]" type="email" placeholder="Email" />
                            </div>
                            <div className="mb-6">
                              <input className="w-full h-[60px] p-4 border border-[#ECECEC] outline-none rounded-[10px]" type="text" placeholder="Website" />
                            </div>
                            <button className="rounded-[10px] bg-greeny text-white px-10 py-4 hover:bg-[#FDC040] transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm cursor-pointer">Submit Review</button>
                          </form>
                        </div>
                      </div>

                      {/* Reviews  */}
                      <div className="w-full xl:w-[37%]">
                        <h4 className="font-bold text-lg leading-7 mb-6">Customer reviews</h4>
                        <div className="mb-7 flex flex-col items-center gap-x-4 leading-6">
                          <Rating name="size-small" defaultValue={4} size="small" />
                          <p className="font-semibold">4.8 out of 5</p>
                        </div>
                        <div className="flex gap-x-4 mb-4">
                          <span className="text-[#7E7E7E] text-xs">5 star</span>
                          <div className="w-[85%] bg-gray-200 rounded-r-sm">
                            <div className="bg-greeny text-xs font-medium text-white text-center p-0.5 leading-none" style={{ 'width': '50%' }}> 50%</div>
                          </div>
                        </div>
                        <div className="flex gap-x-4 mb-4">
                          <span className="text-[#7E7E7E] text-xs">4 star</span>
                          <div className="w-[85%] bg-gray-200 rounded-r-sm">
                            <div className="bg-greeny text-xs font-medium text-white text-center p-0.5 leading-none" style={{ 'width': '25%' }}> 25%</div>
                          </div>
                        </div>
                        <div className="flex gap-x-4 mb-4">
                          <span className="text-[#7E7E7E] text-xs">3 star</span>
                          <div className="w-[85%] bg-gray-200 rounded-r-sm">
                            <div className="bg-greeny text-xs font-medium text-white text-center p-0.5 leading-none" style={{ 'width': '45%' }}> 45%</div>
                          </div>
                        </div>
                        <div className="flex gap-x-4 mb-4">
                          <span className="text-[#7E7E7E] text-xs">2 star</span>
                          <div className="w-[85%] bg-gray-200 rounded-r-sm">
                            <div className="bg-greeny text-xs font-medium text-white text-center p-0.5 leading-none" style={{ 'width': '65%' }}> 65%</div>
                          </div>
                        </div>
                        <div className="flex gap-x-4 mb-8">
                          <span className="text-[#7E7E7E] text-xs">1 star</span>
                          <div className="w-[85%] bg-gray-200 rounded-r-sm">
                            <div className="bg-greeny text-xs font-medium text-white text-center p-0.5 leading-none" style={{ 'width': '85%' }}> 85%</div>
                          </div>
                        </div>
                        <div className="text-[#7E7E7E] font-semibold text-xs">
                          <span><Link to='#'>How are ratings calculated?</Link></span>
                        </div>
                      </div>
                    </div>
                  )
                }

              </div>

              {/* Related Products */}
              <div className="mt-[60px] mb-[30px]">
                <h2 className="font-bold text-2xl mb-[30px] pb-[17px] border-b border-[#ECECEC] relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] after:bottom-0 after:left-0">Related Products</h2>
                <div className="flex flex-wrap gap-5">
                  {productsData.map((product, index) => (
                    <div className="w-[300px]" key={index}>
                      <Link to={`/shop/${product.slug}`}><Product product={product} /></Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar  */}
            <div className="hidden xl:block w-[25%] 2xl:w-[20%]">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ProductDetails