import React from "react";
import { TouchableOpacity, View } from "react-native";
import { oneOfType, string, number, func, object } from "prop-types";

import Typography from "../../Shared/Typography";
import ButtonHelper from "../../Shared/ButtonHelper";
import timeConverter from "../../../helpers/timeConverter";
import styles from "./TrackerItem.style";

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
      <View style={styles.title}>
        <Typography>{timeTrackerName}</Typography>
      </View>
      <View style={styles.time}>
        <Typography>{timeConverter(timeTrackerTotalTime)}</Typography>
      </View>

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
