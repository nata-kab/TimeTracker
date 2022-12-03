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
        buttonColor="#C0C0C0"
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
    // justifyContent: "space-between",
    maxWidth: "95%",
    backgroundColor: "#ffffff",
    margin: 7,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  time: {
    display: "flex",
    justifyContent: "center",
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: "#F5F5F5",
    padding: 5,
    alignItems: "center",
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
