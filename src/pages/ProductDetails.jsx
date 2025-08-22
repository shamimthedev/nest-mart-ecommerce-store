
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
  const [activeSize, setActiveSize] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const productSlider = useRef();
  const productMainSlider = useRef();
  const dispatch = useDispatch();
  const { slug } = useParams();

  // Scroll to top when the component loads - MUST be called before any early returns
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find the product with the matching slug
  const product = productsData.find((item) => item.slug === slug);

  // Get related products (same category, excluding current product)
  const relatedProducts = productsData
    .filter((item) => item.cat === product?.cat && item.id !== product?.id)
    .slice(0, 4); // Limit to 4 related products

  // If product not found
  if (!product) {
    return (
      <div className="container mx-auto text-center py-20">
        <h2 className="text-2xl font-bold text-red-500">Product not found!</h2>
        <Link to="/shop" className="text-blue-500 underline mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  // Mock product images - using both main and secondary images from your data
  const productImages = [
    product.img,
    product.img2,
    // Add some variations for demo (you can expand this in your actual data)
    product.img,
    product.img2
  ];

  const isActive = (index) => {
    setActiveSize(index);
  };

  const goto = (index) => {
    if (productSlider.current && productMainSlider.current) {
      productSlider.current.slickGoTo(index);
      productMainSlider.current.slickGoTo(index);
    }
  };

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

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(4, productImages.length),
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow isSingleProduct={true} />,
    prevArrow: <PrevArrow isSingleProduct={true} />,
    responsive: [
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: Math.min(3, productImages.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, productImages.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(2, productImages.length),
          slidesToScroll: 1,
        }
      },
    ]
  };

  // Calculate discount percentage
  const discountPercentage = product.oldPrice && product.price 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <>
      <section className="">
        {/* Breadcrumb */}
        <div className="">
          <Breadcrumb />
        </div>

        <div className="container">
          <div className="flex gap-6 overflow-hidden">
            {/* Product Details */}
            <div className="flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 mb-[50px]">

                {/* Product Image */}
                <div className="">
                  <div className="w-[380px] sm:min-w-[380px] sm:max-w-[520px] mb-[30px] overflow-hidden border border-[#ECECEC] rounded-[15px] flex items-center justify-center">
                    <Slider {...settings2} className="overflow-hidden" ref={productMainSlider}>
                      {productImages.map((image, index) => (
                        <div key={index} className="w-full">
                          <img 
                            src={image} 
                            alt={`${product.title} - ${index + 1}`} 
                            className="w-full h-full p-5 rounded-[15px] cursor-grab object-cover" 
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  {productImages.length > 1 && (
                    <div className="overflow-hidden w-[380px] sm:min-w-[380px] sm:max-w-[520px]">
                      <Slider {...settings} className="product-slide" ref={productSlider}>
                        {productImages.map((image, index) => (
                          <div key={index} className="cursor-pointer overflow-hidden rounded-[17px] border border-transparent outline-none item px-1">
                            <img 
                              src={image} 
                              alt={`${product.title} thumbnail ${index + 1}`} 
                              className="w-full h-[100px] object-cover rounded-[15px]" 
                              onClick={() => goto(index)} 
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="font-bold">
                  {product.badge && (
                    <button className={`text-sm leading-[14px] rounded-[5px] px-3 py-[6px] mb-[19px] ${
                      product.badge === 'Hot' ? 'text-[#F74B81] bg-[#FDE0E9]' :
                      product.badge === 'Sale' ? 'text-white bg-[#F74B81]' :
                      product.badge === 'New' ? 'text-white bg-[#28A745]' :
                      'text-[#F74B81] bg-[#FDE0E9]'
                    }`}>
                      {product.badge}
                    </button>
                  )}
                  
                  <h1 className="mb-[19px] text-3xl 2xl:text-[40px] leading-9 2xl:leading-12 max-w-[448px]">
                    {product.title}
                  </h1>
                  
                  <div className="mb-[34px] flex items-center gap-x-2">
                    <Rating name="read-only" value={parseFloat(product.rating)} readOnly />
                    <span className='text-[#B6B6B6] text-sm leading-6 font-lato'>
                      ({product.rating} rating)
                    </span>
                  </div>
                  
                  <div className="mb-[31px] flex gap-x-[15px] items-baseline relative">
                    <span className='text-[58px] leading-[58px] text-greeny '>
                      ${product.price}
                    </span>
                    {product.oldPrice && (
                      <>
                        <span className='text-[28px] leading-7 text-[#ADADAD] line-through'>
                          ${product.oldPrice}
                        </span>
                        {discountPercentage > 0 && (
                          <span className="font-semibold text-xs leading-[12px] text-[#FDC040] absolute left-[115px] top-3">
                            {discountPercentage}% Off
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  
                  <div className="mb-[19px]">
                    <span className="text-[#7E7E7E] font-lato text-sm">
                      <strong>Category:</strong> {product.cat}
                    </span>
                  </div>
                  
                  <div className="mb-[19px]">
                    <span className="text-[#7E7E7E] font-lato text-sm">
                      <strong>Brand:</strong> {product.author}
                    </span>
                  </div>
                  
                  <p className="mb-9 max-w-[466px] font-lato font-normal text-[17px] leading-6 text-[#7E7E7E] text-justify">
                    Experience the premium quality of {product.title}. This carefully selected product from {product.author} offers exceptional value and taste that you&apos;ll love. Perfect for your daily needs and special occasions.
                  </p>
                  
                  <div className="mb-[34px] flex items-center gap-x-[10px] font-lato text-sm leading-6 text-[#7E7E7E]">
                    <span className="font-semibold">Size / Weight:</span>
                    <ul className="flex items-center">
                      {['50g', '60g', '80g', '100g', '150g'].map((size, index) => (
                        <li key={index} className="leading-8 font-normal">
                          <Link 
                            className={`px-3 py-2 rounded-[5px] tag ${activeSize === index ? 'bg-greeny text-white' : ""}`} 
                            onClick={() => isActive(index)}
                          >
                            {size}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-[9px]">
                    <div className="h-[50px] w-[90px] relative font-lato font-normal">
                      <input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="border-[2px] border-greeny rounded-[5px] outline-none w-full h-full px-7" 
                        min="1"
                      />
                      <MdKeyboardArrowUp 
                        onClick={handleIncrease} 
                        className="absolute top-1 right-2 text-greeny cursor-pointer" 
                      />
                      <MdKeyboardArrowDown
                        onClick={handleDecrease}
                        className="absolute bottom-1 right-2 text-greeny cursor-pointer" 
                      />
                    </div>
                    
                    <button 
                      className="h-[50px] w-[160px] flex items-center justify-center gap-x-[10px] text-white bg-greeny rounded-[5px] font-black leading-[50px] tracking-[0.5px] cursor-pointer hover:bg-opacity-90 transition-colors"
                      onClick={handleAddToCart}
                    >
                      <IoCartOutline className="text-lg" />
                      Add to cart
                    </button>
                    
                    <div className="hidden border border-[#F1F1F1] rounded-[5px] h-[50px] w-[50px] sm:flex items-center justify-center text-lg cursor-pointer text-[#333333] hover:border-greeny transition-colors">
                      <IoMdHeartEmpty />
                    </div>
                    
                    <div className="hidden border border-[#F1F1F1] rounded-[5px] h-[50px] w-[50px] sm:flex items-center justify-center text-lg cursor-pointer text-[#333333] hover:border-greeny transition-colors">
                      <MdOutlineCompareArrows />
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Tab */}
              <div className="border border-[#ECECEC] rounded-[15px] px-3 py-4 xl:px-[51px] xl:py-[41px]">
                <div className="">
                  <ul className="flex flex-wrap gap-3 mt-7 mb-[42px]">
                    <li className="px-[25px] py-3 border border-[#ECECEC] rounded-[30px] text-[17px] leading-[17px] font-bold transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm hover:text-greeny cursor-pointer">
                      <button 
                        className={`cursor-pointer ${activeTab === 0 ? 'text-greeny' : ''}`} 
                        onClick={() => setActiveTab(0)}
                      >
                        Description
                      </button>
                    </li>
                    <li className="px-[25px] py-3 border border-[#ECECEC] rounded-[30px] text-[17px] leading-[17px] font-bold transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm hover:text-greeny cursor-pointer">
                      <button 
                        className={`cursor-pointer ${activeTab === 1 ? 'text-greeny' : ''}`} 
                        onClick={() => setActiveTab(1)}
                      >
                        Additional info
                      </button>
                    </li>
                    <li className="px-[25px] py-3 border border-[#ECECEC] rounded-[30px] text-[17px] leading-[17px] font-bold transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm hover:text-greeny cursor-pointer">
                      <button 
                        className={`cursor-pointer ${activeTab === 2 ? 'text-greeny' : ''}`} 
                        onClick={() => setActiveTab(2)}
                      >
                        Reviews (3)
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Description Tab Content */}
                {activeTab === 0 && (
                  <div className="">
                    <div className="mb-[33px] text-[#7E7E7E] font-lato leading-6">
                      <h4 className="font-bold text-2xl leading-7 mb-4 text-black">Product Description</h4>
                      <p className="mb-4">
                        Discover the exceptional quality of {product.title} from {product.author}. 
                        This premium product is carefully crafted to meet the highest standards of quality and taste.
                      </p>
                      <p className="mb-4">
                        Perfect for your daily needs, this {product.cat.toLowerCase()} offers great value and 
                        satisfaction. Whether you&apos;re shopping for yourself or your family, you can trust the 
                        quality and reliability of this product.
                      </p>
                    </div>
                    
                    <div className="">
                      <h4 className="font-bold text-2xl leading-7 mb-4">Key Features</h4>
                      <hr className="border-[#ECECEC] my-5" />
                      <div className="mb-[33px] text-[#7E7E7E] font-lato leading-6">
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Premium quality ingredients and materials</li>
                          <li>Trusted brand: {product.author}</li>
                          <li>Category: {product.cat}</li>
                          <li>Customer rating: {product.rating}/5 stars</li>
                          <li>Great value for money</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="">
                      <h4 className="font-bold text-2xl leading-7 mb-4">Storage & Usage</h4>
                      <hr className="border-[#ECECEC] my-5" />
                      <div className="mb-[33px] text-[#7E7E7E] font-lato leading-6">
                        <p className="mb-2">Store in a cool, dry place away from direct sunlight.</p>
                        <p className="mb-2">Check expiration date before use.</p>
                        <p>Follow usage instructions on the package for best results.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional info Tab Content */}
                {activeTab === 1 && (
                  <div className="">
                    <table className="mb-14 table-fixed border-spacing-2 border border-[#ECECEC] font-lato leading-6 text-[#7E7E7E] font-normal w-full">
                      <tbody>
                        <tr>
                          <th className="font-normal text-left px-8 py-4 border border-[#ECECEC] w-1/3">Product Name</th>
                          <td className="px-8 py-4 border border-[#ECECEC]">{product.title}</td>
                        </tr>
                        <tr>
                          <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Brand</th>
                          <td className="px-8 py-4 border border-[#ECECEC]">{product.author}</td>
                        </tr>
                        <tr>
                          <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Category</th>
                          <td className="px-8 py-4 border border-[#ECECEC]">{product.cat}</td>
                        </tr>
                        <tr>
                          <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Price</th>
                          <td className="px-8 py-4 border border-[#ECECEC]">${product.price}</td>
                        </tr>
                        {product.oldPrice && (
                          <tr>
                            <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Original Price</th>
                            <td className="px-8 py-4 border border-[#ECECEC]">${product.oldPrice}</td>
                          </tr>
                        )}
                        <tr>
                          <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Rating</th>
                          <td className="px-8 py-4 border border-[#ECECEC]">{product.rating}/5 stars</td>
                        </tr>
                        <tr>
                          <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">Availability</th>
                          <td className="px-8 py-4 border border-[#ECECEC]">In Stock</td>
                        </tr>
                        <tr>
                          <th className="font-normal text-left px-8 py-4 border border-[#ECECEC]">SKU</th>
                          <td className="px-8 py-4 border border-[#ECECEC]">SKU-{product.id.toString().padStart(4, '0')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Reviews Tab Content */}
                {activeTab === 2 && (
                  <div className="flex flex-col lg:flex-row justify-between">
                    {/* Q&A */}
                    <div className="w-full xl:w-[60%]">
                      <h4 className="font-bold text-lg leading-7 mb-6">Customer questions & answers</h4>

                      {/* Review Cards */}
                      {[
                        { img: ReviewAuthor01, name: "Sarah Johnson", rating: 5, date: "December 15, 2024", comment: "Excellent product! Really satisfied with the quality and taste. Highly recommend this to everyone looking for premium quality." },
                        { img: ReviewAuthor02, name: "Mike Chen", rating: 4, date: "December 10, 2024", comment: "Good value for money. The product arrived quickly and was well packaged. Will definitely order again." },
                        { img: ReviewAuthor03, name: "Emma Davis", rating: 5, date: "December 5, 2024", comment: "Outstanding quality from " + product.author + ". This " + product.title + " exceeded my expectations. Perfect for daily use." }
                      ].map((review, index) => (
                        <div key={index} className="mb-[30px] p-4 border border-[#ECECEC] rounded-[15px] transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm">
                          <div className="flex gap-x-5">
                            <div className="w-[20%]">
                              <img src={review.img} alt={review.name} className="rounded-full w-16 h-16 object-cover" />
                              <span className="text-center block mt-2 text-greeny font-semibold text-sm">{review.name}</span>
                            </div>
                            <div className="flex-1 group">
                              <div className="mb-4 flex items-center justify-between text-[#7E7E7E] text-sm font-lato leading-6">
                                <p className="text-xs">{review.date}</p>
                                <Rating name="size-small" value={review.rating} size="small" readOnly />
                              </div>
                              <p className="text-justify">
                                {review.comment}
                                <span className="hidden text-greeny group-hover:inline-block ml-2">
                                  <Link to='#'>Reply</Link>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Write Review Box */}
                      <div className="my-[75px]">
                        <div>
                          <h3 className="font-bold leading-7 text-2xl mb-2">Add a review</h3>
                          <Rating name="user-rating" defaultValue={0} size="small" />
                          <div className="mt-6 mb-4">
                            <textarea 
                              className="w-full h-[180px] p-4 border border-[#ECECEC] outline-none rounded-[10px] resize-none focus:border-greeny transition-colors" 
                              name="comment" 
                              placeholder="Write your review here..."
                            ></textarea>
                          </div>
                          <div className="mb-4 flex flex-col sm:flex-row gap-4">
                            <input 
                              className="flex-1 h-[60px] p-4 border border-[#ECECEC] outline-none rounded-[10px] focus:border-greeny transition-colors" 
                              type="text" 
                              placeholder="Your Name" 
                            />
                            <input 
                              className="flex-1 h-[60px] p-4 border border-[#ECECEC] outline-none rounded-[10px] focus:border-greeny transition-colors" 
                              type="email" 
                              placeholder="Your Email" 
                            />
                          </div>
                          <div className="mb-6">
                            <input 
                              className="w-full h-[60px] p-4 border border-[#ECECEC] outline-none rounded-[10px] focus:border-greeny transition-colors" 
                              type="text" 
                              placeholder="Website (optional)" 
                            />
                          </div>
                          <button className="rounded-[10px] bg-greeny text-white px-10 py-4 hover:bg-opacity-90 transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm cursor-pointer">
                            Submit Review
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Reviews Summary */}
                    <div className="w-full xl:w-[37%]">
                      <h4 className="font-bold text-lg leading-7 mb-6">Customer reviews</h4>
                      <div className="mb-7 flex flex-col items-center gap-2 leading-6">
                        <Rating name="overall-rating" value={parseFloat(product.rating)} size="large" readOnly />
                        <p className="font-semibold">{product.rating} out of 5</p>
                      </div>
                      
                      {/* Rating breakdown */}
                      {[
                        { stars: 5, percentage: 65 },
                        { stars: 4, percentage: 25 },
                        { stars: 3, percentage: 8 },
                        { stars: 2, percentage: 2 },
                        { stars: 1, percentage: 0 }
                      ].map((rating, index) => (
                        <div key={index} className="flex gap-x-4 mb-4 items-center">
                          <span className="text-[#7E7E7E] text-xs w-12">{rating.stars} star</span>
                          <div className="flex-1 bg-gray-200 rounded-sm h-2">
                            <div 
                              className="bg-greeny h-2 rounded-sm transition-all duration-300" 
                              style={{ width: `${rating.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-[#7E7E7E] text-xs w-8">{rating.percentage}%</span>
                        </div>
                      ))}
                      
                      <div className="text-[#7E7E7E] font-semibold text-xs mt-8">
                        <Link to='#' className="hover:text-greeny transition-colors">
                          How are ratings calculated?
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Related Products */}
              <div className="mt-[60px] mb-[30px]">
                <h2 className="font-bold text-2xl mb-[30px] pb-[17px] border-b border-[#ECECEC] relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] after:bottom-0 after:left-0">
                  Related Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {relatedProducts.length > 0 ? (
                    relatedProducts.map((relatedProduct) => (
                      <div key={relatedProduct.id}>
                        <Link to={`/shop/${relatedProduct.slug}`}>
                          <Product product={relatedProduct} />
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-8 text-[#7E7E7E]">
                      <p>No related products found.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden xl:block w-[25%] 2xl:w-[20%]">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;