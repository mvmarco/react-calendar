export const checkLeapYear = (year) =>  {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 400 === 0);
}

export const getMonthsDaysInYear = (year) => {
  return [31, checkLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
};

