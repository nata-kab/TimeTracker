import React from "react";
import { View } from "react-native";
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
        maxWidth: "95%",
        backgroundColor: "#ffffff",
        margin: 5,
        padding: 2,
      }}
    >
      <Title text={activityName} />
      <TimeRecord activityTime={activityTime} />
      <Button color="lightBlue">Edit</Button>
    </View>
  );
};

export default TrackerItem;
