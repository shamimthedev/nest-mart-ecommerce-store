import PropTypes from 'prop-types'

const LoadingSkeleton = ({ type, count }) => {
  // Set default values
  const skeletonType = type || "products"
  const skeletonCount = count || 4
  const ProductSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 w-full rounded-lg mb-4"></div>
      <div className="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded mb-2"></div>
      <div className="bg-gray-300 h-6 w-1/4 rounded"></div>
    </div>
  )

  const ListSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-6 w-3/4 rounded mb-4"></div>
      {Array(5).fill().map((_, i) => (
        <div key={i} className="flex items-center space-x-3 mb-3">
          <div className="bg-gray-300 h-12 w-12 rounded"></div>
          <div className="flex-1">
            <div className="bg-gray-300 h-4 w-full rounded mb-2"></div>
            <div className="bg-gray-300 h-3 w-1/2 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )

  const DealsSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-64 w-full rounded-lg mb-4"></div>
      <div className="bg-gray-300 h-8 w-1/2 rounded mb-4"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-300 h-32 rounded"></div>
        <div className="bg-gray-300 h-32 rounded"></div>
      </div>
    </div>
  )

  if (skeletonType === "products") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(skeletonCount).fill().map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (skeletonType === "list") {
    return <ListSkeleton />
  }

  if (skeletonType === "deals") {
    return <DealsSkeleton />
  }

  return <ProductSkeleton />
}

LoadingSkeleton.propTypes = {
  type: PropTypes.oneOf(['products', 'list', 'deals']),
  count: PropTypes.number
}

LoadingSkeleton.defaultProps = {
  type: 'products',
  count: 4
}

export default LoadingSkeleton