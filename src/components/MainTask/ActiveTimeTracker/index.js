import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import {
  editTimeTracker,
  closeTimeTracker,
} from "../../../redux/reducers/timeTrackersListSlice";
import { useDispatch, useSelector } from "react-redux";
import { number, string } from "prop-types";

import Title from "../../Shared/Title";
import Timer from "./Timer";
import ButtonHelper from "../../Shared/ButtonHelper";
import calculateTime from "../../../helpers/calculateTime";

const ActiveTimeTracker = ({
  activeTimeTracker: { timeTrackerName, timeTrackerId, timeTrackerTotalTime },
}) => {
  const currentEndTimeRef = useRef(new Date().getTime());
  const { activeTrackerStartTime } = useSelector(
    (state) => state.timeTrackersList
  );

  const dispatch = useDispatch();

  const calculateTotalTime = (timeTrackerDurationSeconds) => {
    const totalTime = timeTrackerDurationSeconds + timeTrackerTotalTime;

    return totalTime;
  };

  const editTrackersListItem = () => {
    const timeTrackerTimes = {
      timeTrackerStartTime: activeTrackerStartTime,
      timeTrackerEndTime: currentEndTimeRef.current,
      timeTrackerDurationSeconds: calculateTime(
        activeTrackerStartTime,
        currentEndTimeRef.current
      ),
    };

    dispatch(
      closeTimeTracker({
        timeTrackerId: timeTrackerId,
        timeTrackerTimes: timeTrackerTimes,
        timeTrackerTotalTime: calculateTotalTime(
          timeTrackerTimes.timeTrackerDurationSeconds
        ),
      })
    );

    dispatch(
      editTimeTracker({
        timeTrackerId: timeTrackerId,
        isTimeTrackerActive: false,
      })
    );
  };

  return (
    <View style={styles.container}>
      <Title text={timeTrackerName} />
      <Timer currentEndTimeRef={currentEndTimeRef} />
      <ButtonHelper
        buttonColor="#992600"
        iconName={"stop"}
        buttonWidth={55}
        buttonHeight={55}
        onPress={editTrackersListItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "98%",
    backgroundColor: "#b1d27b",
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
});

ActiveTimeTracker.propTypes = {
  timeTrackerId: number,
  timeTrackerName: string,
  timeTrackerTotalTime: number,
};

ActiveTimeTracker.defaultProps = {
  timeTrackerId: null,
  timeTrackerName: "",
  timeTrackerTotalTime: null,
};

export default ActiveTimeTracker;
