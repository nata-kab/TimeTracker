import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import TrackerItem from "./TrackerItem";

const TrackerList = () => {
  const activites = useSelector((state) => {
    return state.activities;
  });
  return (
    <FlatList
      style={styles.list}
      data={activites}
      renderItem={TrackerItem}
      keyExtractor={(item) => item.trackedActivitiesData.activityId}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    width: "95%",
    alignSelf: "center",
  },
});

export default TrackerList;
