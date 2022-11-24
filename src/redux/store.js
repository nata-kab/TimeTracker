import { configureStore } from "@reduxjs/toolkit";
import timeTrackersListReducer from "./reducers/timeTrackersListSlice";
import timerSlice from "./reducers/timerSlice";

export default configureStore({
  reducer: {
    timeTrackersList: timeTrackersListReducer,
    timer: timerSlice,
  },
});
