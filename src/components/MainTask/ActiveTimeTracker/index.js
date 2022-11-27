import React from "react";
import { View, StyleSheet } from "react-native";
import {
  editTimeTracker,
  closeTimeTracker,
} from "../../../redux/reducers/timeTrackersListSlice";
import { useDispatch, useSelector } from "react-redux";

import Title from "../../Shared/Title";
import Timer from "./Timer";
import ButtonHelper from "../../Shared/ButtonHelper";
import timeConverter from "../../../helpers/timeConverter";

const ActiveTimeTracker = ({
  activeTimeTracker: { timeTrackerName, timeTrackerId, timeTrackerTotalTime },
}) => {
  const dispatch = useDispatch();
  const { activeTrackerStartTime } = useSelector(
    (state) => state.timeTrackersList
  );
  const calculateTime = (endTime) => {
    const time =
      Math.floor(endTime / 1000) - Math.floor(activeTrackerStartTime / 1000);
    return time;
  };

  const calculateTotalTime = (timeTrackerDurationSeconds) => {
    const totalTime = timeTrackerDurationSeconds + timeTrackerTotalTime;
    return totalTime;
  };

  const editTrackersListItem = () => {
    timeConverter();
    const endTime = new Date().getTime();

    const timeTrackerTimes = {
      timeTrackerStartTime: activeTrackerStartTime,
      timeTrackerEndTime: endTime,
      timeTrackerDurationSeconds: calculateTime(endTime),
    };

    const timeTrackerTotalTime = calculateTotalTime(
      timeTrackerTimes.timeTrackerDurationSeconds
    );

    dispatch(
      closeTimeTracker({
        timeTrackerId: timeTrackerId,
        timeTrackerTimes: timeTrackerTimes,
        timeTrackerTotalTime: timeTrackerTotalTime,
      })
    );
    dispatch(
      editTimeTracker({
        timeTrackerId: timeTrackerId,
        isTimeTrackerActive: false,
      })
    );
  };

  return (
    <View style={styles.container}>
      <Title text={timeTrackerName} />
      <Timer />
      <ButtonHelper
        buttonColor="#992600"
        iconName={"stop"}
        onPress={editTrackersListItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "98%",
    backgroundColor: "#b1d27b",
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
});

export default ActiveTimeTracker;
