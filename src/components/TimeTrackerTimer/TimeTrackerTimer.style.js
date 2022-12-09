import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  timeTrackerContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 0,
    width: "100%",
    height: 180,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,

    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 10,
  },
  timeTrackerButtonContainer: {
    alignSelf: "center",
    bottom: -27,
    right: 22,
    position: "absolute",
  },
  backgroundImage: {
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: " 100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.85,
  },
  inputContainer: {
    display: "flex",
    marginTop: 45,
    alignItems: "center",
    backgroundColor: "rgba(100,100,100, 0.15)",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  timeContainer: {
    display: "flex",
    marginBottom: 35,
  },
  mainTitle: {
    marginTop: 45,
    alignItems: "flex-start",
    marginLeft: 40,
    marginRight: 40,
  },
});

export default styles;
