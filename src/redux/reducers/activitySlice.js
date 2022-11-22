import { createSlice } from "@reduxjs/toolkit";
import trackedActivities from "../../helpers/trackedActivities";

export const activitySlice = createSlice({
  name: "activity",
  initialState: trackedActivities,
  reducers: {
    addActivity: (state, action) => {
      console.log("action.payload.name", action.payload.name);
      const newActivity = {
        trackedActivitiesData: {
          activityName: action.payload.name,
          activityId: new Date().getTime(),
          activityTime: 0,
        },
      };
      state.push(newActivity);
      //   console.log("state2", state);
    },
    deleteActivity: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addActivity, deleteActivity } = activitySlice.actions;

export default activitySlice.reducer;
