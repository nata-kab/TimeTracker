import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
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
  modalTextContainer: {
    marginBottom: 15,
    padding: 5,
    textAlign: "center",
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "600",
  },
});
