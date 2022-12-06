import React, { useRef } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import {
  addTimeTracker,
  saveActiveTrackerStartTime,
} from "../../../redux/reducers/timeTrackersListSlice";
import { useDispatch } from "react-redux";

import ButtonHelper from "../../Shared/ButtonHelper";
import TitleInput from "./TitleInput";
import roundedGradient from "../../../../assets/roundedGradient.png";

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
    <View style={styles.container}>
      <ImageBackground
        source={roundedGradient}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.inputContainer}>
          <TitleInput timeTrackerTitleRef={timeTrackerTitleRef} />
        </View>
        <Text style={styles.text}>00:00</Text>
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <ButtonHelper
          buttonColor="#1f7a1f"
          iconName={"play"}
          buttonWidth={55}
          buttonHeight={55}
          onPress={handleAddTracker}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    flexShrink: 0,
    flexBasis: "20%",
    minHeight: 140,
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 40,
    shadowColor: "#A0A0A0",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonContainer: {
    alignSelf: "center",
    bottom: -27,
    right: 20,
    position: "absolute",
  },
  inputContainer: {
    display: "flex",
    marginTop: 20,
    overflow: "hidden",
  },
  text: {
    display: "flex",
    fontSize: 30,
    marginBottom: 25,
    color: "white",
    fontStyle: "italic",
  },
  image: {
    display: "flex",
    flexShrink: 0,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: " 100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: "hidden",
  },
});

export default AddNewTimeTracker;
