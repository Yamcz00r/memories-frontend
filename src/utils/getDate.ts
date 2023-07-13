import { DateTimeFormatOptions } from "luxon";

function getDate(date: Date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const nameOfTheDay = daysOfWeek[date.getDay()];

  const options: DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate = date.toLocaleDateString("us-US", options);
  return formattedDate;
}

export default getDate;
