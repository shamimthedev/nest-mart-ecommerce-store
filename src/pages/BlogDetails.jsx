import BlogSidebar from "../components/BlogSidebar"
import Breadcrumb from "../components/Breadcrumb"
import BlogAuthor from '/blog-author.png'
import BlogFeature from '/blog-feature.png'
import ImgGallery from '/blog-article-images.png'
import { CiBookmark, CiHeart } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Rating } from "@mui/material"
import ReviewAuthor01 from '/review-author-01.png'
import ReviewAuthor02 from '/review-author-02.png'
import ReviewAuthor03 from '/review-author-03.png'
import { Link, useParams } from "react-router"
import { useEffect } from "react"
import { blogData } from "../data/DB"


const BlogDetails = () => {
    const { slug } = useParams(); // Get slug from URL
    // Scroll to top when the page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Find the blog post by slug
    const blog = blogData.find((post) => post.slug === slug);

    if (!blog) {
        return <h2>Blog post not found!</h2>;
    }

    return (
        <>
            <section>
                <div className="">
                    <Breadcrumb />
                </div>

                <div className="container">
                    <div className="flex justify-between mt-12">
                        {/* Blog Content */}
                        <div className="flex-1">
                            {/* Article Header */}
                            <div className="max-w-[897px] mx-auto">
                                <h5 className="font-bold leading-[20px] text-greeny mb-[9px]">Recipes</h5>
                                <h1 className="font-bold text-3xl 2xl:text-[40px] leading-9 2xl:leading-12 mb-6 max-w-[808px]">Best smartwatch 2022: the top wearables
                                    you can buy today</h1>
                                <div className="mb-[47px] flex flex-col sm:flex-row gap-5 justify-between">
                                    <div className="flex items-center gap-x-[19px] text-[#7E7E7E] font-lato text-[13px] leading-[13px]">
                                        <div className="flex items-center gap-x-[5px]">
                                            <img src={BlogAuthor} alt="" className="w-[30px]" />
                                            <h6 className='relative after:absolute after:w-1 after:h-1 after:content-[""] after:bg-[#D2D2D2] after:top-1/2 after:right-[-11px] after:-translate-y-[1/2] after:rounded-full'>By <span className="text-greeny">Sugar Rosie</span></h6>
                                        </div>
                                        <span className='relative after:absolute after:w-1 after:h-1 after:content-[""] after:bg-[#D2D2D2] after:top-1/2 after:right-[-11px] after:-translate-y-[1/2] after:rounded-full'>2 hours ago</span>
                                        <span>8 mins read</span>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <CiBookmark size={20} color="#B6B6B6" />
                                        <CiHeart size={20} color="#B6B6B6" />
                                    </div>
                                </div>
                            </div>

                            {/* Feature Image */}
                            <div className="max-w-[1052px] mx-auto mb-[37px]">
                                <img src={BlogFeature} alt="" className="w-full object-cover" />
                            </div>

                            {/* Text Content  */}
                            <div className="max-w-[897px] mx-auto font-lato text-[17px] leading-6">
                                <p className="text-2xl leading-8 mb-[31px]">Helping everyone live happier, healthier lives at home through their kitchen. Kitchn
                                    is a daily food magazine on the Web celebrating life in the kitchen through home
                                    cooking and kitchen intelligence.</p>
                                <p className="mb-[23px]">We've reviewed and ranked all of the best smartwatches on the market right now, and we've made a definitive list of
                                    the top 10 devices you can buy today. One of the 10 picks below may just be your perfect next smartwatch.</p>
                                <p className="mb-[52px]">Those top-end wearables span from the Apple Watch to Fitbits, Garmin watches to Tizen-sporting Samsung watches.
                                    There's also Wear OS which is Google's own wearable operating system in the vein of Apple's watchOS - you’ll see it
                                    show up in a lot of these devices.</p>

                                <h3 className="font-quicksand font-bold text-xl mb-[25px]">Lorem ipsum dolor sit amet cons</h3>

                                <p className="mb-[23px]">Throughout our review process, we look at the design, features, battery life, spec, price and more for each smartwatch,
                                    rank it against the competition and enter it into the list you'll find below.</p>

                                <div className="w-full mb-9">
                                    <img src={ImgGallery} alt="" className="w-full"/>
                                </div>

                                <p className="mb-[32px]">Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor
                                    integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque ullamcorper eu neque, augue quam quis
                                    lacus pretium eros est amet turpis nunc in turpis massa et eget facilisis ante molestie penatibus dolor volutpat, porta
                                    pellentesque scelerisque at ornare dui tincidunt cras feugiat tempor lectus</p>

                                <div className="max-w-[700px] mx-auto mb-[31px] bg-[#F4F6FA] rounded-[15px] px-[60px] py-[42px]">
                                    <p className="text-[#7E7E7E] text-2xl leading-8">Integer eu faucibus <span className="text-greeny">dolor <sup>[5]</sup></span> . Ut venenatis tincidunt diam elementum imperdiet. Etiam accumsan semper
                                        nisl eu congue. Sed aliquam magna erat, ac eleifend
                                        lacus rhoncus in.</p>
                                </div>

                                <p className="mb-[52px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras
                                    elementum libero convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec sed sed. Tincidunt morbi
                                    scelerisque lectus non. At leo mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl, odio malesuada
                                    cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus elit sit sit.</p>
                            </div>

                            {/* Tags and Social */}
                            <div className="max-w-[897px] mx-auto mb-[50px] flex flex-col md:flex-row gap-6 justify-between">
                                <div className="flex gap-x-[10px]">
                                    <button className="w-fit px-[19px] py-3 bg-greeny text-white rounded-sm font-bold text-xs leading-[22px] tracking-[0.5px]">deer</button>
                                    <button className="w-fit px-[19px] py-3 bg-greeny text-white rounded-sm font-bold text-xs leading-[22px] tracking-[0.5px]">nature</button>
                                    <button className="w-fit px-[19px] py-3 bg-greeny text-white rounded-sm font-bold text-xs leading-[22px] tracking-[0.5px]">conserve</button>
                                </div>
                                <div className="flex items-center gap-x-[10px] font-lato text-[#A2A2A2] leading-6">
                                    <h6 className="font-semibold">Share this:</h6>
                                    <div className="flex items-center gap-x-1">
                                        <FaFacebookF />
                                        <FaXTwitter />
                                        <FaInstagram />
                                        <FaPinterestP />
                                    </div>
                                </div>
                            </div>

                            {/* Author Box */}
                            <div className="max-w-[897px] mx-auto mb-[45px] p-[31px] pb-[53px] border border-[#ECECEC] rounded-[15px]">
                                <div className="mb-[37px] flex items-center gap-x-[10px]">
                                    <img src={BlogAuthor} alt="" className="w-[60px] object-cover" />
                                    <div className="">
                                        <h5 className="text-xl leading-6 font-bold">Barbara Cartland</h5>
                                        <div className="font-lato text-sm leading-6 text-[#B6B6B6] flex items-center gap-x-[22px]">
                                            <span className='relative after:absolute after:w-1 after:h-1 after:content-[""] after:bg-[#D2D2D2] after:top-1/2 after:right-[-14px] after:-translate-y-[1/2] after:rounded-full'>306 posts</span>
                                            <span>Since 2012</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="font-lato text-[17px] leading-6">
                                    <p>Hi there, I am a veteran food blogger sharing my daily all kinds of healthy and fresh recipes. I find inspiration in
                                        nature, on the streets and almost everywhere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id
                                        enim, libero sit. Est donec lobortis cursus amet, cras elementum libero</p>
                                </div>
                            </div>

                            {/* Write Comment */}
                            <div className="max-w-[897px] mx-auto mb-[50px]">
                                <h3 className="font-bold text-4xl leading-12 mb-[15px]">Leave a Comment</h3>
                                <Rating name="size-small" defaultValue={0} size="small" />
                                <div className="mt-9">
                                    <form action="#">
                                        <div className="mb-4">
                                            <textarea className="w-full h-[180px] p-4 border border-[#ECECEC] outline-none rounded-[10px]" name="comment" id="comment" placeholder="Write comment"></textarea>
                                        </div>
                                        <div className="mb-4 flex justify-between">
                                            <input className="w-[48%] h-[60px] p-4 border border-[#ECECEC] outline-none rounded-[10px]" type="text" placeholder="Name" />
                                            <input className="w-[48%] h-[60px] p-4 border border-[#ECECEC] outline-none rounded-[10px]" type="email" placeholder="Email" />
                                        </div>
                                        <div className="mb-6">
                                            <input className="w-full h-[60px] p-4 border border-[#ECECEC] outline-none rounded-[10px]" type="text" placeholder="Website" />
                                        </div>
                                        <button className="rounded-[10px] bg-greeny text-white px-10 py-4 hover:bg-[#FDC040] transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm cursor-pointer">Post Comment</button>
                                    </form>
                                </div>
                            </div>

                            {/* Comments  */}
                            <div className="max-w-[897px] mx-auto py-[46px] border-t border-[#ECECEC]">
                                <h4 className="font-bold text-4xl leading-12 mb-[30px]">Comments</h4>

                                {/* Comment Card  */}
                                <div className="p-4 mb-[30px] border border-[#ECECEC] rounded-[15px] transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm">
                                    <div className="flex gap-x-5">
                                        <div className="w-[20%]">
                                            <img src={ReviewAuthor01} alt="" className="mx-auto" />
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

                                {/* Comment Card  */}
                                <div className="p-4 mb-[30px] border border-[#ECECEC] rounded-[15px] transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm">
                                    <div className="flex gap-x-5">
                                        <div className="w-[20%]">
                                            <img src={ReviewAuthor03} alt="" className="mx-auto" />
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

                                {/* Comment Card  */}
                                <div className="p-4 border border-[#ECECEC] rounded-[15px] transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm">
                                    <div className="flex gap-x-5">
                                        <div className="w-[20%]">
                                            <img src={ReviewAuthor02} alt="" className="mx-auto" />
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
                            </div>
                        </div>

                        {/* Sidebar  */}
                        <div className="hidden 2xl:block w-[20%]">
                            <BlogSidebar className="sticky top-[100px]" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails