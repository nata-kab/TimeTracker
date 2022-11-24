import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Title from "../Shared/Title";
import TrackerItem from "./TrackerItem";
import { timeTrackersListItemEdit } from "../../redux/reducers/timeTrackersListSlice";

const TrackerList = () => {
  const { timeTrackersList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const inactiveTrackersList = timeTrackersList.filter(
    (value) => !value.timeTrackerIsActive
  );

  const handleEditTimeTracker = (timeTrackerId) => {
    // dispatch(
    //   timeTrackersListItemEdit({
    //     timeTrackerId: timeTrackerId,
    //     timeTrackerIsActive: true,
    //   })
    // );
  };

  return (
    <>
      {inactiveTrackersList.length > 0 ? (
        <FlatList
          style={styles.list}
          data={inactiveTrackersList}
          renderItem={({ item }) => (
            <TrackerItem item={item} myParam={handleEditTimeTracker} />
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
