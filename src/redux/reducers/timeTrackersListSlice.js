import { createSlice } from "@reduxjs/toolkit";

export const timeTrackersListSlice = createSlice({
  name: "activity",
  initialState: [],
  reducers: {
    timeTrackersListItemAdded: (state, action) => {
      const newActivity = {
        timeTrackerName: action.payload.timeTrackerName,
        timeTrackerId: new Date().getTime(),
        timeTrackerTime: 0,
        timeTrackerIsActive: false,
      };
      state.push(newActivity);
    },
    timeTrackersListItemEdit: (state, action) => {
      console.log("action.payload", action.payload);
    },
    timeTrackersListItemDeleted: (state, action) => {
      console.log("action.payload", action.payload);
      return state.filter(
        (trackersListItem) => trackersListItem.timeTrackerId !== action.payload
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
  timeTrackersListItemDeleted,
} = timeTrackersListSlice.actions;

export default timeTrackersListSlice.reducer;
