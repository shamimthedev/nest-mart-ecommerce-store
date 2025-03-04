import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  category: "",
  minPrice: 0,
  maxPrice: 1000,
  selectedColor: "",
  condition: "", // new/used
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
    setColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    setCondition: (state, action) => {
      state.condition = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const { setSearchQuery, setCategory, setPriceRange, setColor, setCondition, resetFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
