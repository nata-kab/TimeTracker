import React from "react";
import { View, SafeAreaView } from "react-native";
import MainTask from "../MainTask";
import TaskTitleInput from "../MainTask/TaskTitleInput";
import TrackersList from "../TrackersList";

const GeneralScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#f5f5f5",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 5,
          marginTop: 20,
        }}
      >
        <MainTask />
        <TrackersList />
      </View>
    </SafeAreaView>
  );
};

export default GeneralScreen;
