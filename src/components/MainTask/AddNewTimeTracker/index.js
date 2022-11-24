import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { timeTrackersListItemAdded } from "../../../redux/reducers/timeTrackersListSlice";
import { useDispatch } from "react-redux";

import TimeRecord from "../../Shared/TimeRecord";
import ButtonHelper from "../../Shared/ButtonHelper";
import TaskTitleInput from "./TaskTitleInput";

const AddNewTimeTracker = ({ handleTrackActivityTime }) => {
  const dispatch = useDispatch();

  const [timeTrackerTitle, setTimeTrackerTitle] = useState("");

  const handleTrackersListItemAdded = () => {
    if (timeTrackerTitle === "") {
      alert("Enter an activity title before adding !");
      return;
    }
    dispatch(timeTrackersListItemAdded({ timeTrackerName: timeTrackerTitle }));
  };

  return (
    <View style={styles.container}>
      <TaskTitleInput title={timeTrackerTitle} setTitle={setTimeTrackerTitle} />
      <TimeRecord activityTime={0} />
      <ButtonHelper
        buttonColor="#3da200"
        iconName={"play"}
        onPress={handleTrackersListItemAdded}
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
    backgroundColor: "#fbf8e0",
    margin: 5,
    padding: 10,
  },
});

export default AddNewTimeTracker;
