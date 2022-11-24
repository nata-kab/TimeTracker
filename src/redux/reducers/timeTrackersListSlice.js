import { createSlice } from "@reduxjs/toolkit";

export const timeTrackerListSlice = createSlice({
  name: "activity",
  initialState: [],
  reducers: {
    timeTrackersListItemAdded: (state, action) => {
      const newActivity = {
        activityName: action.payload.name,
        activityId: new Date().getTime(),
        activityTime: 0,
        isActive: false,
      };
      state.push(newActivity);
    },
    editActivity: (state, action) => {
      console.log("action.payload", action.payload);
    },
    timeTrackerListItemDeleted: (state, action) => {
      console.log("action.payload", action.payload);
      return state.filter(
        (trackerListItem) => trackerListItem.id !== action.payload
      );
    },
    // return state.map(trackerListItem => {
    //   if (trackerListItem.id === action.payload.id) {
    //     return {...trackerListItem, isActive: true}
    //   };
    //   return product;
    // }),
    // let { activitiesList } = state;
    // state.activitiesList = activitiesList.map((item) =>
    //   item.id === action.payload.id ? action.payload : item
    // );
    // console.log("state2", state);

    // deleteActivity: (state, action) => {
    //   return state.filter((item) => item.id !== action.payload.id);
    // },
  },
});

export const {
  timeTrackersListItemAdded,
  editActivity,
  timeTrackerListItemDeleted,
} = timeTrackerListSlice.actions;

export default timeTrackerListSlice.reducer;
