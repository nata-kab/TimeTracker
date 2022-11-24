import React from "react";
import { View, StyleSheet } from "react-native";
import { oneOfType, string, number, func } from "prop-types";

import Title from "../../Shared/Title";
import ButtonHelper from "../../Shared/ButtonHelper";
import TimeRecord from "../../Shared/TimeRecord";

const TrackerItem = ({
  item: { timeTrackerId, timeTrackerName, timeTrackerTime },
  myParam,
}) => {
  const handleEditTimeTracker = myParam;

  return (
    <View style={styles.listItem}>
      <Title text={timeTrackerName} />
      <TimeRecord activityTime={timeTrackerTime} />
      <ButtonHelper
        iconName="play"
        buttonColor="gray"
        onPress={() => handleEditTimeTracker(timeTrackerId)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "95%",
    backgroundColor: "#ffffff",
    margin: 5,
    padding: 2,
  },
});

TrackerItem.propTypes = {
  timeTrackerName: string.isRequired,
  timeTrackerId: oneOfType([string, number]).isRequired,
  timeTrackerTime: oneOfType([string, number]),
  myParam: func,
};

export default TrackerItem;
