import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "95%",
    backgroundColor: "#ffffff",
    margin: 7,
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 20,
    shadowColor: "#A0A0A0",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  time: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    overflow: "hidden",
    color: "#999999",
  },
  title: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 15,
    marginRight: 15,
  },
});
