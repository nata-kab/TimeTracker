import { createSlice } from "@reduxjs/toolkit";
import trackedActivities from "../../helpers/trackedActivities";

export const activitySlice = createSlice({
  name: "activity",
  initialState: trackedActivities,
  reducers: {
    addActivity: (state, action) => {
      const newActivity = {
        activityName: "Components",
        activityId: new Date(),
        activityTime: 0,
      };
      state.push(newActivity);
    },
    deleteActivity: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addActivity, deleteActivity } = activitySlice.actions;

export default activitySlice.reducer;
