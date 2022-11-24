import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import ActiveTimeTracker from "./ActiveTimeTracker";
import InactiveTimeTracker from "./InactiveTimeTracker";

const MainTask = () => {
  const { timeTrackersList } = useSelector((state) => state);

  const activeTimeTracker = timeTrackersList.filter(
    (value) => value.timeTrackerIsActive
  );

  useEffect(() => {}, [timeTrackersList]);

  return (
    <>
      {activeTimeTracker.length > 0 ? (
        <ActiveTimeTracker activeTimeTracker={activeTimeTracker} />
      ) : (
        <InactiveTimeTracker />
      )}
    </>
  );
};

export default MainTask;
