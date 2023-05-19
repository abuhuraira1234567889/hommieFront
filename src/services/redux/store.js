import { combineReducers, configureStore } from "@reduxjs/toolkit";

import stateReducer from "./reducer/stateReducer";
import getClientlist from "./reducer/getClientlist";
import getNotificationList from "./reducer/getNotificationList";
import getUserList from "./reducer/getUserList";
import getRequestList from "./reducer/getRequestList";
import getUsersList from "./reducer/getUserList";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// export const store = configureStore({
//   reducer: {
//     user: stateReducer,
//     getClient: getClientlist,
//     getNotification: getNotificationList,
//     getUser: getUserList,
//     getRequest: getRequestList,
//     getUsers: getUsersList,
//   },
// });
const appReducer=combineReducers({
  user: stateReducer,
  getClient: getClientlist,
  getNotification: getNotificationList,
  getUser: getUserList,
  getRequest: getRequestList,
  getUsers: getUsersList,
})
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, appReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware:[thunk]
});
export const persistor = persistStore(store);
