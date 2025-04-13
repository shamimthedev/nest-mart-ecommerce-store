import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Default localStorage
import { persistReducer, persistStore } from "redux-persist";
import cartReducer from "./slices/cartSlice";
import filterReducer from "./slices/filterSlice";
import { combineReducers } from "redux";

// Redux Persist Configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "filter"], 
};

// Combine Reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterReducer,
});

// Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

// Persistor
export const persistor = persistStore(store);
