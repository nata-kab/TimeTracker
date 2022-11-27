import { string, func, oneOfType, number, bool, array } from "prop-types";
import React from "react";

import { Alert, Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import timeConverter from "../../../helpers/timeConverter";
import ButtonHelper from "../ButtonHelper";
import Title from "../Title";

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
  console.log();

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
          <Text>{timeTrackerName}</Text>
          <Text style={styles.modalText}>
            Total time:
            {timeConverter(timeTrackerTotalTime)}
          </Text>
          <ScrollView style={styles.scrollView}>
            {timeTrackerTimesList.map((item, index) => (
              <View key={index} style={styles.scrollViewItem}>
                <Text>Time: {timeConverter(item.timeTrackerDuration)}</Text>
                <Text>Start time: {item.timeTrackerStartTime}</Text>
                <Text>End time: {item.timeTrackerEndTime}</Text>
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

const styles = StyleSheet.create({
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    width: "95%",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    maxHeight: "80%",
  },
  scrollViewItem: {
    width: "90%",
    padding: 5,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  modalText: {
    marginBottom: 15,
    padding: 5,
    textAlign: "center",
  },
});

ModalWindow.propTypes = {
  isModalVisible: bool.isRequired,
  setIsModalVisible: func.isRequired,
  timeTrackerName: string,
  timeTrackerId: oneOfType([string, number]),
  timeTrackerTotalTime: oneOfType([string, number]),
};
ModalWindow.defaultProps = {
  timeTrackerName: null,
  timeTrackerId: null,
  timeTrackerTotalTime: null,
};

export default ModalWindow;
