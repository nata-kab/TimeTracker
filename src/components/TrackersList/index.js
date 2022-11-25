import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Title from "../Shared/Title";
import TrackerItem from "./TrackerItem";
import {
  editTimeTracker,
  showTimeTrackerDetails,
} from "../../redux/reducers/timeTrackersListSlice";
import ModalWindow from "../Shared/ModalWindow";

const TrackerList = () => {
  const [timeTrackerModalVisible, setTimeTrackerModalVisible] = useState(false);

  const { timeTrackersList } = useSelector((state) => state.timeTrackersList);
  const dispatch = useDispatch();

  const inactiveTrackersList = timeTrackersList.filter(
    (value) => !value.isTimeTrackerActive
  );

  const handleEditTimeTracker = (timeTrackerId) => {
    if (timeTrackersList.find((value) => value.isTimeTrackerActive)) {
      alert(
        "Is disabled starting new timer if timer is running! \nTurn off activity timer before active another one"
      );
      return;
    }
    dispatch(
      editTimeTracker({
        timeTrackerId: timeTrackerId,
        isTimeTrackerActive: true,
      })
    );
  };

  const handleTimeTrackerModal = (timeTrackerId) => {
    dispatch(
      showTimeTrackerDetails({
        timeTrackerId: timeTrackerId,
        areTimeTrackerDetailsVisible: true,
      })
    );
    setTimeTrackerModalVisible(!timeTrackerModalVisible);
  };
  const closeTimeTrackerModal = (timeTrackerId) => {
    dispatch(
      showTimeTrackerDetails({
        timeTrackerId: timeTrackerId,
        areTimeTrackerDetailsVisible: false,
      })
    );
    setTimeTrackerModalVisible(!timeTrackerModalVisible);
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
              handleTimeTrackerModal={handleTimeTrackerModal}
            />
          )}
          keyExtractor={(item) => item.timeTrackerId}
        />
      ) : (
        <Title text="The tracked activity list is empty" />
      )}
      <ModalWindow
        modalVisible={timeTrackerModalVisible}
        closeTimeTrackerModal={closeTimeTrackerModal}
      />
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
