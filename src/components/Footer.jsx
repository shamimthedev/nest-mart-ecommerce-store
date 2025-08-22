import React, { useState, useCallback } from 'react';
import { Link } from 'react-router';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiArrowUp
} from 'react-icons/fi';
import PropTypes from 'prop-types';

// Mock data for footer links
const footerData = {
  company: {
    title: "Company",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Delivery Info", url: "/delivery" },
      { name: "Privacy Policy", url: "/privacy" },
      { name: "Terms & Conditions", url: "/terms" },
      { name: "Contact Us", url: "/contact" },
      { name: "Support Center", url: "/support" }
    ]
  },
  account: {
    title: "Account",
    links: [
      { name: "Sign In", url: "/login" },
      { name: "View Cart", url: "/cart" },
      { name: "My Wishlist", url: "/wishlist" },
      { name: "Track My Order", url: "/track-order" },
      { name: "Help Ticket", url: "/help" },
      { name: "Shipping Details", url: "/shipping" }
    ]
  },
  corporate: {
    title: "Corporate",
    links: [
      { name: "Become a Vendor", url: "/vendor" },
      { name: "Affiliate Program", url: "/affiliate" },
      { name: "Farm Business", url: "/farm-business" },
      { name: "Farm Careers", url: "/careers" },
      { name: "Our Suppliers", url: "/suppliers" },
      { name: "Accessibility", url: "/accessibility" }
    ]
  },
  popular: {
    title: "Popular",
    links: [
      { name: "Milk & Flavoured Milk", url: "/category/milk" },
      { name: "Butter and Margarine", url: "/category/butter" },
      { name: "Eggs Substitutes", url: "/category/eggs" },
      { name: "Marmalades", url: "/category/marmalades" },
      { name: "Sour Cream", url: "/category/sour-cream" },
      { name: "Cheese", url: "/category/cheese" }
    ]
  }
};

const socialLinks = [
  { icon: FiFacebook, url: "https://facebook.com", label: "Facebook" },
  { icon: FiTwitter, url: "https://twitter.com", label: "Twitter" },
  { icon: FiInstagram, url: "https://instagram.com", label: "Instagram" },
  { icon: FiLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: FiYoutube, url: "https://youtube.com", label: "YouTube" }
];

// Newsletter Subscription Component
const NewsletterSubscription = React.memo(() => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(() => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  }, [email]);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-white mb-2">Stay home & get your daily needs from our shop</h3>
        <p className="text-green-100 text-sm mb-4">
          Start your daily shopping with <span className="text-white font-semibold">Nest Mart</span>
        </p>
      </div>

      {isSubscribed ? (
        <div className="bg-green-500 text-white px-4 py-3 rounded-md text-sm font-medium">
          ✓ Thank you for subscribing!
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              disabled={isLoading}
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      )}

      {/* Social Links */}
      <div className="flex items-center gap-3 pt-2">
        <span className="text-green-100 text-sm">Follow us:</span>
        <div className="flex gap-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-green-700 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label={social.label}
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

NewsletterSubscription.displayName = 'NewsletterSubscription';

// Footer Link Section Component
const FooterLinkSection = React.memo(({ title, links }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.url}
              className="text-green-100 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus:text-white block py-1"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

FooterLinkSection.displayName = 'FooterLinkSection';
FooterLinkSection.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

// Contact Info Component
const ContactInfo = React.memo(() => {
  const contactDetails = [
    {
      icon: FiMapPin,
      label: "Address",
      value: "5171 W Campbell Ave, Salt Lake City, Utah 84104"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "1-800-870-8728",
      href: "tel:+18008708728"
    },
    {
      icon: FiMail,
      label: "Email",
      value: "sale@grocerymart.com",
      href: "mailto:sale@grocerymart.com"
    },
    {
      icon: FiClock,
      label: "Hours",
      value: "10:00 - 18:00, Mon - Sat"
    }
  ];

  return (
    <div className="space-y-4">
      <div>
        <img 
          src="/logo.png" 
          alt="Nest Mart Logo" 
          className="h-10 mb-4"
          loading="lazy"
        />
        <p className="text-green-100 text-sm mb-4">
          Awesome grocery store website template with modern design and useful features.
        </p>
      </div>

      <div className="space-y-3">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start gap-3">
            <detail.icon className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <span className="text-xs text-green-200 block">{detail.label}:</span>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-sm text-white hover:text-green-200 transition-colors duration-200 focus:outline-none focus:text-green-200 block"
                >
                  {detail.value}
                </a>
              ) : (
                <span className="text-sm text-white block">{detail.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

ContactInfo.displayName = 'ContactInfo';

// Scroll to Top Component
const ScrollToTop = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 z-50 hover:scale-110"
      aria-label="Scroll to top"
    >
      <FiArrowUp size={20} />
    </button>
  );
});

ScrollToTop.displayName = 'ScrollToTop';

// Payment Methods Component
const PaymentMethods = React.memo(() => {
  const paymentMethods = [
    { name: "Visa", src: "/api/placeholder/40/25" },
    { name: "Mastercard", src: "/api/placeholder/40/25" },
    { name: "PayPal", src: "/api/placeholder/40/25" },
    { name: "American Express", src: "/api/placeholder/40/25" },
    { name: "Apple Pay", src: "/api/placeholder/40/25" },
    { name: "Google Pay", src: "/api/placeholder/40/25" }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {paymentMethods.map((method, index) => (
        <div
          key={index}
          className="bg-white rounded-md p-2 flex items-center justify-center hover:scale-105 transition-transform duration-200"
        >
          <img
            src={method.src}
            alt={`${method.name} payment method`}
            className="h-4 w-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
});

PaymentMethods.displayName = 'PaymentMethods';

// Main Footer Component
const Footer = React.memo(({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={`bg-green-800 text-white relative overflow-hidden ${className}`}>
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10">
          {/* Newsletter Section */}
          <div className="bg-green-700 py-8 lg:py-12">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <NewsletterSubscription />
                <div className="flex justify-center lg:justify-end">
                  <img 
                    src="/api/placeholder/300/200" 
                    alt="Fresh groceries delivery" 
                    className="max-w-xs w-full h-auto rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="py-12 lg:py-16">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
                {/* Contact Info - Takes 2 columns on large screens */}
                <div className="lg:col-span-2">
                  <ContactInfo />
                </div>

                {/* Footer Links - Each takes 1 column */}
                <FooterLinkSection 
                  title={footerData.company.title} 
                  links={footerData.company.links} 
                />
                <FooterLinkSection 
                  title={footerData.account.title} 
                  links={footerData.account.links} 
                />
                <FooterLinkSection 
                  title={footerData.corporate.title} 
                  links={footerData.corporate.links} 
                />
                <FooterLinkSection 
                  title={footerData.popular.title} 
                  links={footerData.popular.links} 
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-green-700 bg-green-900 py-6">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <div className="text-center lg:text-left">
                  <p className="text-sm text-green-100">
                    © {currentYear} <span className="text-white font-semibold">Nest</span>, All rights reserved
                  </p>
                </div>

                {/* Payment Methods */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-green-100 hidden sm:block">We accept:</span>
                  <PaymentMethods />
                </div>

                {/* Additional Links */}
                <div className="flex items-center gap-4 text-sm">
                  <Link 
                    to="/privacy" 
                    className="text-green-100 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                  >
                    Privacy Policy
                  </Link>
                  <span className="text-green-600">|</span>
                  <Link 
                    to="/terms" 
                    className="text-green-100 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
});

Footer.displayName = 'Footer';
Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;