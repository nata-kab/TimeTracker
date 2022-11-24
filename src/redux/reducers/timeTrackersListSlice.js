import { createSlice } from "@reduxjs/toolkit";

export const timeTrackersListSlice = createSlice({
  name: "activity",
  initialState: [],
  reducers: {
    addTimeTracker: (state, action) => {
      const newActivity = {
        timeTrackerName: action.payload.timeTrackerName,
        timeTrackerId: new Date().getTime(),
        // Math.random() * 100
        timeTrackerTime: 0,
        isTimeTrackerActive: true,
      };
      state.push(newActivity);
    },
    editTimeTracker: (state, action) => {
      console.log("action.payload", action.payload);
      console.log(state, "state1");
      return state.map((timeTrackerItem) => {
        if (timeTrackerItem.id === action.payload.id) {
          return {
            ...timeTrackerItem,
            isTimeTrackerActive: action.payload.isTimeTrackerActive,
          };
        }
      });
      //after changing is Active on true in List - there is no inactive tracker in list TODO
    },
    deleteTimeTracker: (state, action) => {
      // console.log("action.payload", action.payload);
      return state.filter(
        (timeTrackerItem) =>
          timeTrackerItem.timeTrackerId !== action.payload.timeTrackerId
      );
    },
  },
});

export const { addTimeTracker, editTimeTracker, deleteTimeTracker } =
  timeTrackersListSlice.actions;

export default timeTrackersListSlice.reducer;
