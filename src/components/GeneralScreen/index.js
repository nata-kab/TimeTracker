import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import MainTask from "../MainTask";
import TrackersList from "../TrackersList";

const GeneralScreen = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.container}>
        <MainTask />
        <TrackersList />
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
    padding: 5,
    marginTop: 20,
  },
});

export default GeneralScreen;
