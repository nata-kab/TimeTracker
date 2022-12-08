import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },
  previousTime: {
    fontSize: 13,
    fontWeight: "300",
    color: "white",
  },
  activeTime: {
    display: "flex",
    fontSize: 45,
    color: "white",
    fontStyle: "italic",
  },
});
