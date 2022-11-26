import { createSlice } from "@reduxjs/toolkit";

export const timeTrackersListSlice = createSlice({
  name: "activity",
  initialState: { timeTrackersList: [], activeTrackerStartTime: 0 },
  reducers: {
    addTimeTracker: (state, action) => {
      const newTimeTracker = {
        timeTrackerName: action.payload.timeTrackerName,
        timeTrackerId: new Date().getTime(),
        timeTrackerTotalTime: 0,
        timeTrackerTimesList: [],
        isTimeTrackerActive: true,
      };
      state.timeTrackersList.unshift(newTimeTracker);
    },
    closeTimeTracker: (state, action) => {
      const wantedTimeTracker = state.timeTrackersList.find(
        (tracker) => tracker.timeTrackerId === action.payload.timeTrackerId
      );

      wantedTimeTracker.timeTrackerTimesList.unshift(
        action.payload.timeTrackerTimes
      );
      wantedTimeTracker.timeTrackerTotalTime =
        action.payload.timeTrackerTotalTime;
      console.log(wantedTimeTracker);
    },

    editTimeTracker: (state, action) => {
      const wantedTimeTracker = state.timeTrackersList.find(
        (tracker) => tracker.timeTrackerId === action.payload.timeTrackerId
      );

      wantedTimeTracker.isTimeTrackerActive =
        action.payload.isTimeTrackerActive;
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
    resetTimeTrackerList: (state) => {
      state.timeTrackersList = [];
    },
    saveActiveTrackerStartTime: (state, action) => {
      state.activeTrackerStartTime = new Date().getTime();
      console.log(state.activeTrackerStartTime, "START");
    },
  },
});

export const {
  addTimeTracker,
  closeTimeTracker,
  editTimeTracker,
  deleteTimeTracker,
  resetTimeTrackerList,
  saveActiveTrackerStartTime,
} = timeTrackersListSlice.actions;

export default timeTrackersListSlice.reducer;
