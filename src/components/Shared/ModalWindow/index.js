import { string, func, oneOfType, number } from "prop-types";
import React from "react";

import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import ButtonHelper from "../ButtonHelper";

const ModalWindow = ({
  isModalVisible,
  setIsModalVisible,
  timeTrackerDataToDisplay: { timeTrackerName, timeTrackerTime },
  text,
}) => {
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
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {timeTrackerName && timeTrackerName}
              {text && text}
            </Text>
            {/* {timeTrackerTime && <Text style={styles.modalText}> time: </Text>} */}
            <ButtonHelper
              buttonWidth={100}
              buttonColor={"#C0C0C0"}
              onPress={() => setIsModalVisible(!isModalVisible)}
            >
              Close
            </ButtonHelper>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
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

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

ModalWindow.propTypes = {
  isModalVisible: func.isRequired,
  setIsModalVisible: func.isRequired,
  timeTrackerName: string,
  timeTrackerId: oneOfType([string, number]),
  timeTrackerTime: oneOfType([string, number]),
  text: string,
};
ModalWindow.defaultProps = {
  timeTrackerName: null,
  timeTrackerId: null,
  timeTrackerTime: null,
  text: null,
};

export default ModalWindow;
