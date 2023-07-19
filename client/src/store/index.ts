import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/cartSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from "./slices/authSlice";


const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['_persist']
}

const rootReducer = combineReducers({
	cart: counterReducer,
	user: authSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer
});

export default store;
export const persistor = persistStore(store);