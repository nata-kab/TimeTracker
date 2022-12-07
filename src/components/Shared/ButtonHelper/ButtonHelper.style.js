import { StyleSheet } from "react-native";

export default styles = (
  buttonColor,
  borderRadius,
  buttonWidth,
  buttonHeight
) =>
  StyleSheet.create({
    button: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: buttonColor,
      width: buttonWidth,
      height: buttonHeight,
      borderRadius: borderRadius,
      marginRight: 15,
      marginLeft: 15,
      marginTop: 3,
      marginBottom: 3,
      padding: 7,
    },
    text: {
      textAlign: "center",
    },
  });
