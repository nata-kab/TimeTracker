import React from "react";
import { View, StyleSheet } from "react-native";
import {
  editTimeTracker,
  closeTimeTracker,
} from "../../../redux/reducers/timeTrackersListSlice";
import { useDispatch, useSelector } from "react-redux";

import Title from "../../Shared/Title";
import TimeRecord from "../../Shared/TimeRecord";
import ButtonHelper from "../../Shared/ButtonHelper";

const ActiveTimeTracker = ({
  activeTimeTracker: { timeTrackerName, timeTrackerId, timeTrackerTotalTime },
}) => {
  const dispatch = useDispatch();
  const { activeTrackerStartTime } = useSelector(
    (state) => state.timeTrackersList
  );
  console.log(activeTrackerStartTime, "activeTrackerStartTime ");

  // const { activeTrackerStartTime } = useSelector(
  //   (state) => state.activeTrackerStartTime
  // );
  // console.log(timeTrackersList, "activeTrackerStartTime");

  const editTrackersListItem = () => {
    const timeTrackerTimes = {
      timeTrackerStartTime: activeTrackerStartTime,
      timeTrackerEndTime: new Date().getTime(),
    };
    dispatch(
      closeTimeTracker({
        timeTrackerId: timeTrackerId,
        timeTrackerTimes: timeTrackerTimes,
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
      <TimeRecord activityTime={timeTrackerTotalTime} />
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
