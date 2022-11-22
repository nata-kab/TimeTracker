import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const TaskTitleInput = () => {
  const [activityTitle, setActivityTitle] = useState("Activity title");
  return (
    <TextInput
      styles={styles.input}
      onChangeText={setActivityTitle}
      value={activityTitle}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#DCDCDC",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default TaskTitleInput;
