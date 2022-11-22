import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const TaskTitleInput = ({ title, setTitle }) => {
  return (
    <TextInput
      styles={styles.input}
      onChangeText={setTitle}
      value={title}
      placeholder="Add activity title"
      maxLength={60}
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
