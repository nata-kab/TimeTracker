import { string, func, oneOfType, number, bool, array } from "prop-types";
import React from "react";
import { Alert, Modal, ScrollView, Text, View } from "react-native";

import dateConverter from "../../../helpers/dateConverter";
import timeConverter from "../../../helpers/timeConverter";
import ButtonHelper from "../../Shared/ButtonHelper";
import Typography from "../../Shared/Typography";
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
          <Typography size={22} color="#404040" fontWeight="600">
            {timeTrackerName}
          </Typography>

          <View style={styles.modalTextContainer}>
            <Typography size={17} color="#404040" fontWeight="400">
              Total time: {timeConverter(timeTrackerTotalTime)}
            </Typography>
          </View>

          <ScrollView style={styles.scrollView}>
            {timeTrackerTimesList.map((item, index) => (
              <View key={index} style={styles.scrollViewItem}>
                <Typography size={16} color="#404040" fontWeight="600">
                  Time: {timeConverter(item.timeTrackerDurationSeconds)}
                </Typography>

                <Typography>
                  Start time: {dateConverter(item.timeTrackerStartTime)}
                </Typography>

                <Typography>
                  End time: {dateConverter(item.timeTrackerEndTime)}
                </Typography>
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
