import { memo } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Logo from '/logo.png';
import Apple from '/app-store.png';
import Google from '/play-store.png';
import Payment from '/payment-method.png';

// Icons
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Footer data - moved to separate objects for better maintainability
const FOOTER_DATA = {
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', url: '/about' },
      { name: 'Delivery Information', url: '/delivery' },
      { name: 'Privacy Policy', url: '/privacy' },
      { name: 'Terms & Conditions', url: '/terms' },
      { name: 'Contact Us', url: '/contact' },
      { name: 'Support Center', url: '/support' },
      { name: 'Careers', url: '/careers' }
    ]
  },
  account: {
    title: 'Account',
    links: [
      { name: 'Sign In', url: '/login' },
      { name: 'View Cart', url: '/cart' },
      { name: 'My Wishlist', url: '/wishlist' },
      { name: 'Track My Order', url: '/track-order' },
      { name: 'Help Ticket', url: '/help' },
      { name: 'Shipping Details', url: '/shipping' },
      { name: 'Compare products', url: '/compare' }
    ]
  },
  corporate: {
    title: 'Corporate',
    links: [
      { name: 'Become a Vendor', url: '/vendor' },
      { name: 'Affiliate Program', url: '/affiliate' },
      { name: 'Farm Business', url: '/farm-business' },
      { name: 'Farm Careers', url: '/farm-careers' },
      { name: 'Our Suppliers', url: '/suppliers' },
      { name: 'Accessibility', url: '/accessibility' },
      { name: 'Promotions', url: '/promotions' }
    ]
  },
  popular: {
    title: 'Popular',
    links: [
      { name: 'Milk & Flavoured Milk', url: '/category/milk' },
      { name: 'Butter and Margarine', url: '/category/butter' },
      { name: 'Eggs Substitutes', url: '/category/eggs' },
      { name: 'Marmalades', url: '/category/marmalades' },
      { name: 'Sour Cream and Dips', url: '/category/cream' },
      { name: 'Tea & Kombucha', url: '/category/tea' },
      { name: 'Cheese', url: '/category/cheese' }
    ]
  }
};

const CONTACT_INFO = {
  address: 'Utah 53127 United States',
  phone: '(+91) - 540-025-124553',
  email: 'sale@Nest.com',
  hours: '10:00 - 18:00, Mon - Sat'
};

const SOCIAL_LINKS = [
  { icon: FaFacebookF, url: 'https://facebook.com', label: 'Facebook', color: '#1877F2' },
  { icon: FaXTwitter, url: 'https://twitter.com', label: 'Twitter', color: '#000000' },
  { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram', color: '#E4405F' },
  { icon: FaPinterestP, url: 'https://pinterest.com', label: 'Pinterest', color: '#BD081C' },
  { icon: FaYoutube, url: 'https://youtube.com', label: 'YouTube', color: '#FF0000' }
];

const PHONE_NUMBERS = [
  { number: '1900 - 6666', description: 'Working 8:00 - 22:00' },
  { number: '1900 - 8888', description: '24/7 Support Center' }
];

// Reusable Components
const ContactInfoItem = memo(({ icon: Icon, label, value, className = '' }) => (
  <div className={`flex items-start gap-2 transition-colors hover:text-greeny group ${className}`}>
    <Icon className="text-greeny text-lg mt-0.5 group-hover:scale-110 transition-transform" />
    <span className="text-sm leading-relaxed">
      <span className="font-semibold">{label}:</span> {value}
    </span>
  </div>
));

ContactInfoItem.displayName = 'ContactInfoItem';
ContactInfoItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string
};

const FooterSection = memo(({ title, links, className = '' }) => (
  <div className={`space-y-4 ${className}`}>
    <h3 className="font-bold text-xl lg:text-2xl text-gray-800 mb-5 relative">
      {title}
      <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-greeny rounded-full"></span>
    </h3>
    <nav aria-label={`${title} navigation`}>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.url}
              className="text-gray-600 hover:text-greeny font-medium transition-all duration-300 hover:translate-x-1 inline-block group text-sm lg:text-base"
            >
              <span className="group-hover:underline underline-offset-2">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
));

FooterSection.displayName = 'FooterSection';
FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired,
  className: PropTypes.string
};

const SocialIcon = memo(({ icon: Icon, url, label, color }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Follow us on ${label}`}
    className="group relative w-9 h-9 bg-greeny hover:bg-opacity-90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
    style={{ '--hover-color': color }}
    onMouseEnter={(e) => e.target.style.backgroundColor = color}
    onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
  >
    <Icon className="text-sm transition-transform group-hover:scale-110" />
  </a>
));

SocialIcon.displayName = 'SocialIcon';
SocialIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

const PhoneInfo = memo(({ number, description }) => (
  <div className="flex items-center gap-3 text-greeny group hover:scale-105 transition-transform">
    <FiPhoneCall className="text-2xl lg:text-3xl group-hover:rotate-12 transition-transform" />
    <div>
      <p className="font-bold text-xl lg:text-2xl leading-tight">{number}</p>
      <span className="font-lato text-xs text-gray-500">{description}</span>
    </div>
  </div>
));

PhoneInfo.displayName = 'PhoneInfo';
PhoneInfo.propTypes = {
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const AppDownloadButton = memo(({ src, alt, className = '' }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className={`hover:scale-105 transition-transform cursor-pointer rounded-lg shadow-sm hover:shadow-md ${className}`}
  />
));

AppDownloadButton.displayName = 'AppDownloadButton';
AppDownloadButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

// Main Footer Component
const Footer = memo(({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gradient-to-b from-gray-50 to-white mt-20 ${className}`} role="contentinfo">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-10 py-12 border-b border-green-100">
          {/* Company Info & Contact */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-1 space-y-6">
            <Link to="/" className="inline-block group">
              <img 
                src={Logo} 
                alt="Nest - Grocery Store" 
                loading="lazy" 
                className="w-[200px] lg:w-[215px] group-hover:scale-105 transition-transform" 
              />
            </Link>
            
            <p className="text-gray-600 font-lato leading-relaxed max-w-[280px] text-sm lg:text-base">
              Your trusted partner for fresh, quality groceries delivered right to your doorstep.
            </p>
            
            <address className="not-italic space-y-4">
              <ContactInfoItem 
                icon={LocationOnOutlinedIcon} 
                label="Address" 
                value={CONTACT_INFO.address}
              />
              <ContactInfoItem 
                icon={CallOutlinedIcon} 
                label="Call Us" 
                value={CONTACT_INFO.phone}
              />
              <ContactInfoItem 
                icon={MarkunreadOutlinedIcon} 
                label="Email" 
                value={CONTACT_INFO.email}
              />
              <ContactInfoItem 
                icon={RestoreOutlinedIcon} 
                label="Hours" 
                value={CONTACT_INFO.hours}
              />
            </address>
          </div>

          {/* Footer Sections */}
          <FooterSection {...FOOTER_DATA.company} className="col-span-1" />
          <FooterSection {...FOOTER_DATA.account} className="col-span-1" />
          <FooterSection {...FOOTER_DATA.corporate} className="col-span-1" />
          <FooterSection {...FOOTER_DATA.popular} className="col-span-1" />

          {/* App Download & Payment */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-6">
            <h3 className="font-bold text-xl lg:text-2xl text-gray-800 relative">
              Install App
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-greeny rounded-full"></span>
            </h3>
            
            <p className="text-gray-600 font-lato text-sm lg:text-base">
              From App Store or Google Play
            </p>
            
            <div className="flex gap-3">
              <AppDownloadButton src={Apple} alt="Download from App Store" />
              <AppDownloadButton src={Google} alt="Get it on Google Play" />
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 font-lato text-sm lg:text-base">
                Secured Payment Gateways
              </p>
              <img 
                src={Payment} 
                alt="Accepted payment methods" 
                loading="lazy"
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-500 font-lato text-sm leading-relaxed">
              <p>
                © {currentYear}, <Link to="/" className="text-greeny hover:underline font-semibold">Nest</Link> - Premium Grocery Store
              </p>
              <p className="text-xs mt-1">All rights reserved</p>
            </div>

            {/* Phone Numbers - Desktop Only */}
            <div className="hidden xl:flex gap-8">
              {PHONE_NUMBERS.map((phone, index) => (
                <PhoneInfo key={index} {...phone} />
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-800 text-sm lg:text-base">Follow Us</span>
                <div className="flex gap-2">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialIcon key={index} {...social} />
                  ))}
                </div>
              </div>
              <p className="text-gray-500 font-lato text-xs lg:text-sm">
                Up to 15% discount on your first subscribe
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.propTypes = {
  className: PropTypes.string
};

Footer.displayName = 'Footer';

export default Footer;