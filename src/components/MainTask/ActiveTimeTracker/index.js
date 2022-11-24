import React from "react";
import { View, StyleSheet } from "react-native";
import { timeTrackersListItemEdit } from "../../../redux/reducers/timeTrackersListSlice";
import { useDispatch } from "react-redux";

import Title from "../../Shared/Title";
import TimeRecord from "../../Shared/TimeRecord";
import ButtonHelper from "../../Shared/ButtonHelper";

const ActiveTimeTracker = ({
  activeTimeTracker: { timeTrackerName, timeTrackerId, timeTrackerTime },
}) => {
  const dispatch = useDispatch();

  const handleTrackersListItemEdit = () => {
    dispatch(
      timeTrackersListItemEdit({
        timeTrackerId: timeTrackerId,
        timeTrackerIsActive: false,
      })
    );
  };

  return (
    <View style={styles.container}>
      <Title text={timeTrackerName} />
      <TimeRecord activityTime={timeTrackerTime} />
      <ButtonHelper
        buttonColor="#b22222"
        iconName={"stop"}
        onPress={handleTrackersListItemEdit}
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
    backgroundColor: "#f2ffcc",
    margin: 5,
    padding: 10,
  },
});

export default ActiveTimeTracker;
