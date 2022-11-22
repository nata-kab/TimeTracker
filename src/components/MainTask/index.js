import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addActivity } from "../../redux/reducers/activitySlice";

import ButtonHelper from "../Shared/ButtonHelper";
import TimeRecord from "../Shared/TimeRecord";
import TaskTitleInput from "./TaskTitleInput";

const activityScheme = {
  trackedActivitiesData: {
    activityName: "Components",
    activityId: new Date(),
    activityTime: 0,
  },
};

const MainTask = () => {
  const [activityTitle, setActivityTitle] = useState("");

  const activities = useSelector((state) => state.activity);
  const dispatch = useDispatch();

  const [activityTime, setActivityTime] = useState(0);

  const handleAddActivity = () => {
    if (activityTitle === "") {
      alert("Enter an activity title before adding !");
      setActivityTitle("");
      return;
    }
    dispatch(addActivity({ name: activityTitle }));
    setActivityTitle("");
  };

  return (
    <View style={styles.container}>
      <TaskTitleInput title={activityTitle} setTitle={setActivityTitle} />
      <TimeRecord activityTime={activityTime} />
      <ButtonHelper
        color="#3da200"
        iconName={"start"}
        onPress={handleAddActivity}
      ></ButtonHelper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#ffffff",
    margin: 5,
    padding: 10,
  },
});

export default MainTask;
