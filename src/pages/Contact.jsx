import Breadcrumb from "../components/Breadcrumb"
import OpenStreetMap from "../components/OpenStreetMap"
import { CiLocationOn } from "react-icons/ci";
import ContactPerson from '/contact-person.png'

const Contact = () => {
    return (
        <>
            <section>
                <div>
                    <Breadcrumb />
                </div>

                {/* Help part  */}
                <div className="max-w-[1341px] mx-auto px-4 sm:px-6 md:px-8">
                    <div className="my-[50px] flex flex-col lg:flex-row gap-6 lg:justify-between lg:items-end">
                        <div className="px-3 py-1">
                            <h3 className='font-bold text-greeny text-2xl leading-7 mb-[18px]'>How can help you?</h3>
                            <h1 className="font-bold text-5xl leading-[58px] max-w-[385px] md:max-w-max lg:max-w-[385px] mb-[31px]">Let us know how
                                we can help you</h1>
                            <p className='max-w-[405px] md:max-w-[600px] lg:max-w-[405px] mb-6 text-justify font-lato text-[#7E7E7E] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                                leo.</p>
                            <p className='max-w-[405px] md:max-w-[600px] lg:max-w-[405px]  text-justify font-lato text-[#7E7E7E] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                                leo.</p>
                        </div>
                        <div>
                            <div className="px-3 py-1 mb-6">
                                <h3 className='font-bold text-xl leading-6 mb-[22px]'>01. Visit Feedback</h3>
                                <p className='max-w-[405px] md:max-w-[600px] lg:max-w-[405px]  text-justify font-lato text-[#7E7E7E] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                                    leo.</p>
                            </div>
                            <div className="px-3 py-1">
                                <h3 className='font-bold text-xl leading-6 mb-[22px]'>03. Billing Inquiries</h3>
                                <p className='max-w-[405px] md:max-w-[600px] lg:max-w-[405px]  text-justify font-lato text-[#7E7E7E] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                                    leo.</p>
                            </div>
                        </div>
                        <div>
                            <div className="px-3 py-1 mb-6">
                                <h3 className='font-bold text-xl leading-6 mb-[22px]'>02. Employer Services</h3>
                                <p className='max-w-[405px] md:max-w-[600px] lg:max-w-[405px]  text-justify font-lato text-[#7E7E7E] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                                    leo.</p>
                            </div>
                            <div className="px-3 py-1">
                                <h3 className='font-bold text-xlmd:max-w-[600px] lg:max-w-[405px]  leading-6 mb-[22px]'>04. General Inquiries</h3>
                                <p className='max-w-[405px] md:max-w-[600px] lg:max-w-[405px]  text-justify font-lato text-[#7E7E7E] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                                    leo.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Part */}
                <div className="container mb-[50px] rounded-[15px] overflow-hidden z-[-99]">
                    <OpenStreetMap />
                </div>

                <div className="max-w-[1341px] mx-auto mb-[60px] flex  gap-8 flex-wrap  justify-between px-4 sm:px-6 md:px-8">
                    <div>
                        <h4 className="font-bold text-2xl leading-7 text-greeny mb-[18px]">Office</h4>
                        <div className="mb-6 font-lato text-sm leading-6 text-[#7E7E7E] flex flex-col gap-y-1">
                            <span>205 North Michigan Avenue, Suite 810</span>
                            <span>Chicago, 60601, USA</span>
                            <span>Phone: (123) 456-7890</span>
                            <span>Email: contact@Evara.com</span>
                        </div>
                        <button className="rounded-sm bg-greeny h-10 w-[116px] flex items-center justify-center text-white font-bold text-xs gap-x-[5px] leading-[22px]"><CiLocationOn />View map</button>
                    </div>
                    <div>
                        <h4 className="font-bold text-2xl leading-7 text-greeny mb-[18px]">Studio</h4>
                        <div className="mb-6 font-lato text-sm leading-6 text-[#7E7E7E] flex flex-col gap-y-1">
                            <span>205 North Michigan Avenue, Suite 810</span>
                            <span>Chicago, 60601, USA</span>
                            <span>Phone: (123) 456-7890</span>
                            <span>Email: contact@Evara.com</span>
                        </div>
                        <button className="rounded-sm bg-greeny h-10 w-[116px] flex items-center justify-center text-white font-bold text-xs gap-x-[5px] leading-[22px]"><CiLocationOn />View map</button>
                    </div>
                    <div className="">
                        <h4 className="font-bold text-2xl leading-7 text-greeny mb-[18px]">Shop</h4>
                        <div className="mb-6 font-lato text-sm leading-6 text-[#7E7E7E] flex flex-col gap-y-1">
                            <span>205 North Michigan Avenue, Suite 810</span>
                            <span>Chicago, 60601, USA</span>
                            <span>Phone: (123) 456-7890</span>
                            <span>Email: contact@Evara.com</span>
                        </div>
                        <button className="rounded-sm bg-greeny h-10 w-[116px] flex items-center justify-center text-white font-bold text-xs gap-x-[5px] leading-[22px]"><CiLocationOn />View map</button>
                    </div>
                </div>

                <div className="max-w-[1341px] mx-auto mb-[60px] px-4 sm:px-6 md:px-8">
                    <div className="flex justify-between items-center gap-24">
                        <div className="flex-1">
                            <h3 className="font-bold leading-6 text-xl mb-[10px] text-greeny">Contact form</h3>
                            <h2 className="font-bold leading-12 text-[40px] mb-[10px]">Drop Us a Line</h2>
                            <span className="font-lato leading-6 text-[#B6B6B6]">Your email address will not be published. Required fields are marked *</span>

                            <form action="#" className="w-full">
                                <div className="w-full mb-4 mt-[30px] flex flex-col md:flex-row gap-5 justify-between">
                                    <input className="w-full lg:w-[48%] h-16 p-4 border border-[#ECECEC] outline-none rounded-[10px] font-lato text-[#838383]" type="text" placeholder="First name" />
                                    <input className="w-full lg:w-[48%] h-16 p-4 border border-[#ECECEC] outline-none rounded-[10px] font-lato text-[#838383]" type="email" placeholder="Your email" />
                                </div>
                                <div className="w-full mb-4 flex flex-col md:flex-row gap-5 justify-between">
                                    <input className="w-full lg:w-[48%] h-16 p-4 border border-[#ECECEC] outline-none rounded-[10px] font-lato text-[#838383]" type="number" placeholder="Your phone" />
                                    <input className="w-full lg:w-[48%] h-16 p-4 border border-[#ECECEC] outline-none rounded-[10px] font-lato text-[#838383]" type="text" placeholder="Subject" />
                                </div>
                                <div className="w-full mt-6 mb-[37px]">
                                    <textarea className="w-full h-[180px] p-4 border border-[#ECECEC] outline-none rounded-[10px] font-lato text-[#838383]" name="comment" id="comment" placeholder="Write to us"></textarea>
                                </div>
                                <button className="rounded-[10px] bg-[#253D4E] h-16 w-[196px] grid place-items-center text-white font-medium text-[17px] leading-6 hover:bg-[#FDC040] transition-all ease-in-out duration-300 hover:-translate-y-[4px] hover:shadow-sm cursor-pointer">Submit Review</button>
                            </form>
                        </div>
                        <div className="w-[30%] hidden lg:block">
                            <img src={ContactPerson} alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact