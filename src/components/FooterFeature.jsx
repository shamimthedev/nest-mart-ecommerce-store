import { memo } from 'react';
import PropTypes from 'prop-types';
import Feature1 from '/feature01.svg';
import Feature2 from '/feature02.svg';
import Feature3 from '/feature03.svg';
import Feature4 from '/feature04.svg';
import Feature5 from '/feature05.svg';
import Feature6 from '/feature-06.svg';

// Feature data with enhanced structure
const FEATURES_DATA = [
  {
    id: 1,
    img: Feature1,
    title: 'Best prices & offers',
    subtitle: 'Orders $50 or more',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 2,
    img: Feature2,
    title: 'Free delivery',
    subtitle: '24/7 amazing services',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    id: 3,
    img: Feature3,
    title: 'Great daily deal',
    subtitle: 'When you sign up',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    id: 4,
    img: Feature4,
    title: 'Wide assortment',
    subtitle: 'Mega Discounts',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    id: 5,
    img: Feature5,
    title: 'Easy returns',
    subtitle: 'Within 30 days',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    id: 6,
    img: Feature6,
    title: 'Safe delivery',
    subtitle: 'Secure & protected',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  }
];

// Individual Feature Card Component
const FeatureCard = memo(({ feature, index }) => {
  return (
    <div 
      className={`
        group relative overflow-hidden rounded-xl lg:rounded-2xl 
        bg-white hover:bg-gradient-to-br ${feature.color}
        border border-gray-100 hover:border-transparent
        shadow-sm hover:shadow-lg
        transition-all duration-300 ease-out
        hover:scale-105 hover:-translate-y-1
        p-4 sm:p-5 lg:p-6
        min-h-[120px] sm:min-h-[140px]
        cursor-pointer
      `}
      style={{
        animationDelay: `${index * 100}ms`
      }}
      role="article"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // Add click handler if needed
        }
      }}
    >
      {/* Background decoration */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="flex items-start gap-3 lg:gap-4 relative z-10">
        {/* Icon Container */}
        <div className={`
          flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
          ${feature.bgColor} group-hover:bg-white/20
          rounded-xl lg:rounded-2xl
          flex items-center justify-center
          transition-all duration-300
          group-hover:scale-110 group-hover:rotate-3
        `}>
          <img
            src={feature.img}
            alt=""
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            role="presentation"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-800 group-hover:text-white text-sm sm:text-base lg:text-lg leading-tight mb-1 sm:mb-2 transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600 group-hover:text-white/90 font-lato text-xs sm:text-sm leading-relaxed transition-colors duration-300">
            {feature.subtitle}
          </p>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
});

FeatureCard.displayName = 'FeatureCard';
FeatureCard.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

// Main FooterFeature Component
const FooterFeature = memo(({ className = '' }) => {
  return (
    <section 
      className={`container py-8 lg:py-12 ${className}`}
      aria-labelledby="features-heading"
    >
      {/* Optional Section Header */}
      <div className="text-center mb-8 lg:mb-12">
        <h2 
          id="features-heading" 
          className="sr-only"
        >
          Our Key Features and Benefits
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
        {FEATURES_DATA.map((feature, index) => (
          <div 
            key={feature.id}
            className="w-full"
            style={{
              animationFillMode: 'both',
              animationName: 'fadeInUp',
              animationDuration: '0.6s',
              animationDelay: `${index * 0.1}s`
            }}
          >
            <FeatureCard 
              feature={feature} 
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
});

FooterFeature.displayName = 'FooterFeature';
FooterFeature.propTypes = {
  className: PropTypes.string
};

// CSS-in-JS for animations (you can move this to your CSS file)
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Inject styles (you can remove this if you add the CSS to your stylesheet)
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default FooterFeature;