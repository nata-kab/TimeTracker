import { configureStore } from "@reduxjs/toolkit";
import timeTrackersListReducer from "./reducers/timeTrackersListSlice";

export default configureStore({
  reducer: {
    timeTrackersList: timeTrackersListReducer,
  },
});
