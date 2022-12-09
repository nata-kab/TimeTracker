import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { useDispatch } from "react-redux";
import { resetTimeTrackerList } from "../../redux/reducers/timeTrackersListSlice";

import MainTask from "../MainTask";
import ButtonHelper from "../Shared/ButtonHelper";
import TimeTrackerTimer from "../TimeTrackerTimer";
import TrackersList from "../TrackersList";
import styles from "./GeneralScreen.style";

const GeneralScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <TimeTrackerTimer />
        {/* <MainTask /> */}
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

export default GeneralScreen;
