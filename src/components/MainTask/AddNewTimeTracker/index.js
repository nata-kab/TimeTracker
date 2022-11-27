import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import {
  addTimeTracker,
  saveActiveTrackerStartTime,
} from "../../../redux/reducers/timeTrackersListSlice";
import { useDispatch } from "react-redux";

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
    const getStartTime = () => {
      // const time = new Date().getTime();
      // const minute = 1000 * 60;
      // const hour = minute * 60;
      // const day = hour * 24;
      // const year = day * 365;
    };

    dispatch(saveActiveTrackerStartTime());
    dispatch(addTimeTracker({ timeTrackerName: timeTrackerTitle }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TaskTitleInput
          title={timeTrackerTitle}
          setTitle={setTimeTrackerTitle}
        />
      </View>
      <Text>00 : 00</Text>
      <ButtonHelper
        buttonColor="#1f7a1f"
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
    borderRadius: 10,
  },
  inputContainer: {
    width: "45%",
    margin: 5,
    padding: 10,
  },
});

export default AddNewTimeTracker;
