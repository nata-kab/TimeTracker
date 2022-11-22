import React from "react";
import { View, Text } from "react-native";
import TaskTitleInput from "./TaskTitleInput";

const NewTask = () => {
  return (
    <View>
      <Text>NewTask</Text>
      <TaskTitleInput />
      <Text>Time</Text>
    </View>
  );
};

export default NewTask;
