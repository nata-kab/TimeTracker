import React, { useRef } from "react";
import { View, Text, ImageBackground } from "react-native";
import {
  addTimeTracker,
  saveActiveTrackerStartTime,
} from "../../../redux/reducers/timeTrackersListSlice";
import { useDispatch } from "react-redux";

import ButtonHelper from "../../Shared/ButtonHelper";
import TitleInput from "./TitleInput";
import roundedGradient from "../../../../assets/roundedGradient.png";
import sharedStyles from "../../../styles/sharedStyles";
import styles from "./AddNewTimeTracker.style";
import Typography from "../../Shared/Typography";

const AddNewTimeTracker = () => {
  const timeTrackerTitleRef = useRef("");

  const dispatch = useDispatch();

  const handleAddTracker = () => {
    if (timeTrackerTitleRef.current === "") {
      alert("Enter an activity title before adding !");
      return;
    }

    dispatch(saveActiveTrackerStartTime());

    dispatch(addTimeTracker({ timeTrackerName: timeTrackerTitleRef.current }));
  };

  return (
    <View style={sharedStyles.timeTrackerContainer}>
      <ImageBackground
        source={roundedGradient}
        resizeMode="cover"
        style={sharedStyles.backgroundImage}
      >
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
      </ImageBackground>
      <View style={sharedStyles.timeTrackerButtonContainer}>
        <ButtonHelper
          buttonColor="darkcyan"
          iconName={"play"}
          buttonWidth={55}
          buttonHeight={55}
          onPress={handleAddTracker}
        />
      </View>
    </View>
  );
};

export default AddNewTimeTracker;
