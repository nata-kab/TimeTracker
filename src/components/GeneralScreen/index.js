import React from "react";
import { View, Text } from "react-native";
import MainTask from "../MainTask";
import TrackersList from "../TrackersList";

const GeneralScreen = () => {
  return (
    <>
      <Text>GeneralScreen</Text>
      <MainTask />
      <TrackersList />
    </>
  );
};

export default GeneralScreen;
