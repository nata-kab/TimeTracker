import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { oneOfType, string, number, func } from "prop-types";

import Title from "../../Shared/Title";
import ButtonHelper from "../../Shared/ButtonHelper";
import timeConverter from "../../../helpers/timeConverter";

const TrackerItem = ({
  item,
  item: { timeTrackerId, timeTrackerName, timeTrackerTotalTime },
  handleEditTimeTracker,
  handleTimeTrackerModal,
  handleDeleteTimeTracker,
}) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleTimeTrackerModal(item)}
    >
      <Title text={timeTrackerName} />
      <Text>
        Total time:{"\n"} {timeConverter(timeTrackerTotalTime)}
      </Text>
      <ButtonHelper
        iconName="play"
        buttonColor="#C0C0C0"
        buttonWidth={48}
        buttonHeight={48}
        onPress={() => handleEditTimeTracker(timeTrackerId)}
      />
      <ButtonHelper
        iconName="remove"
        buttonColor="#b22222"
        buttonWidth={48}
        buttonHeight={48}
        onPress={() => handleDeleteTimeTracker(timeTrackerId)}
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
