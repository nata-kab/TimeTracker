import { createSlice } from "@reduxjs/toolkit";

export const timeTrackersListSlice = createSlice({
  name: "activity",
  initialState: { timeTrackersList: [] },
  reducers: {
    addTimeTracker: (state, action) => {
      const newTimeTracker = {
        timeTrackerName: action.payload.timeTrackerName,
        timeTrackerId: new Date().getTime(),
        timeTrackerTime: 0,
        isTimeTrackerActive: true,
      };
      return {
        ...state,
        timeTrackersList: [newTimeTracker, ...state.timeTrackersList],
      };
    },
    editTimeTracker: (state, action) => {
      // console.log("action.payload", action.payload);
      return {
        ...state,
        timeTrackersList: state.timeTrackersList.map((timeTracker, index) =>
          timeTracker.timeTrackerId === action.payload.timeTrackerId
            ? {
                ...timeTracker,
                isTimeTrackerActive: action.payload.isTimeTrackerActive,
              }
            : timeTracker
        ),
      };
    },

    deleteTimeTracker: (state, action) => {
      // console.log("action.payload", action.payload);
      return {
        ...state,
        timeTrackersList: state.timeTrackersList.filter(
          (timeTrackerItem) =>
            timeTrackerItem.timeTrackerId !== action.payload.timeTrackerId
        ),
      };
    },
  },
});

export const { addTimeTracker, editTimeTracker, deleteTimeTracker } =
  timeTrackersListSlice.actions;

export default timeTrackersListSlice.reducer;
