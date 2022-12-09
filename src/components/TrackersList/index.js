import React, { useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  editTimeTracker,
  saveActiveTrackerStartTime,
} from "../../redux/reducers/timeTrackersListSlice";

import ModalWindow from "./ModalWindow";
import Typography from "../Shared/Typography";
import TrackerItem from "./TrackerItem";
import styles from "./TrackersList.style";

const TrackerList = () => {
  const [timeTrackerModalVisible, setTimeTrackerModalVisible] = useState(false);
  const timeTrackerDataToDisplayRef = useRef({});
  const { timeTrackersList } = useSelector((state) => state);

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
    dispatch(saveActiveTrackerStartTime());

    dispatch(
      editTimeTracker({
        timeTrackerId: timeTrackerId,
        isTimeTrackerActive: true,
      })
    );
  };

  const handleTimeTrackerModal = (timeTrackerDataToDisplay) => {
    timeTrackerDataToDisplayRef.current = timeTrackerDataToDisplay;

    setTimeTrackerModalVisible(!timeTrackerModalVisible);
  };

  return (
    <>
      {inactiveTrackersList.length > 0 ? (
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
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
        <View style={styles.textContainer}>
          <Typography>The tracked activity list is empty</Typography>
        </View>
      )}
      <ModalWindow
        isModalVisible={timeTrackerModalVisible}
        setIsModalVisible={setTimeTrackerModalVisible}
        timeTrackerDataToDisplay={timeTrackerDataToDisplayRef.current}
      />
    </>
  );
};

export default TrackerList;
