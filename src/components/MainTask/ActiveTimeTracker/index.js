import React, { useRef } from "react";
import { View, ImageBackground } from "react-native";
import {
  editTimeTracker,
  addTimeTrackerData,
} from "../../../redux/reducers/timeTrackersListSlice";
import { useDispatch, useSelector } from "react-redux";
import { number, string } from "prop-types";

import Title from "../../Shared/Title";
import Timer from "./Timer";
import ButtonHelper from "../../Shared/ButtonHelper";
import calculateTime from "../../../helpers/calculateTime";
import roundedGradient from "../../../../assets/roundedGradient.png";
import style from "./ActiveTimeTracker.style";
import sharedStyles from "../../../styles/sharedStyles";

const ActiveTimeTracker = ({
  activeTimeTracker: { timeTrackerName, timeTrackerId, timeTrackerTotalTime },
}) => {
  const currentEndTimeRef = useRef(new Date().getTime());
  const { activeTrackerStartTime } = useSelector((state) => state);

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
      addTimeTrackerData({
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
    <View style={sharedStyles.timeTrackerContainer}>
      <ImageBackground
        source={roundedGradient}
        resizeMode="cover"
        style={sharedStyles.backgroundImage}
      >
        <View style={style.mainTitle}>
          <Title
            text={timeTrackerName}
            size={25}
            color="white"
            fontScaling={false}
          />
        </View>
        <Timer currentEndTimeRef={currentEndTimeRef} />
      </ImageBackground>

      <View style={sharedStyles.timeTrackerButtonContainer}>
        <ButtonHelper
          buttonColor="#992600"
          iconName={"stop"}
          buttonWidth={55}
          buttonHeight={55}
          onPress={editTrackersListItem}
        />
      </View>
    </View>
  );
};

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
