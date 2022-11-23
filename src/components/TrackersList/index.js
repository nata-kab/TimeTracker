import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Title from "../Shared/Title";
import TrackerItem from "./TrackerItem";

const TrackerList = () => {
  const { activities } = useSelector((state) => state);

  return (

    {activities.length > 0 ? 
    <FlatList
      style={styles.list}
      data={activities}
      renderItem={TrackerItem}
      keyExtractor={(item) => item.trackedActivitiesData.activityId}
    /> : <Title> You don't have saved activity yet</Title>}
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
