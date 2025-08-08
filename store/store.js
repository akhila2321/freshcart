// import node module libraries
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import all slices
import wishlistSlice from "./storeSlices/wishlistSlice";
import cartSlice from "./storeSlices/cartSlice";
import appSlice from "./storeSlices/appSlice";
import customerSlice from "./storeSlices/customerSlice";
import authReducer from "./storeSlices/authSlice";

// Define persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["customer", "auth"],
};

const rootReducer = combineReducers({
  wishlist: wishlistSlice.reducer,
  cart: cartSlice.reducer,
  app: appSlice,
  customer: customerSlice.reducer,
  auth: authReducer,
});

// persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);

export default store;
