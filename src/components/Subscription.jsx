import { useState, useCallback, memo } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { IoPaperPlaneOutline, IoCheckmarkCircle } from 'react-icons/io5';
import SubscriptionImg from '/subscription.png';

// Validation utilities
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Subscription form component
const SubscriptionForm = memo(({ onSubmit, isLoading, isSuccess, email, setEmail }) => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (email.trim() && validateEmail(email)) {
      onSubmit(email);
    }
  }, [email, onSubmit]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, [setEmail]);

  const isValidEmail = email ? validateEmail(email) : true;

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-white/20 overflow-hidden group hover:shadow-xl transition-all duration-300"
      noValidate
    >
      <div className="flex items-center px-3 lg:px-4">
        <IoPaperPlaneOutline 
          className={`text-xl transition-colors ${
            email ? 'text-greeny' : 'text-gray-400'
          }`} 
          aria-hidden="true"
        />
      </div>
      
      <input
        className={`flex-1 px-2 py-3 lg:py-4 text-gray-700 outline-none bg-transparent text-sm lg:text-base placeholder-gray-400 transition-all ${
          !isValidEmail ? 'text-red-500' : ''
        }`}
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleEmailChange}
        disabled={isLoading || isSuccess}
        aria-label="Email address for newsletter subscription"
        aria-invalid={!isValidEmail}
        aria-describedby={!isValidEmail ? "email-error" : undefined}
        autoComplete="email"
        required
      />
      
      <button
        type="submit"
        disabled={!email.trim() || !isValidEmail || isLoading || isSuccess}
        className={`h-full px-4 sm:px-6 lg:px-8 font-semibold text-white rounded-full transition-all duration-300 min-w-[100px] sm:min-w-[120px] flex items-center justify-center text-sm lg:text-base ${
          isSuccess
            ? 'bg-green-600 cursor-default'
            : isLoading
            ? 'bg-gray-400 cursor-not-allowed'
            : email.trim() && isValidEmail
            ? 'bg-greeny hover:bg-green-700 hover:shadow-lg active:scale-95 hover:scale-105'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
        aria-label={isSuccess ? 'Successfully subscribed' : 'Subscribe to newsletter'}
      >
        {isSuccess ? (
          <>
            <IoCheckmarkCircle className="mr-2" />
            <span>Done!</span>
          </>
        ) : isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
            <span className="hidden sm:inline">Wait...</span>
          </>
        ) : (
          <span>Subscribe</span>
        )}
      </button>
    </form>
  );
});

SubscriptionForm.displayName = 'SubscriptionForm';
SubscriptionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired
};

// Main subscription component
const Subscription = memo(({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = useCallback(async (emailValue) => {
    if (!validateEmail(emailValue)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would normally make an actual API call
      // await subscribeToNewsletter(emailValue);
      
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
      }, 3000);
      
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Subscription error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <section 
      className={`container mt-8 mb-10 ${className}`}
      aria-labelledby="subscription-heading"
    >
      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] lg:h-[280px] xl:h-[320px] 2xl:h-[360px] overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg group">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={SubscriptionImg} 
            alt="Fresh groceries and vegetables" 
            className="w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-6 max-w-2xl lg:max-w-3xl">
            {/* Heading */}
            <h2 
              id="subscription-heading"
              className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-3 sm:mb-4 lg:mb-5 max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]"
            >
              Stay home & get your daily needs from our shop
            </h2>

            {/* Subtext */}
            <p className="font-lato text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-4 sm:mb-6 lg:mb-8">
              Start your daily shopping with{' '}
              <Link 
                to="/" 
                className="text-greeny hover:text-green-700 font-semibold hover:underline transition-colors"
                aria-label="Go to Nest Mart homepage"
              >
                Nest Mart
              </Link>
            </p>

            {/* Subscription Form */}
            <div className="space-y-2">
              <SubscriptionForm
                onSubmit={handleSubscribe}
                isLoading={isLoading}
                isSuccess={isSuccess}
                email={email}
                setEmail={setEmail}
              />
              
              {/* Error Message */}
              {error && (
                <p 
                  id="email-error"
                  className="text-red-500 text-xs sm:text-sm ml-2"
                  role="alert"
                  aria-live="polite"
                >
                  {error}
                </p>
              )}
              
              {/* Success Message */}
              {isSuccess && (
                <p 
                  className="text-green-600 text-xs sm:text-sm ml-2 font-medium"
                  role="alert"
                  aria-live="polite"
                >
                  🎉 Welcome! Check your email for exclusive offers.
                </p>
              )}
              
              {/* Privacy Notice */}
              <p className="text-gray-500 text-xs ml-2 mt-2">
                🔒 We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Subscription.displayName = 'Subscription';
Subscription.propTypes = {
  className: PropTypes.string
};

export default Subscription;