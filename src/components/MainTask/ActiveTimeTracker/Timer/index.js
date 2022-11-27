import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Timer = () => {
  const [timerTime, setTimerTime] = useState(0);

  useEffect(() => {
    const timerCounter = setTimeout(() => {
      console.log(timerTime);
      let time = timerTime;
      time++;
      setTimerTime(time);
    }, 1000);

    return () => {
      clearTimeout(timerCounter);
    };
  }, [timerTime]);

  return (
    <View style={styles.container}>
      <Text> {timerTime} </Text>
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
