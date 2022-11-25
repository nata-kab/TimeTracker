import React from "react";
import { useSelector } from "react-redux";

import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import ButtonHelper from "../ButtonHelper";

const ModalWindow = ({ modalVisible, closeTimeTrackerModal }) => {
  const { timeTrackersList } = useSelector((state) => state.timeTrackersList);

  const timeTrackerDetails = timeTrackersList.find(
    (value) => value.areTimeTrackerDetailsVisible
  );

  return (
    <>
      {timeTrackerDetails && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            closeTimeTrackerModal(timeTrackerDetails.timeTrackerId);
          }}
        >
          <View style={styles.container}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                {timeTrackerDetails.timeTrackerName}
              </Text>
              <Text style={styles.modalText}>
                time: {timeTrackerDetails.timeTrackerTime}
              </Text>
              <ButtonHelper
                buttonWidth={100}
                buttonColor={"#C0C0C0"}
                onPress={() =>
                  closeTimeTrackerModal(timeTrackerDetails.timeTrackerId)
                }
              >
                Close
              </ButtonHelper>
            </View>
          </View>
        </Modal>
      )}
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

export default ModalWindow;
