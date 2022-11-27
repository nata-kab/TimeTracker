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
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

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
