import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { useDispatch } from "react-redux";
import { resetTimeTrackerList } from "../../redux/reducers/timeTrackersListSlice";

import MainTask from "../MainTask";
import ButtonHelper from "../Shared/ButtonHelper";
import TrackersList from "../TrackersList";

const GeneralScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar translucent backgroundColor="#7A5612" />
      <View style={styles.container}>
        <MainTask />
        <TrackersList />
        <View style={styles.buttonContainer}>
          <ButtonHelper
            buttonColor="silver"
            iconName="trash-o"
            onPress={() => dispatch(resetTimeTrackerList())}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "transparent",
    alignSelf: "center",
    bottom: 10,
    right: 22,
    position: "absolute",
  },
});

export default GeneralScreen;
