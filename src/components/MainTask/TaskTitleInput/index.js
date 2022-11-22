import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const TaskTitleInput = () => {
  const [activityTitle, setActivityTitle] = useState("Activity title");
  return (
    <TextInput
      onChangeText={setActivityTitle}
      value={activityTitle}
    ></TextInput>
  );
};

export default TaskTitleInput;
