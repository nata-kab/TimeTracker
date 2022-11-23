import React from "react";
import { View, StyleSheet } from "react-native";
import { oneOfType, string, number } from "prop-types";
import Title from "../../Shared/Title";
import ButtonHelper from "../../Shared/ButtonHelper";
import TimeRecord from "../../Shared/TimeRecord";

const TrackerItem = ({
  item: {
    trackedActivitiesData: { activityId, activityName, activityTime },
  },
}) => {
  return (
    <View key={activityId} style={styles.listItem}>
      <Title text={activityName} />
      <TimeRecord activityTime={activityTime} />
      <ButtonHelper iconName="edit" buttonColor="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "95%",
    backgroundColor: "#ffffff",
    margin: 5,
    padding: 2,
  },
});

TrackerItem.propTypes = {
  activityName: string.isRequired,
  activityId: oneOfType([string, number]).isRequired,
  activityTime: oneOfType([string, number]).isRequired,
};

export default TrackerItem;
