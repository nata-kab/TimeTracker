import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import Title from "../Shared/Title";
import TrackerItem from "./TrackerItem";

const TrackerList = () => {
  const { activities } = useSelector((state) => state);
  console.log(activities, "activities");
  console.log(activities.length);

  return (
    <>
      {activities.length > 0 ? (
        <FlatList
          style={styles.list}
          data={activities}
          renderItem={TrackerItem}
          keyExtractor={(item) => item.trackedActivitiesData.activityId}
        />
      ) : (
        <Title text="The tracked activity list is empty" />
      )}
    </>
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
