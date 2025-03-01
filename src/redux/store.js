import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default: localStorage for web
import cartReducer from './slices/cartSlice'; // Import your cartSlice

// Persist configuration
const persistConfig = {
  key: 'cart', // Key for the cart state in localStorage
  storage,     // Storage engine (localStorage by default)
  whitelist: ['cartItems', 'totalQuantity', 'totalPrice'], // Persist these keys
};

// Create a persisted reducer for the cart
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// Create the Redux store
const store = configureStore({
  reducer: {
    cart: persistedCartReducer, // Add the persisted cart reducer
    // Add other reducers here if needed
  },
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };