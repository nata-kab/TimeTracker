import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

const TaskTitleInput = ({ title, setTitle }) => {
  return (
    <View>
      <TextInput
        styles={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Add activity title"
        maxLength={40}
        // multiline={true}
      />
    </View>
  );
};

//TODO handle the styles if the text will be too long so that the text input does not expand

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 0,
    flexBasis: "50%",
    maxWidth: "50%",
    borderWidth: 1,
    borderColor: "red",
    overflow: "hidden",
  },
  input: {
    backgroundColor: "#DCDCDC",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "50%",
    borderWidth: 1,
  },
});
export default TaskTitleInput;
