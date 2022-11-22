import React from "react";
import { View, Text } from "react-native";

const TimeRecord = ({ activityTime }) => {
  console.log(activityTime);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        margin: 4,
      }}
    >
      <Text> Time </Text>
    </View>
  );
};

export default TimeRecord;
