import React from "react";
import { FlatList } from "react-native";
import TrackerItem from "./TrackerItem";
import trackedActivities from "../../helpers/trackedActivities";

const TrackerList = () => {
  return (
    <FlatList
      style={{
        display: "flex",
        width: "95%",
        alignSelf: "center",
      }}
      data={trackedActivities}
      renderItem={TrackerItem}
      keyExtractor={(item) => item.trackedActivitiesData.activityId}
    />
  );
};

export default TrackerList;
