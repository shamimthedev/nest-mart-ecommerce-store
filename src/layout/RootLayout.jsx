import { Outlet } from "react-router";
import { memo, Suspense } from 'react';
import PropTypes from 'prop-types';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subscription from "../components/Subscription";
import FooterFeature from "../components/FooterFeature";

// Loading fallback component
const PageLoader = memo(() => (
  <div className="flex items-center justify-center min-h-[200px]" role="status" aria-label="Loading page content">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-greeny border-t-transparent rounded-full animate-spin"></div>
      <span className="text-sm text-gray-600 font-medium">Loading...</span>
    </div>
  </div>
));

PageLoader.displayName = 'PageLoader';

// Error boundary fallback component  
const ErrorFallback = memo(({ error, resetError }) => (
  <div className="container mx-auto px-4 py-8 text-center" role="alert">
    <div className="max-w-md mx-auto">
      <div className="text-6xl mb-4">😵</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
      <p className="text-gray-600 mb-6">
        {error?.message || 'An unexpected error occurred while loading the page.'}
      </p>
      <button 
        onClick={resetError}
        className="bg-greeny hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
));

ErrorFallback.displayName = 'ErrorFallback';
ErrorFallback.propTypes = {
  error: PropTypes.object,
  resetError: PropTypes.func.isRequired
};

// Skip to main content link for accessibility
const SkipToMain = memo(() => (
  <a 
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-greeny text-white px-4 py-2 rounded-md z-50 transition-all"
  >
    Skip to main content
  </a>
));

SkipToMain.displayName = 'SkipToMain';

// Main RootLayout Component
const RootLayout = memo(({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Skip to main content link for screen readers */}
      <SkipToMain />
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <Header />
      </header>

      {/* Main Content */}
      <main 
        id="main-content"
        className="flex-1 bg-white"
        role="main"
        tabIndex={-1}
      >
        <Suspense fallback={<PageLoader />}>
          {/* Page content from router */}
          <Outlet />
          {children}
        </Suspense>
      </main>

      {/* Footer Section */}
      <footer className="mt-auto bg-gradient-to-b from-white to-gray-50" role="contentinfo">
        {/* Newsletter Subscription */}
        <section aria-label="Newsletter subscription">
          <Subscription />
        </section>

        {/* Features Section */}  
        <section aria-label="Our key features">
          <FooterFeature />
        </section>

        {/* Main Footer */}
        <Footer />
      </footer>
    </div>
  );
});

RootLayout.displayName = 'RootLayout';
RootLayout.propTypes = {
  children: PropTypes.node
};

export default RootLayout;