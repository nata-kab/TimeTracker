import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import ActiveTimeTracker from "./ActiveTimeTracker";
import AddNewTimeTracker from "./AddNewTimeTracker";

const MainTask = () => {
  const { timeTrackersList } = useSelector((state) => state);

  // const activeTimeTracker = timeTrackersList.filter(
  //   (value) => value.timeTrackerIsActive
  // );
  const activeTimeTracker = timeTrackersList.find(
    (value) => value.timeTrackerIsActive
  );
  console.log(activeTimeTracker);

  return (
    <>
      {activeTimeTracker ? (
        <ActiveTimeTracker activeTimeTracker={activeTimeTracker} />
      ) : (
        <AddNewTimeTracker />
      )}
    </>
  );
};

export default MainTask;
