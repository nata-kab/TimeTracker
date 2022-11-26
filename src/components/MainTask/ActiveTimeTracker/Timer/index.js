import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { number, string, oneOfType } from "prop-types";
import ButtonHelper from "../../../Shared/ButtonHelper";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);

  const timer = () => {
    setTimeout(() => {
      console.log(time);
      let counter = time;
      ++counter;
      setTime(time + 1);
    }, 1000);
  };

  useEffect(() => {
    isTimerOn && timer();
  }, [time, isTimerOn]);

  return (
    <View style={styles.container}>
      <Text> {time} </Text>
      <ButtonHelper
        buttonWidth={50}
        buttonColor={"gray"}
        onPress={() => setIsTimerOn(true)}
      >
        Start
      </ButtonHelper>
      <ButtonHelper
        buttonWidth={50}
        buttonColor={"gray"}
        onPress={() => setIsTimerOn(false)}
      >
        Stop
      </ButtonHelper>
      <ButtonHelper
        buttonWidth={50}
        buttonColor={"gray"}
        onPress={() => setTime(0)}
      >
        Reset
      </ButtonHelper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
  },
});

export default Timer;
