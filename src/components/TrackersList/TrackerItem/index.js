import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { oneOfType, string, number, func, object } from "prop-types";

import Title from "../../Shared/Title";
import ButtonHelper from "../../Shared/ButtonHelper";
import timeConverter from "../../../helpers/timeConverter";

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
      <Text style={styles.time}>{timeConverter(timeTrackerTotalTime)}</Text>
      <ButtonHelper
        iconName="play"
        buttonColor="#ebc672"
        buttonWidth={48}
        buttonHeight={48}
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
    maxWidth: "95%",
    backgroundColor: "#ffffff",
    margin: 7,
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 20,
    shadowColor: "#A0A0A0",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  time: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    overflow: "hidden",
    color: "#999999",
  },
});

TrackerItem.propTypes = {
  timeTrackerName: string,
  timeTrackerId: oneOfType([string, number]),
  timeTrackerTotalTime: oneOfType([string, number]),
  handleEditTimeTracker: func.isRequired,
  handleTimeTrackerModal: func.isRequired,
  item: object,
};

TrackerItem.defaultProps = {
  timeTrackerName: "",
  timeTrackerId: null,
  timeTrackerTotalTime: null,
  item: null,
};

export default TrackerItem;
