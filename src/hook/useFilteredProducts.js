import { useSelector } from 'react-redux';

const useFilteredProducts = (productsData) => {
  const searchQuery = useSelector((state) => state.filter.searchQuery);
  const category = useSelector((state) => state.filter.category);

  const filteredProducts = productsData.filter((product) => {
    // Search query filter
    const matchesSearchQuery =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.cat.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.badge?.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory = category ? product.cat === category : true;

    return matchesSearchQuery && matchesCategory; // Both conditions must be true
  });

  return filteredProducts;
};

export default useFilteredProducts;







// For Search, Category, Price, color, Condition - all filtering options


// import { useSelector } from 'react-redux';

// const useFilteredProducts = (productsData) => {
//   const searchQuery = useSelector((state) => state.filter.searchQuery);
//   const { priceRange, colorFilter, conditionFilter } = useSelector((state) => state.filter);

//   const filteredProducts = productsData.filter((product) => {
//     // Search query filter
//     const matchesSearchQuery =
//       product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.cat.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.badge?.toLowerCase().includes(searchQuery.toLowerCase());

//     // Price range filter
//     const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

//     // Color filter
//     const matchesColor = colorFilter ? product.color === colorFilter : true;

//     // Condition filter
//     const matchesCondition = conditionFilter ? product.condition === conditionFilter : true;

//     return matchesSearchQuery && matchesPrice && matchesColor && matchesCondition;
//   });

//   return filteredProducts;
// };

// export default useFilteredProducts;
