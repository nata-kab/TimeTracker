import React from "react";
import { useSelector } from "react-redux";

import ActiveTimeTracker from "./ActiveTimeTracker";
import AddNewTimeTracker from "./AddNewTimeTracker";

const MainTask = () => {
  const { timeTrackersList } = useSelector((state) => state);

  const activeTimeTracker = timeTrackersList.find(
    (value) => value.isTimeTrackerActive
  );

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
