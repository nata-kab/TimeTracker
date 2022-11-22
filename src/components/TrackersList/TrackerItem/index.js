import React from "react";
import { View, Text } from "react-native";
import Title from "../../Shared/Title";
import Button from "../../Shared/Button";
import TimeRecord from "../../Shared/TimeRecord";

const TrackerItem = ({
  item: {
    trackedActivitiesData: { activityName, activityId, activityTime },
  },
}) => {
  return (
    <View
      key={activityId}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "90%",
        backgroundColor: "#ffffff",
        margin: 5,
        padding: 2,
      }}
    >
      <Title text={activityName} />
      <TimeRecord activityTime={activityTime} />
      <Text>{activityTime}</Text>
      <Button>Edit</Button>
    </View>
  );
};

export default TrackerItem;
