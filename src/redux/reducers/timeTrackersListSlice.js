import { createSlice } from "@reduxjs/toolkit";

export const timeTrackersListSlice = createSlice({
  name: "activity",
  initialState: {
    timeTrackersList: [],
    activeTrackerStartTime: 0,
  },
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

    addTimeTrackerData: (state, action) => {
      const wantedTimeTracker = state.timeTrackersList.find(
        (tracker) => tracker.timeTrackerId === action.payload.timeTrackerId
      );

      wantedTimeTracker.timeTrackerTimesList.unshift(
        action.payload.timeTrackerTimes
      );
      wantedTimeTracker.timeTrackerTotalTime =
        action.payload.timeTrackerTotalTime;
    },

    editTimeTracker: (state, action) => {
      const wantedTimeTracker = state.timeTrackersList.find(
        (tracker) => tracker.timeTrackerId === action.payload.timeTrackerId
      );

      wantedTimeTracker.isTimeTrackerActive =
        action.payload.isTimeTrackerActive;
    },

    resetTimeTrackerList: (state) => {
      state.timeTrackersList = [];
      state.activeTrackerStartTime = 0;
    },

    saveActiveTrackerStartTime: (state) => {
      state.activeTrackerStartTime = new Date().getTime();
    },
  },
});

export const {
  addTimeTracker,
  addTimeTrackerData,
  editTimeTracker,
  resetTimeTrackerList,
  saveActiveTrackerStartTime,
} = timeTrackersListSlice.actions;

export default timeTrackersListSlice.reducer;
