const dateConverter = (time) => {
  const monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(time);
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hour = date.getHours();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return (
    day +
    " " +
    monthsNames[month] +
    " " +
    year +
    "\n" +
    hour +
    ":" +
    minutes +
    ":" +
    seconds
  );
};
export default dateConverter;
