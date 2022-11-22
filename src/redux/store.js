import { configureStore } from "@reduxjs/toolkit";
import activityReducer from "./reducers/activitySlice";

export default configureStore({
  reducer: {
    activities: activityReducer,
  },
});
