import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { resetTimeTrackerList } from "../../redux/reducers/timeTrackersListSlice";

import MainTask from "../MainTask";
import ButtonHelper from "../Shared/ButtonHelper";
import TrackersList from "../TrackersList";

const GeneralScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.container}>
        <MainTask />
        <TrackersList />
        <ButtonHelper
          buttonColor="#b22222"
          borderRadius={10}
          buttonWidth={100}
          onPress={() => dispatch(resetTimeTrackerList())}
        >
          Clear all
        </ButtonHelper>
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
});

export default GeneralScreen;
