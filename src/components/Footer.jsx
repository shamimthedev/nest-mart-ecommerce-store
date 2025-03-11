import Logo from '/logo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import Apple from '/app-store.png'
import Google from '/play-store.png'
import Payment from '/payment-method.png'
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <>
      <section className="container mt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 3xl:grid-cols-6 gap-10 pb-[45px] border-b border-[#BCE3C9]">
          <div className="col-span-2 lg:col-span-1">
            <Link to='/'><img src={Logo} loading="lazy" alt="Logo" className="w-[215px] mb-[22px]" /></Link>
            <p className='text-[17px] leading-6 font-lato max-w-[237px] mb-[35px]'>Awesome grocery store website
              template</p>
            <div className="flex flex-col gap-4 font-lato text-[15px] leading-6">
              <span className='flex items-center gap-x-[6px]'><LocationOnOutlinedIcon className='text-greeny' /> <span className='font-semibold'>Address:</span> Utah 53127 United States</span>
              <span className='flex items-center gap-x-[6px]'><CallOutlinedIcon className='text-greeny' /> <span className='font-semibold'>Call Us:</span> (+91) - 540-025-124553</span>
              <span className='flex items-center gap-x-[6px]'><MarkunreadOutlinedIcon className='text-greeny' /> <span className='font-semibold'>Email:</span> sale@Nest.com</span>
              <span className='flex items-center gap-x-[6px]'><RestoreOutlinedIcon className='text-greeny' /> <span className='font-semibold'>Hours:</span> 10:00 - 18:00, Mon - Sat</span>
            </div>
          </div>
          <div className="leading-6">
            <h3 className='font-bold text-2xl mb-5'>Company</h3>
            <ul className="flex flex-col gap-y-[21px] font-lato text-[15px]">
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Support Center</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="leading-6">
            <h3 className='font-bold text-2xl mb-5'>Account</h3>
            <ul className="flex flex-col gap-y-[21px] font-lato text-[15px]">
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Track My Order</li>
              <li>Help Ticket</li>
              <li>Shipping Details</li>
              <li>Compare products</li>
            </ul>
          </div>
          <div className="leading-6">
            <h3 className='font-bold text-2xl mb-5'>Corporate</h3>
            <ul className="flex flex-col gap-y-[21px] font-lato text-[15px]">
              <li>Become a Vendor</li>
              <li>Affiliate Program</li>
              <li>Farm Business</li>
              <li>Farm Careers</li>
              <li>Our Suppliers</li>
              <li>Accessibility</li>
              <li>Promotions</li>
            </ul>
          </div>
          <div className="leading-6">
            <h3 className='font-bold text-2xl mb-5'>Popular</h3>
            <ul className="flex flex-col gap-y-[21px] font-lato text-[15px]">
              <li>Milk & Flavoured Milk</li>
              <li>Butter and Margarine</li>
              <li>Eggs Substitutes</li>
              <li>Marmalades</li>
              <li>Sour Cream and Dips</li>
              <li>Tea & Kombucha</li>
              <li>Cheese</li>
            </ul>
          </div>
          <div className="leading-6 col-span-2 lg:col-span-1">
            <h3 className='font-bold text-2xl mb-5'>Install App</h3>
            <span className='mb-[25px] font-lato text-[15px]'>From App Store or Google Play</span>
            <div className="flex gap-x-3 mb-12">
              <img src={Apple} alt="" />
              <img src={Google} alt="" />
            </div>
            <span className='mb-[25px] font-lato text-[15px]'>Secured Payment Gateways</span>
            <img src={Payment} alt="" />
          </div>
        </div>
        <div className="flex justify-between py-[30px]">
          <div className="font-lato text-sm text-[#7E7E7E] leading-6">
            <p>© 2022, <span className='text-greeny'><Link to='/'>Nest</Link></span> - HTML Ecommerce Template <br />
              All rights reserved</p>
          </div>
          <div className="hidden xl:flex gap-x-5">
            <div className="flex gap-x-3 items-center text-greeny">
              <FiPhoneCall className='text-3xl' />
              <div>
                <p className='font-bold text-[26px] leading-[26px]'>1900 - 6666</p>
                <span className='font-lato text-xs leading-3 text-[#7E7E7E]'>Working 8:00 - 22:00</span>
              </div>
            </div>
            <div className="flex gap-x-3 items-center text-greeny">
              <FiPhoneCall className='text-3xl' />
              <div>
                <p className='font-bold text-[26px] leading-[26px]'>1900 - 8888</p>
                <span className='font-lato text-xs leading-3 text-[#7E7E7E]'>24/7 Support Center</span>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className="flex items-center gap-x-[15px]">
              <span className='font-bold leading-[20px]'>Follow Us</span>
              <div className="flex gap-x-[5px]">
                <div className="w-[30px] h-[30px] bg-greeny text-white text-base rounded-full flex items-center justify-center"><FaFacebookF /></div>
                <div className="w-[30px] h-[30px] bg-greeny text-white text-base rounded-full flex items-center justify-center"><FaXTwitter /></div>
                <div className="w-[30px] h-[30px] bg-greeny text-white text-base rounded-full flex items-center justify-center"><FaInstagram /></div>
                <div className="w-[30px] h-[30px] bg-greeny text-white text-base rounded-full flex items-center justify-center"><FaPinterestP /></div>
                <div className="w-[30px] h-[30px] bg-greeny text-white text-base rounded-full flex items-center justify-center"><FaYoutube /></div>
              </div>
            </div>
            <p className="font-lato text-sm text-[#7E7E7E] leading-6">Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer