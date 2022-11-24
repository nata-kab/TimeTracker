import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Title from "../Shared/Title";
import TrackerItem from "./TrackerItem";
import { editTimeTracker } from "../../redux/reducers/timeTrackersListSlice";

const TrackerList = () => {
  const { timeTrackersList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const inactiveTrackersList = timeTrackersList.filter(
    (value) => !value.isTimeTrackerActive
  );

  const handleEditTimeTracker = (timeTrackerId) => {
    // dispatch(
    //   editTimeTracker({
    //     timeTrackerId: timeTrackerId,
    //     isTimeTrackerActive: true,
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
            <TrackerItem
              item={item}
              handleEditTimeTracker={handleEditTimeTracker}
            />
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
