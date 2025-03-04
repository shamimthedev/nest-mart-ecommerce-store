import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  category: "",
  priceRange: [500, 1000],  // Default price range
  colorFilter: '',  // Empty means no color filter applied
  conditionFilter: '',  // Empty means no condition filter applied
  selectedCategory: "All", // Default to show all products
  products: [], // This should hold the fetched product data
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setColorFilter: (state, action) => {
      state.colorFilter = action.payload; // Set the selected color
    },
    setConditionFilter: (state, action) => {
      state.conditionFilter = action.payload; // Set the selected condition
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const { setSearchQuery, setProducts, setSelectedCategory, setCategory, setPriceRange, setColorFilter, setConditionFilter, resetFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
