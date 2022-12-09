import { StyleSheet } from "react-native";

export default styles = (size, color, fontStyle, fontWeight) =>
  StyleSheet.create({
    text: {
      fontSize: size,
      color: color,
      fontStyle: fontStyle,
      fontWeight: fontWeight,
    },
  });
