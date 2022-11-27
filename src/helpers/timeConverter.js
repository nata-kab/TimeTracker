const timeConverter = (time) => {
  const m = 60;
  const h = 60 * 60;

  let seconds = Math.floor(time % 60);
  let minutes = Math.floor((time / m) % 60);
  let hours = Math.floor((time / h) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours == 0
    ? minutes + ":" + seconds
    : hours + ":" + minutes + ":" + seconds;
};
export default timeConverter;
