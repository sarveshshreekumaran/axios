const date = new Date();
const day = date.toLocaleString("en-US", {
  day: "2-digit",
});
const monthYear = date.toLocaleString("en-US", {
  month: "2-digit",
  year: "2-digit",
});

const today = day + "/" + monthYear;

export default today;
