import { string, func, oneOfType, number, bool, array } from "prop-types";
import React from "react";
import { Alert, Modal, ScrollView, Text, View } from "react-native";

import dateConverter from "../../../helpers/dateConverter";
import timeConverter from "../../../helpers/timeConverter";
import ButtonHelper from "../../Shared/ButtonHelper";
import styles from "./ModalWindow.style";

const ModalWindow = ({
  isModalVisible,
  setIsModalVisible,
  timeTrackerDataToDisplay: {
    timeTrackerName,
    timeTrackerTotalTime,
    timeTrackerTimesList,
  },
}) => {
  if (!timeTrackerName) {
    return;
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalHeader}>{timeTrackerName}</Text>
          <Text style={styles.modalText}>
            Total time:
            {timeConverter(timeTrackerTotalTime)}
          </Text>
          <ScrollView style={styles.scrollView}>
            {timeTrackerTimesList.map((item, index) => (
              <View key={index} style={styles.scrollViewItem}>
                <Text>
                  Time: {timeConverter(item.timeTrackerDurationSeconds)}
                </Text>
                <Text>
                  Start time: {dateConverter(item.timeTrackerStartTime)}
                </Text>
                <Text>End time: {dateConverter(item.timeTrackerEndTime)}</Text>
              </View>
            ))}
          </ScrollView>
          <ButtonHelper
            buttonWidth={100}
            buttonColor={"#C0C0C0"}
            onPress={() => setIsModalVisible(!isModalVisible)}
          >
            Close
          </ButtonHelper>
        </View>
      </Modal>
    </>
  );
};

ModalWindow.propTypes = {
  isModalVisible: bool.isRequired,
  setIsModalVisible: func.isRequired,
  timeTrackerName: string,
  timeTrackerId: oneOfType([string, number]),
  timeTrackerTotalTime: oneOfType([string, number]),
  timeTrackerTimesList: array,
};
ModalWindow.defaultProps = {
  timeTrackerName: "",
  timeTrackerTimesList: null,
  timeTrackerId: null,
  timeTrackerTotalTime: null,
};

export default ModalWindow;
