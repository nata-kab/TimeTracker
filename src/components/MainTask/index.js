import React, { useState } from "react";
import { View, Text } from "react-native";
import ButtonHelper from "../Shared/ButtonHelper";
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
      <ButtonHelper color="#3da200" iconName={"start"}></ButtonHelper>
    </View>
  );
};

export default NewTask;
