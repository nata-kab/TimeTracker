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

const ActiveTimeTracker = ({
  activeTimeTracker: { timeTrackerName, timeTrackerId, timeTrackerTotalTime },
}) => {
  const dispatch = useDispatch();
  const { activeTrackerStartTime } = useSelector(
    (state) => state.timeTrackersList
  );
  const calculateTime = (endTime) => {
    const time = endTime - activeTrackerStartTime;

    return time;
  };

  const calculateTotalTime = (timeTrackerDuration) => {
    const totalTime = timeTrackerDuration + timeTrackerTotalTime;
    return totalTime;
  };

  const editTrackersListItem = (async) => {
    try {
      const endTime = new Date().getTime();

      const timeTrackerTimes = {
        timeTrackerStartTime: activeTrackerStartTime,
        timeTrackerEndTime: endTime,
        timeTrackerDuration: calculateTime(endTime),
      };

      const timeTrackerTotalTime = calculateTotalTime(
        timeTrackerTimes.timeTrackerDuration
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
    } catch (e) {
      console.log(`Saved data failed! : ${e}`);
      return e;
    }
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
