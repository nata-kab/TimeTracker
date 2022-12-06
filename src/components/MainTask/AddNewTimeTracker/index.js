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

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 0,
    width: "100%",
    height: 180,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,

    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 10,
  },
  buttonContainer: {
    alignSelf: "center",
    bottom: -27,
    right: 22,
    position: "absolute",
  },
  inputContainer: {
    display: "flex",
    marginTop: 45,
    alignItems: "center",
    backgroundColor: "rgba(100,100,100, 0.15)",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  text: {
    display: "flex",
    fontSize: 45,
    marginBottom: 35,
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
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.85,
  },
});

export default AddNewTimeTracker;
