import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import timeConverter from "../../../../helpers/timeConverter";

const Timer = () => {
  const [timerTime, setTimerTime] = useState(0);

  const counter = () => {
    let time = timerTime;
    ++time;
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
      <Text> {timeConverter(timerTime)} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 4,
  },
});

export default Timer;
