import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Title from "../Shared/Title";
import TrackerItem from "./TrackerItem";
import { editTimeTracker } from "../../redux/reducers/timeTrackersListSlice";
import ModalWindow from "../Shared/ModalWindow";

const TrackerList = () => {
  // const [timeTrackerModalVisible, setTimeTrackerModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
    setModalVisible(!modalVisible);
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
      {/* <ModalWindow
        modalVisible={timeTrackerModalVisible}
        setModalVisible={setTimeTrackerModalVisible}
      /> */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    width: "95%",
    alignSelf: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default TrackerList;
