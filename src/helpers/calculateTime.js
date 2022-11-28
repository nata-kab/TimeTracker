const calculateTime = (startTime, endTime) => {
  const timeSeconds = Math.floor(endTime / 1000) - Math.floor(startTime / 1000);
  return timeSeconds;
};
export default calculateTime;
