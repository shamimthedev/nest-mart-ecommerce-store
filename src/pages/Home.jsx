import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Hero from "../components/Hero"
import FeaturedCategories from "../components/FeaturedCategories"
import LoadingSkeleton from "../components/LoadingSkeleton"

// Lazy load components for better performance
const PopularProducts = lazy(() => import("../components/PopularProducts"))
const DailyBestSells = lazy(() => import("../components/DailyBestSells"))
const DealsOfTheDay = lazy(() => import("../components/DealsOfTheDay"))
const TopSelling = lazy(() => import("../components/TopSelling"))

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const Home = () => {

  const topSellingData = [
    { title: 'Top Selling', endpoint: '/api/top-selling' },
    { title: 'Trending Products', endpoint: '/api/trending' },
    { title: 'Recently Added', endpoint: '/api/recent', className: 'hidden xl:block' },
    { title: 'Top Rated', endpoint: '/api/top-rated', className: 'hidden 2xl:block' }
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen"
    >
      {/* Hero Section */}
      <motion.section
        variants={sectionVariants}
        id="hero"
        data-animate
        className="mb-8 lg:mb-12"
      >
        <Hero />
      </motion.section>

      {/* Featured Categories */}
      <motion.section
        variants={sectionVariants}
        id="categories"
        data-animate
        className="mb-8 lg:mb-12"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-800">
            Shop by Category
          </h2>
          <FeaturedCategories />
        </div>
      </motion.section>

      {/* Popular Products */}
      <motion.section
        variants={sectionVariants}
        id="popular"
        data-animate
        className="mb-8 lg:mb-12"
      >
        <div className="container mx-auto px-4">
          <Suspense fallback={<LoadingSkeleton type="products" />}>
            <PopularProducts />
          </Suspense>
        </div>
      </motion.section>

      {/* Daily Best Sells */}
      <motion.section
        variants={sectionVariants}
        id="bestsells"
        data-animate
        className="mb-8 lg:mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 py-12"
      >
        <div className="container mx-auto px-4">
          <Suspense fallback={<LoadingSkeleton type="products" />}>
            <DailyBestSells />
          </Suspense>
        </div>
      </motion.section>

      {/* Deals of the Day */}
      <motion.section
        variants={sectionVariants}
        id="deals"
        data-animate
        className="mb-8 lg:mb-12"
      >
        <div className="container mx-auto px-4">
          <Suspense fallback={<LoadingSkeleton type="deals" />}>
            <DealsOfTheDay />
          </Suspense>
        </div>
      </motion.section>

      {/* Top Selling Grid */}
      <motion.section
        variants={sectionVariants}
        id="topselling"
        data-animate
        className="py-12 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-800">
            Discover More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {topSellingData.map((item, index) => (
              <motion.div
                key={item.title}
                variants={sectionVariants}
                custom={index}
                className={item.className}
              >
                <Suspense fallback={<LoadingSkeleton type="list" />}>
                  <TopSelling
                    title={item.title}
                    endpoint={item.endpoint}
                    className="h-full"
                  />
                </Suspense>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        ↑
      </motion.button>
    </motion.div>
  )
}

export default Home