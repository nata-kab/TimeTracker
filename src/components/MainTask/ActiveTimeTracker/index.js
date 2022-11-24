import React from "react";
import { View, StyleSheet } from "react-native";
import { timeTrackersListItemEdit } from "../../../redux/reducers/timeTrackersListSlice";
import { useDispatch } from "react-redux";

import Title from "../../Shared/Title";
import TimeRecord from "../../Shared/TimeRecord";
import ButtonHelper from "../../Shared/ButtonHelper";

const ActiveTimeTracker = ({ activeTimeTracker }) => {
  const dispatch = useDispatch();
  const timeTracker = activeTimeTracker[0];

  const handleTrackersListItemEdit = () => {
    dispatch(
      timeTrackersListItemEdit({
        timeTrackerId: timeTracker.timeTrackerId,
        timeTrackerIsActive: false,
      })
    );
  };

  return (
    <View style={styles.container}>
      <Title text={timeTracker.timeTrackerName} />
      <TimeRecord activityTime={timeTracker.timeTrackerTime} />
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
    backgroundColor: "#ffc7b3",
    margin: 5,
    padding: 10,
  },
});

export default ActiveTimeTracker;
