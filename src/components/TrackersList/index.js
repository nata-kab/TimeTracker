import React from "react";
import { FlatList, StyleSheet } from "react-native";
import TrackerItem from "./TrackerItem";
import trackedActivities from "../../helpers/trackedActivities";

const TrackerList = () => {
  return (
    <FlatList
      style={styles.list}
      data={trackedActivities}
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
