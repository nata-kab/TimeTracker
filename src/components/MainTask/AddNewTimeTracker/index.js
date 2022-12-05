import React, { useRef } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  addTimeTracker,
  saveActiveTrackerStartTime,
} from "../../../redux/reducers/timeTrackersListSlice";
import { useDispatch } from "react-redux";

import ButtonHelper from "../../Shared/ButtonHelper";
import TitleInput from "./TitleInput";

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
      <View style={styles.inputContainer}>
        <TitleInput timeTrackerTitleRef={timeTrackerTitleRef} />
      </View>
      <Text style={styles.text}>00:00</Text>
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
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#ffccd5",
    padding: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 35,
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
    alignItems: "center",
    padding: 5,
  },
  text: {
    fontSize: 20,
    padding: 10,
  },
});

export default AddNewTimeTracker;
