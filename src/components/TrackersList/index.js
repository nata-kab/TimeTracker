import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Title from "../Shared/Title";
import TrackerItem from "./TrackerItem";
import {
  trackersListItemAdded,
  editActivity,
  timeTrackersListItemDeleted,
} from "../../redux/reducers/timeTrackersListSlice";

const TrackerList = () => {
  const { timeTrackersList } = useSelector((state) => state);

  // const isInactive = (value) => {
  //   return value.timeTrackerIsActive === false;
  // };

  const inactiveTrackersList = timeTrackersList.filter(
    (value) => !value.timeTrackerIsActive
  );

  const dispatch = useDispatch();

  // const handleEnableActivity = () => {
  //   console.log(activityId);
  //   dispatch(trackersListItemAdded({ id: activityId }));
  // };
  const handleEditActivity = (activityId) => {
    dispatch(timeTrackersListItemDeleted({ id: activityId }));
  };

  return (
    <>
      {inactiveTrackersList.length > 0 ? (
        <FlatList
          style={styles.list}
          data={inactiveTrackersList}
          renderItem={({ item }) => (
            <TrackerItem item={item} myParam={handleEditActivity} />
          )}
          keyExtractor={(item) => item.timeTrackerId}
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
