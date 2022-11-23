import { configureStore } from "@reduxjs/toolkit";
import activityReducer from "./reducers/activitySlice";
import timerSlice from "./reducers/timerSlice";

export default configureStore({
  reducer: {
    activities: activityReducer,
    timer: timerSlice,
  },
});
