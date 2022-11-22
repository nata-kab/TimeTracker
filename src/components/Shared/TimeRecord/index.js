import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { number, string, oneOfType } from "prop-types";

const TimeRecord = ({ activityTime }) => {
  return (
    <View style={styles.container}>
      <Text> {activityTime} </Text>
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

TimeRecord.propTypes = {
  activityTime: oneOfType([string, number]),
};

TimeRecord.defaultProps = {
  activityTime: "00:00",
};
export default TimeRecord;
