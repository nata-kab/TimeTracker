import React from "react";
import { View } from "react-native";
import Title from "../../Shared/Title";
import ButtonHelper from "../../Shared/ButtonHelper";
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
      <ButtonHelper color="white" iconName="fa-solid fa-pencil">
        Edit
      </ButtonHelper>
    </View>
  );
};

export default TrackerItem;
