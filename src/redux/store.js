import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
//import { combineReducerse } from '@reduxjs/toolkit';
//import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

// const persistConfig = { 
//   key: 'root',
//   storage,
// };
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
// export const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       }, });
//   },
// });
  export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
// export const persistor = persistStore(store);