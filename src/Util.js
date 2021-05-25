export const DurationHandler = (num) => {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + "h " + minutes + "min";
};
