import { createSlice } from "@reduxjs/toolkit";
import trackedActivities from "../../helpers/trackedActivities";

export const activitySlice = createSlice({
  name: "activity",
  initialState: [],
  reducers: {
    addActivity: (state, action) => {
      console.log("action.payload.name", action.payload.name);
      const newActivity = {
        activityName: action.payload.name,
        activityId: new Date().getTime(),
        activityTime: 0,
        isActive: false,
      };
      state.push(newActivity);
      //   console.log("state2", state);
    },

    editActivity: (state, action) => {
      let { activitiesList } = state;
      state.activitiesList = activitiesList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
  // deleteActivity: (state, action) => {
  //   return state.filter((item) => item.id !== action.payload.id);
  // },
  // },
});

export const { addActivity, editActivity } = activitySlice.actions;

export default activitySlice.reducer;
