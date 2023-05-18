import { configureStore } from "@reduxjs/toolkit";

import stateReducer from "./reducer/stateReducer";
import getClientlist from "./reducer/getClientlist";
import getNotificationList from "./reducer/getNotificationList";
import getUserList from "./reducer/getUserList";
import getRequestList from "./reducer/getRequestList";
import getUsersList from "./reducer/getUserList";

export const store = configureStore({
  reducer: {
    user: stateReducer,
    getClient: getClientlist,
    getNotification: getNotificationList,
    getUser: getUserList,
    getRequest: getRequestList,
    getUsers: getUsersList,
  },
});
