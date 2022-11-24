import React, { useEffect, useRef, useState } from "react";
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

  const [timeTrackerTitle, setTimeTrackerTitle] = useState("");
  const [isTimerActive, setIsTimerActive] = useState(false);

  const [activityTime, setActivityTime] = useState(0);

  const activeTimeTracker = timeTrackersList.filter(
    (value) => value.timeTrackerIsActive
  );

  useEffect(() => {
    console.log("useEffect");
    setTimeTrackerTitle("");
    console.log(activeTimeTracker);
  }, [timeTrackersList]);

  const handleTrackActivityTime = () => {
    setIsTimerActive(!isTimerActive);
    dispatch(timeTrackersListItemAdded({ timeTrackerName: "active" }));
  };

  const handleTrackersListItemAdded = () => {
    if (timeTrackerTitle === "") {
      alert("Enter an activity title before adding !");
      return;
    }
    dispatch(timeTrackersListItemAdded({ timeTrackerName: timeTrackerTitle }));
  };

  return (
    <View style={styles.container}>
      {activeTimeTracker.indexOf !== -1 ? (
        <>
          {console.log("no active")}
          <TaskTitleInput
            title={timeTrackerTitle}
            setTitle={setTimeTrackerTitle}
          />
          <TimeRecord activityTime={activityTime} />
          <ButtonHelper
            buttonColor="#3da200"
            iconName={"play"}
            onPress={handleTrackersListItemAdded}
          />
        </>
      ) : (
        <>
          {console.log("yes active")}
          <Title text={"activeTimeTracker[0].timeTrackerName"} />
          <TimeRecord activityTime={0} />
          <ButtonHelper
            buttonColor="#b22222"
            iconName={"stop"}
            onPress={handleTrackActivityTime}
          />
        </>
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
