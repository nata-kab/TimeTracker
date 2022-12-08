import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { func, number, oneOfType, object } from "prop-types";

import calculateTime from "../../../../helpers/calculateTime";
import timeConverter from "../../../../helpers/timeConverter";
import styles from "./Timer.style";

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
      <Text style={styles.activeTime} allowFontScaling={false}>
        {timeConverter(timerTime)}
      </Text>
      {activeTimeTracker.timeTrackerTotalTime !== 0 && (
        <Text style={styles.previousTime} allowFontScaling={false}>
          Previous time: {timeConverter(activeTimeTracker.timeTrackerTotalTime)}
        </Text>
      )}
    </View>
  );
};

Timer.propTypes = {
  timeTrackerTitleRef: oneOfType([func, object, number]),
};

Timer.defaultProps = {
  timeTrackerTitleRef: null,
};

export default Timer;
