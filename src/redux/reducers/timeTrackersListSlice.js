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
        timeTrackerIsActive: true,
      };
      state.push(newActivity);
    },
    timeTrackersListItemEdit: (state, action) => {
      // console.log("action.payload", action.payload);
      // console.log(state, "state1");
      return state.map((trackerListItem) => {
        if (trackerListItem.id === action.payload.id) {
          return {
            ...trackerListItem,
            timeTrackerIsActive: action.payload.timeTrackerIsActive,
          };
        }
      });
    },
    timeTrackersListItemDeleted: (state, action) => {
      // console.log("action.payload", action.payload);
      return state.filter(
        (trackersListItem) =>
          trackersListItem.timeTrackerId !== action.payload.timeTrackerId
      );
    },
  },
});

export const {
  timeTrackersListItemAdded,
  timeTrackersListItemEdit,
  timeTrackersListItemDeleted,
} = timeTrackersListSlice.actions;

export default timeTrackersListSlice.reducer;
