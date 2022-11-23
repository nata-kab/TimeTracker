import { createSlice } from "@reduxjs/toolkit";

export const activitySlice = createSlice({
  name: "activity",
  initialState: [],
  reducers: {
    addActivity: (state, action) => {
      const newActivity = {
        activityName: action.payload.name,
        activityId: new Date().getTime(),
        activityTime: 0,
        isActive: false,
      };
      state.push(newActivity);
    },
    editActivity: (state, action) => {
      console.log("action.payload.name", action.payload.id);

      // let { activitiesList } = state;
      // state.activitiesList = activitiesList.map((item) =>
      //   item.id === action.payload.id ? action.payload : item
      // );
      // console.log("state2", state);
    },
    test1: (state, action) => {
      const newActivity = {
        activityName: "aaaaaaa",
        activityId: new Date().getTime(),
        activityTime: 0,
        isActive: false,
      };
      state.push(newActivity);
    },
    // deleteActivity: (state, action) => {
    //   return state.filter((item) => item.id !== action.payload.id);
    // },
  },
});

export const { addActivity, editActivity, test1 } = activitySlice.actions;

export default activitySlice.reducer;
