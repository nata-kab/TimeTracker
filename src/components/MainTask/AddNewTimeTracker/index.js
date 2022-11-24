import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { addTimeTracker } from "../../../redux/reducers/timeTrackersListSlice";
import { useDispatch } from "react-redux";

import TimeRecord from "../../Shared/TimeRecord";
import ButtonHelper from "../../Shared/ButtonHelper";
import TaskTitleInput from "./TaskTitleInput";

const AddNewTimeTracker = ({ handleTrackActivityTime }) => {
  const dispatch = useDispatch();

  const [timeTrackerTitle, setTimeTrackerTitle] = useState("");

  const handleAddTracker = () => {
    if (timeTrackerTitle === "") {
      alert("Enter an activity title before adding !");
      return;
    }
    dispatch(addTimeTracker({ timeTrackerName: timeTrackerTitle }));
  };

  return (
    <View style={styles.container}>
      <TaskTitleInput title={timeTrackerTitle} setTitle={setTimeTrackerTitle} />
      <TimeRecord activityTime="00 : 00" />
      <ButtonHelper
        buttonColor="#3da200"
        iconName={"play"}
        onPress={handleAddTracker}
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
    backgroundColor: "#faf7d9",
    margin: 5,
    padding: 10,
  },
});

export default AddNewTimeTracker;
