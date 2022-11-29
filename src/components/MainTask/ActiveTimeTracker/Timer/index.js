import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import timeConverter from "../../../../helpers/timeConverter";
import { useSelector } from "react-redux";
import calculateTime from "../../../../helpers/calculateTime";
import { func, number, oneOfType, object } from "prop-types";

const Timer = ({ currentEndTimeRef }) => {
  const { activeTrackerStartTime, timeTrackersList } = useSelector(
    (state) => state.timeTrackersList
  );

  const startTime = calculateTime(
    activeTrackerStartTime,
    currentEndTimeRef.current
  );

  const [timerTime, setTimerTime] = useState(startTime);

  const activeTimeTracker = timeTrackersList.find(
    (value) => value.isTimeTrackerActive
  );

  const counter = () => {
    currentEndTimeRef.current = new Date().getTime();

    const time = calculateTime(
      activeTrackerStartTime,
      currentEndTimeRef.current
    );

    setTimerTime(time);
  };

  useEffect(() => {
    const timerCounter = setTimeout(counter, 1000);

    return () => {
      clearTimeout(timerCounter);
    };
  }, [timerTime]);

  return (
    <View style={styles.container}>
      <Text>Time: {timeConverter(timerTime)}</Text>
      {activeTimeTracker.timeTrackerTotalTime !== 0 && (
        <Text style={styles.previousTime}>
          Previous time: {timeConverter(activeTimeTracker.timeTrackerTotalTime)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 4,
  },
  previousTime: {
    fontSize: 11,
    fontWeight: "300",
    color: "rgb(20, 20, 20)",
  },
});

Timer.propTypes = {
  timeTrackerTitleRef: oneOfType([func, object, number]),
};

Timer.defaultProps = {
  timeTrackerTitleRef: null,
};

export default Timer;
