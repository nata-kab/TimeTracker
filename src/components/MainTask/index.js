import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addActivity } from "../../redux/reducers/activitySlice";

import ButtonHelper from "../Shared/ButtonHelper";
import TimeRecord from "../Shared/TimeRecord";
import TaskTitleInput from "./TaskTitleInput";
import Title from "../Shared/Title";

const activityScheme = {
  trackedActivitiesData: {
    activityName: "Components",
    activityId: new Date(),
    activityTime: 0,
  },
};

const MainTask = () => {
  const { activities } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [activityTitle, setActivityTitle] = useState("");
  const [isTimerActive, setIsTimerActive] = useState(false);

  const [activityTime, setActivityTime] = useState(0);

  const isActivityActive = (value) => {
    return value.isActive === true;
  };

  let activeActivity = activities.filter(isActivityActive);

  const handleTrackActivityTime = () => {
    if (activityTitle === "") {
      alert("Enter an activity title before adding !");
      setActivityTitle("");
      return;
    }
    setIsTimerActive(!isTimerActive);
  };

  const handleAddActivity = () => {
    dispatch(addActivity({ name: activityTitle }));
    setActivityTitle("");
    setIsTimerActive(!isTimerActive);
  };

  return (
    <View style={styles.container}>
      {activeActivity === [] ? (
        <Title text={activityTitle.activityName} />
      ) : (
        <TaskTitleInput title={activityTitle} setTitle={setActivityTitle} />
      )}
      <TimeRecord activityTime={activityTime} />
      {isTimerActive ? (
        <ButtonHelper
          buttonColor="#b22222"
          iconName={"stop"}
          onPress={handleAddActivity}
        />
      ) : (
        <ButtonHelper
          buttonColor="#3da200"
          iconName={"play"}
          onPress={handleTrackActivityTime}
        />
      )}
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
    backgroundColor: "#ffffff",
    margin: 5,
    padding: 10,
  },
});

export default MainTask;
