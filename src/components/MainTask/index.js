import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { timeTrackersListItemAdded } from "../../redux/reducers/timeTrackersListSlice";

import ButtonHelper from "../Shared/ButtonHelper";
import TimeRecord from "../Shared/TimeRecord";
import TaskTitleInput from "./TaskTitleInput";
import Title from "../Shared/Title";

const MainTask = () => {
  const { timeTrackersList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [activityTitle, setActivityTitle] = useState("");
  const [isTimerActive, setIsTimerActive] = useState(false);

  const [activityTime, setActivityTime] = useState(0);

  let activeActivity = timeTrackersList.filter((value) => value.isActive);

  const handleTrackActivityTime = () => {
    if (activityTitle === "") {
      alert("Enter an activity title before adding !");
      setActivityTitle("");
      return;
    }
    setIsTimerActive(!isTimerActive);
  };

  const handleTrackersListItemAdded = () => {
    dispatch(timeTrackersListItemAdded({ name: activityTitle }));
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
          onPress={handleTrackersListItemAdded}
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
