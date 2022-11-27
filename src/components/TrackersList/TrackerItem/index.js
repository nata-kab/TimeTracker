import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { oneOfType, string, number, func } from "prop-types";

import Title from "../../Shared/Title";
import ButtonHelper from "../../Shared/ButtonHelper";

const TrackerItem = ({
  item,
  item: { timeTrackerId, timeTrackerName, timeTrackerTotalTime },
  handleEditTimeTracker,
  handleTimeTrackerModal,
}) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleTimeTrackerModal(item)}
    >
      <Title text={timeTrackerName} />
      <Text>Total time: {timeTrackerTotalTime}</Text>
      <ButtonHelper
        iconName="play"
        buttonColor="#C0C0C0"
        onPress={() => handleEditTimeTracker(timeTrackerId)}
      />
    </TouchableOpacity>
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
    borderRadius: 10,
  },
});

TrackerItem.propTypes = {
  timeTrackerName: string,
  timeTrackerId: oneOfType([string, number]),
  timeTrackerTotalTime: oneOfType([string, number]),
  myParam: func,
};
TrackerItem.defaultProps = {
  timeTrackerName: null,
  timeTrackerId: null,
  timeTrackerTotalTime: null,
  myParam: null,
};

export default TrackerItem;
