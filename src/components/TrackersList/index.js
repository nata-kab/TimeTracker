import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import Title from "../Shared/Title";
import TrackerItem from "./TrackerItem";

const TrackerList = () => {
  const { activities } = useSelector((state) => state);

  const isInactive = (value) => {
    return value.isActive === false;
  };

  const inactiveActivitiesList = activities.filter(isInactive);

  return (
    <>
      {activities.length > 0 ? (
        <FlatList
          style={styles.list}
          data={inactiveActivitiesList}
          renderItem={TrackerItem}
          keyExtractor={(item) => item.activityId}
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
