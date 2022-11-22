import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../Shared/Button";
import TimeRecord from "../Shared/TimeRecord";
import Title from "../Shared/Title";
import TaskTitleInput from "./TaskTitleInput";

const NewTask = () => {
  const [activityTime, setActivityTitle] = useState(0);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#ffffff",
        margin: 5,
        padding: 10,
      }}
    >
      <TaskTitleInput />
      <TimeRecord activityTime={activityTime} />
      <Button color="#3da200">Start</Button>
    </View>
  );
};

export default NewTask;
