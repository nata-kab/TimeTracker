import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { func, number, oneOfType, object } from "prop-types";

import calculateTime from "../../../../helpers/calculateTime";
import timeConverter from "../../../../helpers/timeConverter";
import sharedStyles from "../../../../styles/sharedStyles";

const Timer = ({ currentEndTimeRef }) => {
  const { activeTrackerStartTime, timeTrackersList } = useSelector(
    (state) => state
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
      <Text style={sharedStyles.activeTime}>{timeConverter(timerTime)}</Text>
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
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },
  previousTime: {
    fontSize: 11,
    fontWeight: "300",
    color: "white",
  },
});

Timer.propTypes = {
  timeTrackerTitleRef: oneOfType([func, object, number]),
};

Timer.defaultProps = {
  timeTrackerTitleRef: null,
};

export default Timer;
