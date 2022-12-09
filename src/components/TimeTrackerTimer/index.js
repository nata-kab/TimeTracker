import React, { useRef } from "react";
import { View, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addTimeTracker,
  saveActiveTrackerStartTime,
  editTimeTracker,
  addTimeTrackerData,
} from "../../redux/reducers/timeTrackersListSlice";

import styles from "./TimeTrackerTimer.style";
import TitleInput from "./TitleInput";
import Typography from "../Shared/Typography";
import roundedGradient from "../../../assets/roundedGradient.png";
import ButtonHelper from "../Shared/ButtonHelper";
import Timer from "./Timer";
import calculateTime from "../../helpers/calculateTime";

const TimeTrackerTimer = () => {
  const currentEndTimeRef = useRef(new Date().getTime());
  const timeTrackerTitleRef = useRef("");

  const { timeTrackersList, activeTrackerStartTime } = useSelector(
    (state) => state
  );

  const activeTimeTracker = timeTrackersList.find(
    (value) => value.isTimeTrackerActive
  );

  const dispatch = useDispatch();

  const handleAddTracker = () => {
    if (timeTrackerTitleRef.current === "") {
      alert("Enter an activity title before adding !");
      return;
    }

    dispatch(saveActiveTrackerStartTime());
    dispatch(addTimeTracker({ timeTrackerName: timeTrackerTitleRef.current }));
  };

  const calculateTotalTime = (timeTrackerDurationSeconds) => {
    const { timeTrackerTotalTime } = activeTimeTracker;

    const totalTime = timeTrackerDurationSeconds + timeTrackerTotalTime;

    return totalTime;
  };

  const editTrackersListItem = () => {
    const { timeTrackerId } = activeTimeTracker;

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
    <>
      <View style={styles.timeTrackerContainer}>
        <ImageBackground
          source={roundedGradient}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          {activeTimeTracker ? (
            <>
              <View style={styles.mainTitle}>
                <Typography size={25} color="white" fontScaling={false}>
                  {activeTimeTracker.timeTrackerName}
                </Typography>
              </View>
              <Timer currentEndTimeRef={currentEndTimeRef} />
            </>
          ) : (
            <>
              <View style={styles.inputContainer}>
                <TitleInput timeTrackerTitleRef={timeTrackerTitleRef} />
              </View>
              <View style={styles.timeContainer}>
                <Typography
                  size={45}
                  color="white"
                  fontStyle="italic"
                  fontScaling={false}
                >
                  00:00
                </Typography>
              </View>
            </>
          )}
        </ImageBackground>
        <View style={styles.timeTrackerButtonContainer}>
          {activeTimeTracker ? (
            <ButtonHelper
              buttonColor="#992600"
              iconName={"stop"}
              buttonWidth={55}
              buttonHeight={55}
              onPress={editTrackersListItem}
            />
          ) : (
            <ButtonHelper
              buttonColor="darkcyan"
              iconName={"play"}
              buttonWidth={55}
              buttonHeight={55}
              onPress={handleAddTracker}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default TimeTrackerTimer;
